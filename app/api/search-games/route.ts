import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { Game } from '../../../models/Game';
import { Code } from '../../../models/Code';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('search') || '';

  await connectToDatabase();

  const games = await Game.aggregate([
    {
      $match: {
        name: { $regex: query, $options: 'i' } // Case-insensitive search
      }
    },
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
        category: 1,
        popularity: 1,
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

  return NextResponse.json(games);
}