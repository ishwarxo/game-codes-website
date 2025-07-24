import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { Game } from '../../../models/Game';
import { Code } from '../../../models/Code';

export async function GET() {
  await connectToDatabase();
  const popularGames = await Game.aggregate([
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
        activeCodes: {
          $size: {
            $filter: {
              input: '$codes',
              cond: { $eq: ['$$this.status', 'active'] }
            }
          }
        },
        totalCodes: { $size: '$codes' },
        lastUpdated: 1,
        category: 1,
        popularity: {
          $cond: {
            if: { $eq: ['$popularity', 'Very High'] }, then: 95,
            else: { $cond: { if: { $eq: ['$popularity', 'High'] }, then: 85, else: 70 } }
          }
        },
        monthlyPlayers: 1,
        description: 1
      }
    },
    { $sort: { popularity: -1 } }
  ]);
  return NextResponse.json(popularGames);
}