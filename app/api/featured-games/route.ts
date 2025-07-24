import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { Game } from '../../../models/Game';
import { Code } from '../../../models/Code';

export async function GET() {
  await connectToDatabase();
  const featuredGames = await Game.aggregate([
    { $match: { isFeatured: true } },
    {
      $lookup: {
        from: 'codes',
        localField: 'gameId',
        foreignField: 'gameId',
        as: 'codes'
      }
    },
    {
      $project: {
        gameId: 1,
        name: 1,
        image: 1,
        lastUpdated: 1,
        totalCodes: { $size: '$codes' },
        activeCodes: {
          $size: {
            $filter: {
              input: '$codes',
              cond: { $eq: ['$$this.status', 'active'] }
            }
          }
        }
      }
    }
  ]);
  return NextResponse.json(featuredGames);
}