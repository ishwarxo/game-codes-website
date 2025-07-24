'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CodeCard from '../../../components/CodeCard';
import RelatedPostsCard from '../../../components/RelatedPostsCard';
import Link from 'next/link';

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

interface GameDetailProps {
  gameData: GameData;
}

export default function GameDetail({ gameData }: GameDetailProps) {
  const { name, description, image, totalPlayers, rating, codes } = gameData;

  if (!gameData) {
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

  const activeCodes = codes.filter(code => code.status === 'active');
  const expiredCodes = codes.filter(code => code.status === 'expired');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Game Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4 mt-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{name} Codes</h1>
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <div className="flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                    <span className="font-medium">{rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{totalPlayers} Players</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{description}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Redeem {name} Codes</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Step-by-step Guide:</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    <span>Launch {name} in Roblox</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Find More {name} Codes</h2>
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
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expired Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {expiredCodes.map((code, index) => (
                <CodeCard key={index} {...code} />
              ))}
            </div>
          </section>
        )}
      <RelatedPostsCard/>  
      </div>
      <Footer/>
    </div>
  );
}