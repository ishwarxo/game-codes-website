import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { Game } from '../../../models/Game';
import { Code } from '../../../models/Code';

export async function GET() {
  await connectToDatabase();
  const latestGames = await Game.aggregate([
    { $sort: { lastUpdated: -1 } },
    { $limit: 6 },
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
        id: '$gameId',
        name: 1,
        image: 1,
        lastUpdated: 1,
        totalActiveCodes: {
          $size: {
            $filter: {
              input: '$codes',
              cond: { $eq: ['$$this.status', 'active'] }
            }
          }
        },
        newCodesCount: {
          $size: {
            $filter: {
              input: '$codes',
              cond: {
                $and: [
                  { $eq: ['$$this.status', 'active'] },
                  { $gte: ['$$this.addedDate', new Date(Date.now() - 24 * 60 * 60 * 1000)] }
                ]
              }
            }
          }
        }
      }
    }
  ]);
  return NextResponse.json(latestGames);
}