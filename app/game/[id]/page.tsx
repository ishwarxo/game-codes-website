import { connectToDatabase } from '../../../lib/mongodb';
import { Game } from '../../../models/Game';
import { Code } from '../../../models/Code';
import GameDetail from './GameDetail';

interface GameData {
  name: string;
  description: string;
  image: string;
  totalPlayers: string;
  rating: number;
  codes: Array<{
    code: string;
    reward: string;
    status: 'active' | 'expired';
    addedDate: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await params to resolve the Promise
  await connectToDatabase();
  const game = await Game.findOne({ gameId: id });
  const name = game?.name || 'Roblox Game';
  return {
    title: `${name} Codes`,
    description: `Get the latest ${name} codes and rewards.`,
  };
}

export async function generateStaticParams() {
  await connectToDatabase();
  const games = await Game.find({}, 'gameId');
  return games.map(game => ({ id: game.gameId }));
}

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await params to resolve the Promise
  await connectToDatabase();
  const game = await Game.findOne({ gameId: id });
  if (!game) {
    return <div>Game not found</div>;
  }
  const codes = await Code.find({ gameId: id });

  const gameData: GameData = {
    name: game.name,
    description: game.description,
    image: game.image,
    totalPlayers: game.totalPlayers,
    rating: game.rating,
    codes: codes.map(code => ({
      code: code.code,
      reward: code.reward,
      status: code.status,
      addedDate: formatDate(code.addedDate),
    })),
  };

  return <GameDetail gameData={gameData} />;
}

function formatDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) return `${diffHours} hours ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths} months ago`;
}

// import { connectToDatabase } from '../../../lib/mongodb';
// import { Game } from '../../../models/Game';
// import { Code } from '../../../models/Code';
// import GameDetail from './GameDetail';

// interface GameData {
//   name: string;
//   description: string;
//   image: string;
//   totalPlayers: string;
//   rating: number;
//   codes: Array<{
//     code: string;
//     reward: string;
//     status: 'active' | 'expired';
//     addedDate: string;
//   }>;
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   await connectToDatabase();
//   const game = await Game.findOne({ gameId: params.id });
//   const name = game?.name || 'Roblox Game';
//   return {
//     title: `${name} Codes`,
//     description: `Get the latest ${name} codes and rewards.`,
//   };
// }

// export async function generateStaticParams() {
//   await connectToDatabase();
//   const games = await Game.find({}, 'gameId');
//   return games.map(game => ({ id: game.gameId }));
// }

// export default async function GamePage({ params }: { params: { id: string } }) {
//   await connectToDatabase();
//   const game = await Game.findOne({ gameId: params.id });
//   if (!game) {
//     return <div>Game not found</div>;
//   }
//   const codes = await Code.find({ gameId: params.id });

//   const gameData: GameData = {
//     name: game.name,
//     description: game.description,
//     image: game.image,
//     totalPlayers: game.totalPlayers,
//     rating: game.rating,
//     codes: codes.map(code => ({
//       code: code.code,
//       reward: code.reward,
//       status: code.status,
//       addedDate: formatDate(code.addedDate),
//     })),
//   };

//   return <GameDetail gameData={gameData} />;
// }

// function formatDate(date: Date): string {
//   const now = new Date();
//   const diffMs = now.getTime() - date.getTime();
//   const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
//   if (diffHours < 24) return `${diffHours} hours ago`;
//   const diffDays = Math.floor(diffHours / 24);
//   if (diffDays < 30) return `${diffDays} days ago`;
//   const diffMonths = Math.floor(diffDays / 30);
//   return `${diffMonths} months ago`;
// }