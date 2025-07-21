
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';
import { useState } from 'react';

const popularGames = [
  {
    id: 'adopt-me',
    name: 'Adopt Me!',
    image: 'https://readdy.ai/api/search-image?query=Adopt%20Me%20Roblox%20game%20with%20cute%20pets%20and%20colorful%20playground%20environment%2C%20bright%20cheerful%20colors%2C%20cartoon%20style&width=400&height=225&seq=adopt-me-popular&orientation=landscape',
    activeCodes: 8,
    totalCodes: 15,
    lastUpdated: '2 hours ago',
    category: 'Roleplay',
    popularity: 95,
    monthlyPlayers: '2.5M',
    description: 'The most popular pet adoption game on Roblox with millions of players worldwide.'
  },
  {
    id: 'blox-fruits',
    name: 'Blox Fruits',
    image: 'https://readdy.ai/api/search-image?query=Blox%20Fruits%20Roblox%20game%20with%20pirate%20theme%2C%20devil%20fruits%2C%20ocean%20adventure%2C%20anime%20inspired%20style&width=400&height=225&seq=blox-fruits-popular&orientation=landscape',
    activeCodes: 12,
    totalCodes: 28,
    lastUpdated: '4 hours ago',
    category: 'Adventure',
    popularity: 92,
    monthlyPlayers: '2.1M',
    description: 'Epic pirate adventure game inspired by One Piece with devil fruits and battles.'
  },
  {
    id: 'brookhaven-rp',
    name: 'Brookhaven RP',
    image: 'https://readdy.ai/api/search-image?query=Brookhaven%20RP%20Roblox%20game%20with%20modern%20city%20houses%2C%20roleplay%20environment%2C%20suburban%20neighborhood&width=400&height=225&seq=brookhaven-popular&orientation=landscape',
    activeCodes: 6,
    totalCodes: 12,
    lastUpdated: '1 day ago',
    category: 'Roleplay',
    popularity: 88,
    monthlyPlayers: '1.8M',
    description: 'Popular roleplay game where you can live your virtual life in a modern town.'
  },
  {
    id: 'tower-defense-simulator',
    name: 'Tower Defense Simulator',
    image: 'https://readdy.ai/api/search-image?query=Tower%20Defense%20Simulator%20Roblox%20game%20with%20towers%2C%20enemies%2C%20strategy%20gameplay%2C%20military%20theme&width=400&height=225&seq=tds-popular&orientation=landscape',
    activeCodes: 5,
    totalCodes: 18,
    lastUpdated: '6 hours ago',
    category: 'Strategy',
    popularity: 85,
    monthlyPlayers: '1.5M',
    description: 'Strategic tower defense game with various towers and challenging enemies.'
  },
  {
    id: 'jailbreak',
    name: 'Jailbreak',
    image: 'https://readdy.ai/api/search-image?query=Jailbreak%20Roblox%20game%20with%20police%20cars%2C%20prison%2C%20city%20environment%2C%20action%20packed%20gameplay&width=400&height=225&seq=jailbreak-popular&orientation=landscape',
    activeCodes: 4,
    totalCodes: 20,
    lastUpdated: '12 hours ago',
    category: 'Action',
    popularity: 82,
    monthlyPlayers: '1.3M',
    description: 'Classic cops and robbers game where you can escape prison or stop criminals.'
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    image: 'https://readdy.ai/api/search-image?query=Arsenal%20Roblox%20FPS%20shooter%20game%20with%20weapons%2C%20competitive%20gameplay%2C%20modern%20military%20style&width=400&height=225&seq=arsenal-popular&orientation=landscape',
    activeCodes: 7,
    totalCodes: 14,
    lastUpdated: '8 hours ago',
    category: 'Action',
    popularity: 80,
    monthlyPlayers: '1.2M',
    description: 'Fast-paced first-person shooter with unique weapons and competitive matches.'
  },
  {
    id: 'pet-simulator-x',
    name: 'Pet Simulator X',
    image: 'https://readdy.ai/api/search-image?query=Pet%20Simulator%20X%20Roblox%20game%20with%20cute%20pets%2C%20coins%2C%20treasure%20chests%2C%20colorful%20fantasy%20world&width=400&height=225&seq=pet-sim-x-popular&orientation=landscape',
    activeCodes: 9,
    totalCodes: 25,
    lastUpdated: '3 hours ago',
    category: 'Simulation',
    popularity: 78,
    monthlyPlayers: '1.1M',
    description: 'Collect and trade pets while exploring different worlds and earning coins.'
  },
  {
    id: 'murder-mystery-2',
    name: 'Murder Mystery 2',
    image: 'https://readdy.ai/api/search-image?query=Murder%20Mystery%202%20Roblox%20game%20with%20dark%20mysterious%20atmosphere%2C%20detective%20theme%2C%20suspenseful%20environment&width=400&height=225&seq=mm2-popular&orientation=landscape',
    activeCodes: 3,
    totalCodes: 10,
    lastUpdated: '1 day ago',
    category: 'Mystery',
    popularity: 75,
    monthlyPlayers: '950K',
    description: 'Thrilling mystery game where you play as innocent, sheriff, or murderer.'
  },
  {
    id: 'bee-swarm-simulator',
    name: 'Bee Swarm Simulator',
    image: 'https://readdy.ai/api/search-image?query=Bee%20Swarm%20Simulator%20Roblox%20game%20with%20bees%2C%20flowers%2C%20honey%20collection%2C%20colorful%20garden%20environment&width=400&height=225&seq=bee-swarm-popular&orientation=landscape',
    activeCodes: 6,
    totalCodes: 22,
    lastUpdated: '5 hours ago',
    category: 'Simulation',
    popularity: 72,
    monthlyPlayers: '800K',
    description: 'Manage your bee colony and collect honey in this relaxing simulation game.'
  },
  {
    id: 'piggy',
    name: 'Piggy',
    image: 'https://readdy.ai/api/search-image?query=Piggy%20Roblox%20horror%20game%20with%20dark%20atmosphere%2C%20survival%20theme%2C%20mysterious%20house%20environment&width=400&height=225&seq=piggy-popular&orientation=landscape',
    activeCodes: 4,
    totalCodes: 16,
    lastUpdated: '18 hours ago',
    category: 'Horror',
    popularity: 70,
    monthlyPlayers: '750K',
    description: 'Survival horror game where you must escape from Piggy and solve puzzles.'
  }
];

