
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CodeCard from '../../../components/CodeCard';
import Link from 'next/link';

const gameData = {
  'adopt-me': {
    name: 'Adopt Me!',
    description: 'Adopt Me! is a massively multiplayer online game on Roblox, developed by DreamCraft. The game focuses on adopting and caring for a variety of virtual pets.',
    image: 'https://readdy.ai/api/search-image?query=Adopt%20Me%20Roblox%20game%20cute%20pets%20adoption%20house%20colorful%20bright%20fantasy%20world%20with%20adorable%20animals%20and%20cozy%20home%20background%20vibrant%20colors%20family-friendly%20atmosphere%20detailed%20high%20quality&width=800&height=400&seq=adoptme2&orientation=landscape',
    totalPlayers: '1.2M',
    rating: 4.8,
    codes: [
      { code: 'SUMMERFUN2024', reward: '500 Bucks + Summer Pet', status: 'active' as const, addedDate: '2 hours ago' },
      { code: 'PETLOVER', reward: '300 Bucks + Pet Accessories', status: 'active' as const, addedDate: '1 day ago' },
      { code: 'ADOPT2024', reward: '1000 Bucks + Rare Toy', status: 'active' as const, addedDate: '2 days ago' },
      { code: 'FREEPET', reward: 'Common Pet + 200 Bucks', status: 'active' as const, addedDate: '3 days ago' },
      { code: 'SUMMER2023', reward: '500 Bucks', status: 'expired' as const, addedDate: '1 month ago' },
      { code: 'WINTER2023', reward: 'Winter Pet', status: 'expired' as const, addedDate: '2 months ago' }
    ]
  },
  'blox-fruits': {
    name: 'Blox Fruits',
    description: 'Blox Fruits is an adventure Roblox game inspired by the popular One Piece anime. Players can explore islands, fight bosses, and collect devil fruits.',
    image: 'https://readdy.ai/api/search-image?query=Blox%20Fruits%20Roblox%20game%20pirate%20adventure%20ocean%20islands%20treasure%20chest%20devil%20fruits%20anime%20style%20colorful%20tropical%20paradise%20with%20ships%20and%20magical%20powers%20detailed%20high%20quality&width=800&height=400&seq=bloxfruits2&orientation=landscape',
    totalPlayers: '2.1M',
    rating: 4.9,
    codes: [
      { code: 'PIRATEKING', reward: '2x EXP Boost (15 mins)', status: 'active' as const, addedDate: '1 hour ago' },
      { code: 'BLOXFRUIT2024', reward: 'Free Stat Reset + 500K Beli', status: 'active' as const, addedDate: '4 hours ago' },
      { code: 'DEVILFRUITS', reward: '2x Drop Chance (10 mins)', status: 'active' as const, addedDate: '1 day ago' },
      { code: 'OCEANKING', reward: '1M Beli + EXP Boost', status: 'active' as const, addedDate: '2 days ago' },
      { code: 'OLDCODE2023', reward: '500K Beli', status: 'expired' as const, addedDate: '1 month ago' }
    ]
  },
  'brookhaven': {
    name: 'Brookhaven RP',
    description: 'Brookhaven RP is a popular roleplay game where players can live their virtual life in a peaceful town with houses, cars, and various activities.',
    image: 'https://readdy.ai/api/search-image?query=Brookhaven%20RP%20Roblox%20game%20suburban%20neighborhood%20houses%20cars%20roleplay%20city%20modern%20town%20with%20beautiful%20homes%20and%20streets%20peaceful%20community%20setting%20detailed%20high%20quality&width=800&height=400&seq=brookhaven2&orientation=landscape',
    totalPlayers: '800K',
    rating: 4.6,
    codes: [
      { code: 'NEWHOUSE', reward: 'Free House Upgrade', status: 'active' as const, addedDate: '3 hours ago' },
      { code: 'ROLEPLAY2024', reward: 'Premium Car + Accessories', status: 'active' as const, addedDate: '1 day ago' },
      { code: 'BROOKTOWN', reward: 'Exclusive Outfit + Money', status: 'active' as const, addedDate: '2 days ago' },
      { code: 'OLDTOWN', reward: 'Classic Car', status: 'expired' as const, addedDate: '3 weeks ago' }
    ]
  }
};

interface GameDetailProps {
  gameId: string;
}

export default function GameDetail({ gameId }: GameDetailProps) {
  const game = gameData[gameId as keyof typeof gameData];
  
  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Game Not Found</h1>
          <Link href="/" className="text-purple-600 hover:text-purple-700 cursor-pointer">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const activeCodes = game.codes.filter(code => code.status === 'active');
  const expiredCodes = game.codes.filter(code => code.status === 'expired');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Game Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* <div className="flex items-start space-x-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{game.name}</h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                    <span className="font-medium">{game.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{game.totalPlayers} Players</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{game.description}</p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{activeCodes.length} Active Codes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">{expiredCodes.length} Expired Codes</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col md:flex-row md:space-x-6 mb-6"> */}
            {/* Image Section */}
            {/* <div className="mb-4 md:mb-0 md:w-1/3">
              <img
                src={game.image}
                alt={game.name}
                className="w-full rounded-lg object-cover"
              />
            </div> */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text Content Section */}
            <div className="flex-1">
              <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4 mt-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{game.name} Codes</h1>
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <div className="flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                    <span className="font-medium">{game.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{game.totalPlayers} Players</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{game.description}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Active Codes */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Active Codes</h2>
            <div className="text-sm text-gray-600">
              Last updated: 2 hours ago
            </div>
          </div>
          
          {activeCodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeCodes.map((code, index) => (
                <CodeCard key={index} {...code} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <i className="ri-inbox-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Codes</h3>
              <p className="text-gray-600">Check back later for new codes!</p>
            </div>
          )}
        </section>

        {/* How to Redeem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Redeem {game.name} Codes</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Step-by-step Guide:</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    <span>Launch {game.name} in Roblox</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                    <span>Look for the "Codes" or "Settings" button in the game</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                    <span>Copy and paste the code from above</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">4</span>
                    <span>Click "Redeem" and enjoy your rewards!</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* How to find more codes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Find More {game.name} Codes</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-8">
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Tips:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-green-500 w-4 h-4 flex items-center justify-center mt-1 flex-shrink-0"></i>
                    <span>Codes are case-sensitive</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-green-500 w-4 h-4 flex items-center justify-center mt-1 flex-shrink-0"></i>
                    <span>Each code can only be used once per account</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-green-500 w-4 h-4 flex items-center justify-center mt-1 flex-shrink-0"></i>
                    <span>Codes may expire without notice</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-green-500 w-4 h-4 flex items-center justify-center mt-1 flex-shrink-0"></i>
                    <span>Bookmark this page for regular updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expired Codes */}
        {expiredCodes.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expired Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {expiredCodes.map((code, index) => (
                <CodeCard key={index} {...code} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer/>
    </div>
  );
}
