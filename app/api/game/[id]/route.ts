import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import { Game } from '../../../../models/Game';
import { Code } from '../../../../models/Code';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const game = await Game.findOne({ gameId: params.id });
  if (!game) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 });
  }
  const codes = await Code.find({ gameId: params.id });
  return NextResponse.json({ game, codes });
}