const timeFilters = ['All Time', 'This Month', 'This Week', 'Today'];
const categoryFilters = ['All Categories', 'Roleplay', 'Adventure', 'Action', 'Strategy', 'Simulation', 'Mystery', 'Horror'];

export default function PopularPage() {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('All Time');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All Categories');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredGames = popularGames
    .filter(game => selectedCategoryFilter === 'All Categories' || game.category === selectedCategoryFilter)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'players':
          return parseFloat(b.monthlyPlayers) - parseFloat(a.monthlyPlayers);
        case 'codes':
          return b.activeCodes - a.activeCodes;
        case 'updated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default:
          return b.popularity - a.popularity;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Most Popular Roblox Games</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover the hottest Roblox games with the most active players and codes. 
              Stay updated with trending games and never miss out on exclusive rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
              <div className="text-gray-600">Top Games</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">64</div>
              <div className="text-gray-600">Active Codes</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">14.8M+</div>
              <div className="text-gray-600">Monthly Players</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">180</div>
              <div className="text-gray-600">Total Codes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {/* Time Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
                <select
                  value={selectedTimeFilter}
                  onChange={(e) => setSelectedTimeFilter(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer pr-8"
                >
                  {timeFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer pr-8"
                >
                  {categoryFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer pr-8"
                >
                  <option value="popularity">Popularity</option>
                  <option value="players">Player Count</option>
                  <option value="codes">Active Codes</option>
                  <option value="updated">Recently Updated</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredGames.length} popular games
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <div key={game.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Popularity Rank */}
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    #{index + 1}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {game.popularity}% Popular
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{game.name}</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                      {game.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{game.activeCodes}</div>
                      <div className="text-xs text-gray-600">Active Codes</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{game.monthlyPlayers}</div>
                      <div className="text-xs text-gray-600">Monthly Players</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{game.totalCodes} total codes</span>
                    <span>Updated {game.lastUpdated}</span>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
                    View All Codes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trending Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-user-heart-line text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Roleplay</h3>
              <p className="text-purple-100 text-sm mb-3">Live your virtual life in immersive worlds</p>
              <div className="text-2xl font-bold">3 games</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-sword-line text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Adventure</h3>
              <p className="text-blue-100 text-sm mb-3">Epic quests and exploration await</p>
              <div className="text-2xl font-bold">2 games</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-gamepad-line text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Action</h3>
              <p className="text-green-100 text-sm mb-3">Fast-paced and competitive gameplay</p>
              <div className="text-2xl font-bold">2 games</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-brain-line text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Strategy</h3>
              <p className="text-orange-100 text-sm mb-3">Think strategically to win</p>
              <div className="text-2xl font-bold">1 game</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
