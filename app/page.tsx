
'use client';

import Header from '../components/Header';
import GameCard from '../components/GameCard';
import Link from 'next/link';

const featuredGames = [
  {
    id: 'adopt-me',
    name: 'Adopt Me!',
    image: 'https://readdy.ai/api/search-image?query=Adopt%20Me%20Roblox%20game%20cute%20pets%20adoption%20house%20colorful%20bright%20fantasy%20world%20with%20adorable%20animals%20and%20cozy%20home%20background%20vibrant%20colors%20family-friendly%20atmosphere&width=400&height=225&seq=adoptme1&orientation=landscape',
    totalCodes: 25,
    activeCodes: 8,
    lastUpdated: '2 hours ago'
  },
  {
    id: 'blox-fruits',
    name: 'Blox Fruits',
    image: 'https://readdy.ai/api/search-image?query=Blox%20Fruits%20Roblox%20game%20pirate%20adventure%20ocean%20islands%20treasure%20chest%20devil%20fruits%20anime%20style%20colorful%20tropical%20paradise%20with%20ships%20and%20magical%20powers&width=400&height=225&seq=bloxfruits1&orientation=landscape',
    totalCodes: 32,
    activeCodes: 12,
    lastUpdated: '1 hour ago'
  },
  {
    id: 'brookhaven',
    name: 'Brookhaven RP',
    image: 'https://readdy.ai/api/search-image?query=Brookhaven%20RP%20Roblox%20game%20suburban%20neighborhood%20houses%20cars%20roleplay%20city%20modern%20town%20with%20beautiful%20homes%20and%20streets%20peaceful%20community%20setting&width=400&height=225&seq=brookhaven1&orientation=landscape',
    totalCodes: 18,
    activeCodes: 6,
    lastUpdated: '3 hours ago'
  },
  {
    id: 'tower-defense',
    name: 'Tower Defense Simulator',
    image: 'https://readdy.ai/api/search-image?query=Tower%20Defense%20Simulator%20Roblox%20game%20military%20strategy%20towers%20weapons%20battlefield%20action-packed%20war%20zone%20with%20defensive%20structures%20and%20combat%20scenarios&width=400&height=225&seq=towerdefense1&orientation=landscape',
    totalCodes: 22,
    activeCodes: 9,
    lastUpdated: '4 hours ago'
  },
  {
    id: 'jailbreak',
    name: 'Jailbreak',
    image: 'https://readdy.ai/api/search-image?query=Jailbreak%20Roblox%20game%20police%20prison%20escape%20cars%20heist%20action%20city%20urban%20environment%20with%20vehicles%20and%20law%20enforcement%20chase%20scenes&width=400&height=225&seq=jailbreak1&orientation=landscape',
    totalCodes: 28,
    activeCodes: 11,
    lastUpdated: '5 hours ago'
  },
  {
    id: 'mining-simulator',
    name: 'Mining Simulator',
    image: 'https://readdy.ai/api/search-image?query=Mining%20Simulator%20Roblox%20game%20underground%20caves%20gems%20crystals%20pickaxe%20mining%20equipment%20treasure%20hunting%20dark%20caves%20with%20sparkling%20precious%20stones&width=400&height=225&seq=mining1&orientation=landscape',
    totalCodes: 19,
    activeCodes: 7,
    lastUpdated: '6 hours ago'
  }
];

const recentCodes = [
  { game: 'Adopt Me!', code: 'SUMMERFUN2024', reward: '500 Bucks + Rare Pet', status: 'active' as const },
  { game: 'Blox Fruits', code: 'PIRATEKING', reward: '2x EXP Boost (15 mins)', status: 'active' as const },
  { game: 'Brookhaven RP', code: 'NEWHOUSE', reward: 'Free House Upgrade', status: 'active' as const },
  { game: 'Tower Defense', code: 'DEFEND2024', reward: '1000 Coins + Exclusive Tower', status: 'active' as const }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Roblox%20gaming%20universe%20colorful%20blocks%20digital%20world%20vibrant%20purple%20and%20blue%20gradient%20background%20with%20floating%20geometric%20shapes%20and%20game%20elements%20modern%20tech%20aesthetic&width=1200&height=400&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-purple-900/60"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Free Roblox Codes & Rewards
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Get the latest working codes for your favorite Roblox games. Updated daily with new rewards!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/games" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Browse All Games
            </Link>
            <Link href="/latest" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              Latest Codes
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-gray-600">Active Games</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Working Codes</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">Daily</div>
            <div className="text-gray-600">Updates</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Free</div>
          </div>
        </div>

        {/* Featured Games Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Games</h2>
            <Link href="/games" className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
              View All Games →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </section>

        {/* Recent Codes Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Codes</h2>
            <Link href="/latest" className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
              View All Codes →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="space-y-4">
                {recentCodes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.game}</div>
                        <div className="text-sm text-gray-600">{item.reward}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <code className="bg-white px-3 py-1 rounded border font-mono text-sm">{item.code}</code>
                      <button className="text-purple-600 hover:text-purple-700 cursor-pointer">
                        <i className="ri-file-copy-line w-5 h-5 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-purple-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Your Game</h3>
              <p className="text-gray-600">Browse through our extensive collection of Roblox games or use the search feature to find your favorite game quickly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-copy-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Copy the Code</h3>
              <p className="text-gray-600">Click on any active code to copy it to your clipboard. All codes are tested and verified to be working.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gift-line text-orange-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Redeem & Enjoy</h3>
              <p className="text-gray-600">Go to your Roblox game, paste the code in the redemption area, and enjoy your free rewards!</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-pacifico text-purple-400 mb-4">Roblox Codes Directory</div>
            <p className="text-gray-400 mb-6">
              Your ultimate source for the latest Roblox game codes and updates.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-discord-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-youtube-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>  
    </div>
  );
}
