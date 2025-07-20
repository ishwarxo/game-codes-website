'use client';

import Header from '../../components/Header';
import GameCard from '../../components/GameCard';
import { useState } from 'react';

const allGames = [
  {
    id: 'adopt-me',
    name: 'Adopt Me!',
    image: 'https://readdy.ai/api/search-image?query=Adopt%20Me%20Roblox%20game%20cute%20pets%20adoption%20house%20colorful%20bright%20fantasy%20world%20with%20adorable%20animals%20and%20cozy%20home%20background%20vibrant%20colors%20family-friendly%20atmosphere&width=400&height=225&seq=adoptme1&orientation=landscape',
    totalCodes: 25,
    activeCodes: 8,
    lastUpdated: '2 hours ago',
    category: 'Roleplay',
    popularity: 'Very High'
  },
  {
    id: 'blox-fruits',
    name: 'Blox Fruits',
    image: 'https://readdy.ai/api/search-image?query=Blox%20Fruits%20Roblox%20game%20pirate%20adventure%20ocean%20islands%20treasure%20chest%20devil%20fruits%20anime%20style%20colorful%20tropical%20paradise%20with%20ships%20and%20magical%20powers&width=400&height=225&seq=bloxfruits1&orientation=landscape',
    totalCodes: 32,
    activeCodes: 12,
    lastUpdated: '1 hour ago',
    category: 'Adventure',
    popularity: 'Very High'
  },
  {
    id: 'brookhaven',
    name: 'Brookhaven RP',
    image: 'https://readdy.ai/api/search-image?query=Brookhaven%20RP%20Roblox%20game%20suburban%20neighborhood%20houses%20cars%20roleplay%20city%20modern%20town%20with%20beautiful%20homes%20and%20streets%20peaceful%20community%20setting&width=400&height=225&seq=brookhaven1&orientation=landscape',
    totalCodes: 18,
    activeCodes: 6,
    lastUpdated: '3 hours ago',
    category: 'Roleplay',
    popularity: 'High'
  },
  {
    id: 'tower-defense',
    name: 'Tower Defense Simulator',
    image: 'https://readdy.ai/api/search-image?query=Tower%20Defense%20Simulator%20Roblox%20game%20military%20strategy%20towers%20weapons%20battlefield%20action-packed%20war%20zone%20with%20defensive%20structures%20and%20combat%20scenarios&width=400&height=225&seq=towerdefense1&orientation=landscape',
    totalCodes: 22,
    activeCodes: 9,
    lastUpdated: '4 hours ago',
    category: 'Strategy',
    popularity: 'High'
  },
  {
    id: 'jailbreak',
    name: 'Jailbreak',
    image: 'https://readdy.ai/api/search-image?query=Jailbreak%20Roblox%20game%20police%20prison%20escape%20cars%20heist%20action%20city%20urban%20environment%20with%20vehicles%20and%20law%20enforcement%20chase%20scenes&width=400&height=225&seq=jailbreak1&orientation=landscape',
    totalCodes: 28,
    activeCodes: 11,
    lastUpdated: '5 hours ago',
    category: 'Action',
    popularity: 'Very High'
  },
  {
    id: 'mining-simulator',
    name: 'Mining Simulator',
    image: 'https://readdy.ai/api/search-image?query=Mining%20Simulator%20Roblox%20game%20underground%20caves%20gems%20crystals%20pickaxe%20mining%20equipment%20treasure%20hunting%20dark%20caves%20with%20sparkling%20precious%20stones&width=400&height=225&seq=mining1&orientation=landscape',
    totalCodes: 19,
    activeCodes: 7,
    lastUpdated: '6 hours ago',
    category: 'Simulator',
    popularity: 'Medium'
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    image: 'https://readdy.ai/api/search-image?query=Arsenal%20Roblox%20game%20first%20person%20shooter%20weapons%20combat%20multiplayer%20battlefield%20action-packed%20military%20style%20colorful%20combat%20zones%20with%20various%20weapons&width=400&height=225&seq=arsenal1&orientation=landscape',
    totalCodes: 15,
    activeCodes: 5,
    lastUpdated: '8 hours ago',
    category: 'Shooter',
    popularity: 'High'
  },
  {
    id: 'pet-simulator',
    name: 'Pet Simulator X',
    image: 'https://readdy.ai/api/search-image?query=Pet%20Simulator%20X%20Roblox%20game%20colorful%20pets%20cute%20animals%20fantasy%20world%20magical%20creatures%20bright%20vibrant%20colors%20with%20adorable%20pet%20collection%20system&width=400&height=225&seq=petsim1&orientation=landscape',
    totalCodes: 24,
    activeCodes: 10,
    lastUpdated: '1 day ago',
    category: 'Simulator',
    popularity: 'Very High'
  },
  {
    id: 'flee-facility',
    name: 'Flee the Facility',
    image: 'https://readdy.ai/api/search-image?query=Flee%20the%20Facility%20Roblox%20game%20dark%20facility%20escape%20horror%20survival%20multiplayer%20mysterious%20laboratory%20with%20security%20systems%20and%20escape%20routes&width=400&height=225&seq=flee1&orientation=landscape',
    totalCodes: 12,
    activeCodes: 4,
    lastUpdated: '12 hours ago',
    category: 'Horror',
    popularity: 'Medium'
  },
  {
    id: 'mm2',
    name: 'Murder Mystery 2',
    image: 'https://readdy.ai/api/search-image?query=Murder%20Mystery%202%20Roblox%20game%20detective%20mystery%20murder%20investigation%20colorful%20characters%20multiplayer%20social%20deduction%20game%20with%20knives%20and%20guns&width=400&height=225&seq=mm2_1&orientation=landscape',
    totalCodes: 16,
    activeCodes: 6,
    lastUpdated: '6 hours ago',
    category: 'Mystery',
    popularity: 'High'
  },
  {
    id: 'bee-swarm',
    name: 'Bee Swarm Simulator',
    image: 'https://readdy.ai/api/search-image?query=Bee%20Swarm%20Simulator%20Roblox%20game%20colorful%20bees%20flowers%20honey%20collection%20nature%20bright%20meadows%20with%20beehives%20and%20flower%20fields%20pastoral%20setting&width=400&height=225&seq=beeswarm1&orientation=landscape',
    totalCodes: 21,
    activeCodes: 8,
    lastUpdated: '4 hours ago',
    category: 'Simulator',
    popularity: 'High'
  },
  {
    id: 'royale-high',
    name: 'Royale High',
    image: 'https://readdy.ai/api/search-image?query=Royale%20High%20Roblox%20game%20magical%20school%20princess%20fantasy%20castle%20elegant%20ballrooms%20beautiful%20dresses%20fairy%20tale%20setting%20with%20sparkles%20and%20magic&width=400&height=225&seq=royalehigh1&orientation=landscape',
    totalCodes: 20,
    activeCodes: 7,
    lastUpdated: '5 hours ago',
    category: 'Roleplay',
    popularity: 'High'
  }
];

