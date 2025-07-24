import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { Code } from '../../../models/Code';
import { Game } from '../../../models/Game';

export async function GET() {
  await connectToDatabase();
  const recentCodes = await Code.aggregate([
    { $match: { status: 'active' } },
    { $sort: { addedDate: -1 } },
    { $limit: 4 },
    {
      $lookup: {
        from: 'games',
        localField: 'gameId',
        foreignField: 'gameId',
        as: 'game'
      }
    },
    { $unwind: '$game' },
    {
      $project: {
        game: '$game.name',
        code: 1,
        reward: 1,
        status: 1,
      }
    }
  ]);
  return NextResponse.json(recentCodes);
}