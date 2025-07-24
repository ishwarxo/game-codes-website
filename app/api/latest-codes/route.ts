import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import { Code } from '../../../models/Code';
import { Game } from '../../../models/Game';

export async function GET() {
  await connectToDatabase();
  const latestCodes = await Code.aggregate([
    { $sort: { addedDate: -1 } },
    { $limit: 10 },
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
        id: '$_id',
        code: 1,
        reward: 1,
        status: 1,
        addedDate: 1,
        gameId: 1,
        gameName: '$game.name',
        gameImage: '$game.image'
      }
    }
  ]);
  return NextResponse.json(latestCodes);
}