const categories = ['All', 'Roleplay', 'Adventure', 'Strategy', 'Action', 'Simulator', 'Shooter', 'Horror', 'Mystery'];
const sortOptions = ['Most Popular', 'Most Codes', 'Recently Updated', 'Alphabetical'];

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');

  const filteredGames = allGames
    .filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Most Popular':
          const popularityOrder = { 'Very High': 3, 'High': 2, 'Medium': 1 };
          return popularityOrder[b.popularity as keyof typeof popularityOrder] - popularityOrder[a.popularity as keyof typeof popularityOrder];
        case 'Most Codes':
          return b.activeCodes - a.activeCodes;
        case 'Recently Updated':
          return a.lastUpdated.localeCompare(b.lastUpdated);
        case 'Alphabetical':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Roblox Games</h1>
          <p className="text-gray-600">Browse through our complete collection of Roblox games with active codes and rewards.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            Showing {filteredGames.length} of {allGames.length} games
            {selectedCategory !== 'All' && (
              <span className="ml-2">
                in <span className="font-medium text-purple-600">{selectedCategory}</span>
              </span>
            )}
          </div>
          
          {/* Quick Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{allGames.reduce((sum, game) => sum + game.activeCodes, 0)} Total Active Codes</span>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="ri-search-line w-16 h-16 flex items-center justify-center text-gray-300 mx-auto mb-4"></i>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No games found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSortBy('Most Popular');
              }}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Categories Overview */}
        <div className="mt-16 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map(category => {
              const categoryGames = allGames.filter(game => game.category === category);
              const totalActiveCodes = categoryGames.reduce((sum, game) => sum + game.activeCodes, 0);
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="p-4 text-left border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors cursor-pointer"
                >
                  <div className="font-medium text-gray-900 mb-1">{category}</div>
                  <div className="text-sm text-gray-600">
                    {categoryGames.length} games • {totalActiveCodes} codes
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}