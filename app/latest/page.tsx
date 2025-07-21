
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

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

  const latestCodes: Code[] = [
    {
      id: '1',
      code: 'WINTER2024',
      reward: '500 Coins + Winter Pet',
      status: 'active',
      addedDate: '2 hours ago',
      gameId: 'adopt-me',
      gameName: 'Adopt Me!',
      gameImage: 'https://readdy.ai/api/search-image?query=cute%20colorful%20pet%20adoption%20game%20with%20rainbow%20background%2C%20cartoon%20style%20pets%20playing%20together%20in%20magical%20world&width=400&height=300&seq=adopt-me-latest&orientation=landscape'
    },
    {
      id: '2',
      code: 'BLOXFRUIT2024',
      reward: '2x EXP Boost (20 minutes)',
      status: 'active',
      addedDate: '4 hours ago',
      gameId: 'blox-fruits',
      gameName: 'Blox Fruits',
      gameImage: 'https://readdy.ai/api/search-image?query=pirate%20adventure%20game%20with%20magical%20fruits%20and%20ocean%20battles%2C%20anime%20style%20characters%20with%20swords%20and%20powers&width=400&height=300&seq=blox-fruits-latest&orientation=landscape'
    },
    {
      id: '3',
      code: 'ARSENAL2024',
      reward: 'Exclusive Skin + 1000 Credits',
      status: 'active',
      addedDate: '6 hours ago',
      gameId: 'arsenal',
      gameName: 'Arsenal',
      gameImage: 'https://readdy.ai/api/search-image?query=modern%20tactical%20shooter%20game%20with%20colorful%20weapons%20and%20combat%20arena%2C%20competitive%20gaming%20atmosphere&width=400&height=300&seq=arsenal-latest&orientation=landscape'
    },
    {
      id: '4',
      code: 'BEESWARM2024',
      reward: 'Royal Jelly + Honey Boost',
      status: 'active',
      addedDate: '8 hours ago',
      gameId: 'bee-swarm',
      gameName: 'Bee Swarm Simulator',
      gameImage: 'https://readdy.ai/api/search-image?query=colorful%20bee%20farm%20simulation%20with%20flowers%20and%20hives%2C%20cute%20cartoon%20bees%20collecting%20honey%20in%20bright%20garden&width=400&height=300&seq=bee-swarm-latest&orientation=landscape'
    },
    {
      id: '5',
      code: 'JAILBREAK2024',
      reward: '10,000 Cash + VIP Access',
      status: 'active',
      addedDate: '12 hours ago',
      gameId: 'jailbreak',
      gameName: 'Jailbreak',
      gameImage: 'https://readdy.ai/api/search-image?query=urban%20crime%20simulation%20game%20with%20police%20cars%20and%20city%20streets%2C%20modern%20cityscape%20with%20action%20scenes&width=400&height=300&seq=jailbreak-latest&orientation=landscape'
    },
    {
      id: '6',
      code: 'PETX2024',
      reward: 'Rainbow Pet + Diamonds',
      status: 'active',
      addedDate: '16 hours ago',
      gameId: 'pet-simulator-x',
      gameName: 'Pet Simulator X',
      gameImage: 'https://readdy.ai/api/search-image?query=fantasy%20pet%20collection%20game%20with%20magical%20creatures%20and%20rainbow%20effects%2C%20cute%20animated%20pets%20in%20colorful%20world&width=400&height=300&seq=pet-sim-x-latest&orientation=landscape'
    },
    {
      id: '7',
      code: 'TOWERS2024',
      reward: 'Legendary Tower + Coins',
      status: 'active',
      addedDate: '20 hours ago',
      gameId: 'tower-defense',
      gameName: 'Tower Defense Simulator',
      gameImage: 'https://readdy.ai/api/search-image?query=strategic%20tower%20defense%20game%20with%20defensive%20structures%20and%20enemies%2C%20battlefield%20with%20towers%20and%20combat&width=400&height=300&seq=tower-defense-latest&orientation=landscape'
    },
    {
      id: '8',
      code: 'MINING2024',
      reward: 'Diamond Pickaxe + Ore Boost',
      status: 'active',
      addedDate: '1 day ago',
      gameId: 'mining-simulator',
      gameName: 'Mining Simulator',
      gameImage: 'https://readdy.ai/api/search-image?query=underground%20mining%20game%20with%20gems%20and%20pickaxes%2C%20cave%20environment%20with%20precious%20stones%20and%20mining%20equipment&width=400&height=300&seq=mining-sim-latest&orientation=landscape'
    },
    {
      id: '9',
      code: 'BROOKHAVEN2024',
      reward: 'Premium House + Furniture',
      status: 'expired',
      addedDate: '1 day ago',
      gameId: 'brookhaven',
      gameName: 'Brookhaven RP',
      gameImage: 'https://readdy.ai/api/search-image?query=suburban%20neighborhood%20roleplay%20game%20with%20houses%20and%20families%2C%20peaceful%20town%20setting%20with%20residential%20areas&width=400&height=300&seq=brookhaven-latest&orientation=landscape'
    },
    {
      id: '10',
      code: 'MURDER2024',
      reward: 'Exclusive Knife Skin + Coins',
      status: 'active',
      addedDate: '1 day ago',
      gameId: 'murder-mystery',
      gameName: 'Murder Mystery 2',
      gameImage: 'https://readdy.ai/api/search-image?query=mystery%20detective%20game%20with%20dark%20atmosphere%20and%20investigation%20theme%2C%20suspenseful%20environment%20with%20shadows&width=400&height=300&seq=murder-mystery-latest&orientation=landscape'
    }
  ];

  const latestGames: Game[] = [
    {
      id: 'adopt-me',
      name: 'Adopt Me!',
      image: 'https://readdy.ai/api/search-image?query=cute%20colorful%20pet%20adoption%20game%20with%20rainbow%20background%2C%20cartoon%20style%20pets%20playing%20together%20in%20magical%20world&width=300&height=200&seq=adopt-me-game&orientation=landscape',
      lastUpdated: '2 hours ago',
      newCodesCount: 3,
      totalActiveCodes: 8
    },
    {
      id: 'blox-fruits',
      name: 'Blox Fruits',
      image: 'https://readdy.ai/api/search-image?query=pirate%20adventure%20game%20with%20magical%20fruits%20and%20ocean%20battles%2C%20anime%20style%20characters%20with%20swords%20and%20powers&width=300&height=200&seq=blox-fruits-game&orientation=landscape',
      lastUpdated: '4 hours ago',
      newCodesCount: 2,
      totalActiveCodes: 12
    },
    {
      id: 'arsenal',
      name: 'Arsenal',
      image: 'https://readdy.ai/api/search-image?query=modern%20tactical%20shooter%20game%20with%20colorful%20weapons%20and%20combat%20arena%2C%20competitive%20gaming%20atmosphere&width=300&height=200&seq=arsenal-game&orientation=landscape',
      lastUpdated: '6 hours ago',
      newCodesCount: 1,
      totalActiveCodes: 5
    },
    {
      id: 'bee-swarm',
      name: 'Bee Swarm Simulator',
      image: 'https://readdy.ai/api/search-image?query=colorful%20bee%20farm%20simulation%20with%20flowers%20and%20hives%2C%20cute%20cartoon%20bees%20collecting%20honey%20in%20bright%20garden&width=300&height=200&seq=bee-swarm-game&orientation=landscape',
      lastUpdated: '8 hours ago',
      newCodesCount: 2,
      totalActiveCodes: 7
    },
    {
      id: 'jailbreak',
      name: 'Jailbreak',
      image: 'https://readdy.ai/api/search-image?query=urban%20crime%20simulation%20game%20with%20police%20cars%20and%20city%20streets%2C%20modern%20cityscape%20with%20action%20scenes&width=300&height=200&seq=jailbreak-game&orientation=landscape',
      lastUpdated: '12 hours ago',
      newCodesCount: 1,
      totalActiveCodes: 6
    },
    {
      id: 'pet-simulator-x',
      name: 'Pet Simulator X',
      image: 'https://readdy.ai/api/search-image?query=fantasy%20pet%20collection%20game%20with%20magical%20creatures%20and%20rainbow%20effects%2C%20cute%20animated%20pets%20in%20colorful%20world&width=300&height=200&seq=pet-sim-x-game&orientation=landscape',
      lastUpdated: '16 hours ago',
      newCodesCount: 1,
      totalActiveCodes: 9
    }
  ];

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
    <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the newest Roblox codes and recently updated games. Fresh codes are added daily!
          </p>
        </div>

        {/* Stats Cards */}
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

        {/* Tab Navigation */}
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

        {/* Latest Codes Tab */}
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

        {/* Updated Games Tab */}
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

        {/* Update Schedule */}
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
