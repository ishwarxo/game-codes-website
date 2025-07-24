import 'dotenv/config';
import { connectToDatabase } from '../lib/mongodb';
import { Game } from '../models/Game';
import { Code } from '../models/Code';

async function populateDB() {
  await connectToDatabase();

  await Game.deleteMany({});
  await Code.deleteMany({});

  const games = [
    {
      gameId: 'adopt-me',
      name: 'Adopt Me!',
      description: 'Adopt Me! is a massively multiplayer online game on Roblox, developed by DreamCraft. The game focuses on adopting and caring for a variety of virtual pets.',
      image: 'https://readdy.ai/api/search-image?query=Adopt%20Me%20Roblox%20game%20cute%20pets%20adoption%20house%20colorful%20bright%20fantasy%20world%20with%20adorable%20animals%20and%20cozy%20home%20background%20vibrant%20colors%20family-friendly%20atmosphere%20detailed%20high%20quality&width=800&height=400&seq=adoptme2&orientation=landscape',
      category: 'Roleplay',
      totalPlayers: '1.2M',
      rating: 4.8,
      popularity: 'Very High',
      lastUpdated: new Date(),
      isFeatured: true,
      monthlyPlayers: '2.5M'
    },
    {
      gameId: 'blox-fruits',
      name: 'Blox Fruits',
      description: 'Blox Fruits is an adventure Roblox game inspired by the popular One Piece anime. Players can explore islands, fight bosses, and collect devil fruits.',
      image: 'https://readdy.ai/api/search-image?query=Blox%20Fruits%20Roblox%20game%20pirate%20adventure%20ocean%20islands%20treasure%20chest%20devil%20fruits%20anime%20style%20colorful%20tropical%20paradise%20with%20ships%20and%20magical%20powers%20detailed%20high%20quality&width=800&height=400&seq=bloxfruits2&orientation=landscape',
      category: 'Adventure',
      totalPlayers: '2.1M',
      rating: 4.9,
      popularity: 'Very High',
      lastUpdated: new Date(Date.now() - 4 * 60 * 60 * 1000),
      isFeatured: true,
      monthlyPlayers: '2.1M'
    },
    {
      gameId: 'brookhaven',
      name: 'Brookhaven RP',
      description: 'Brookhaven RP is a popular roleplay game where players can live their virtual life in a peaceful town with houses, cars, and various activities.',
      image: 'https://readdy.ai/api/search-image?query=Brookhaven%20RP%20Roblox%20game%20suburban%20neighborhood%20houses%20cars%20roleplay%20city%20modern%20town%20with%20beautiful%20homes%20and%20streets%20peaceful%20community%20setting%20detailed%20high%20quality&width=800&height=400&seq=brookhaven2&orientation=landscape',
      category: 'Roleplay',
      totalPlayers: '800K',
      rating: 4.6,
      popularity: 'High',
      lastUpdated: new Date(Date.now() - 3 * 60 * 60 * 1000),
      isFeatured: true,
      monthlyPlayers: '1.8M'
    }
  ];

  const codes = [
    {
      gameId: 'adopt-me',
      code: 'SUMMERFUN2024',
      reward: '500 Bucks + Summer Pet',
      status: 'active',
      addedDate: new Date()
    },
    {
      gameId: 'adopt-me',
      code: 'PETLOVER',
      reward: '300 Bucks + Pet Accessories',
      status: 'active',
      addedDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
    },
    {
      gameId: 'blox-fruits',
      code: 'PIRATEKING',
      reward: '2x EXP Boost (15 mins)',
      status: 'active',
      addedDate: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
      gameId: 'brookhaven',
      code: 'NEWHOUSE',
      reward: 'Free House Upgrade',
      status: 'active',
      addedDate: new Date(Date.now() - 3 * 60 * 60 * 1000)
    },
    {
      gameId: 'adopt-me',
      code: 'SUMMER2023',
      reward: '500 Bucks',
      status: 'expired',
      addedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    }
  ];

  await Game.insertMany(games);
  await Code.insertMany(codes);

  console.log('Database populated');
}

populateDB().catch(console.error);