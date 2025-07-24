'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Code {
  id: string;
  code: string;
  reward: string;
  status: 'active' | 'expired';
  addedDate: string;
  gameId: string;
  gameName: string;
  gameImage: string;
}

interface Game {
  id: string;
  name: string;
  image: string;
  lastUpdated: string;
  newCodesCount: number;
  totalActiveCodes: number;
}

export default function LatestPage() {
  const [activeTab, setActiveTab] = useState<'codes' | 'games'>('codes');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [latestCodes, setLatestCodes] = useState<Code[]>([]);
  const [latestGames, setLatestGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [codesRes, gamesRes] = await Promise.all([
        fetch('/api/latest-codes'),
        fetch('/api/latest-games')
      ]);
      const codesData = await codesRes.json();
      const gamesData = await gamesRes.json();

      setLatestCodes(codesData.map((code: any) => ({
        ...code,
        addedDate: formatDate(new Date(code.addedDate))
      })));
      setLatestGames(gamesData.map((game: any) => ({
        ...game,
        lastUpdated: formatDate(new Date(game.lastUpdated))
      })));
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the newest Roblox codes and recently updated games. Fresh codes are added daily!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-code-line text-green-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">New Codes Today</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-gamepad-line text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Updated Games</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-time-line text-purple-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Last Update</p>
                <p className="text-2xl font-bold text-gray-900">2h ago</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <i className="ri-fire-line text-orange-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Codes</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('codes')}
                className={`px-8 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === 'codes'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Latest Codes
              </button>
              <button
                onClick={() => setActiveTab('games')}
                className={`px-8 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === 'games'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Updated Games
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'codes' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Newest Roblox Codes</h2>
              <p className="text-gray-600">Recently added codes from all your favorite games</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {latestCodes.map((codeItem) => (
                <div key={codeItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img 
                        src={codeItem.gameImage} 
                        alt={codeItem.gameName}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Link 
                            href={`/game/${codeItem.gameId}`}
                            className="text-sm font-medium text-purple-600 hover:text-purple-700 cursor-pointer"
                          >
                            {codeItem.gameName} Codes
                          </Link>
                          <p className="text-xs text-gray-500">{codeItem.addedDate}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          codeItem.status === 'active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {codeItem.status === 'active' ? 'Active' : 'Expired'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono font-bold text-purple-600">
                          {codeItem.code}
                        </code>
                        <button
                          onClick={() => handleCopyCode(codeItem.code)}
                          disabled={codeItem.status === 'expired'}
                          className={`p-1 rounded transition-all ${
                            codeItem.status === 'active'
                              ? 'hover:bg-purple-100 text-purple-600 cursor-pointer'
                              : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <i className={`ri-${copiedCode === codeItem.code ? 'check' : 'file-copy'}-line text-sm`}></i>
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">{codeItem.reward}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/games"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium cursor-pointer whitespace-nowrap"
              >
                <i className="ri-gamepad-line mr-2"></i>
                View All Games
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'games' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Recently Updated Games</h2>
              <p className="text-gray-600">Games with new codes and fresh content</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestGames.map((game) => (
                <Link 
                  key={game.id}
                  href={`/game/${game.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {game.newCodesCount} New
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {game.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="ri-time-line mr-1"></i>
                      Updated {game.lastUpdated}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-green-600">
                        <i className="ri-code-line mr-1"></i>
                        {game.totalActiveCodes} Active Codes
                      </div>
                      <div className="flex items-center text-purple-600">
                        <span className="text-sm font-medium">View Codes</span>
                        <i className="ri-arrow-right-line ml-1"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/games"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium cursor-pointer whitespace-nowrap"
              >
                <i className="ri-gamepad-line mr-2"></i>
                Browse All Games
              </Link>
            </div>
          </div>
        )}

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Update Schedule</h2>
            <p className="text-gray-600 mb-6">Stay informed about when we add new codes and update game information</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-sun-line text-green-600 text-2xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Daily Updates</h3>
                <p className="text-sm text-gray-600">New codes added every morning at 9 AM EST</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-refresh-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Code Verification</h3>
                <p className="text-sm text-gray-600">All codes tested every 6 hours for accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-notification-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instant Alerts</h3>
                <p className="text-sm text-gray-600">New game codes posted within minutes of release</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
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