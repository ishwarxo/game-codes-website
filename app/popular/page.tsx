'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';
import { useState, useEffect } from 'react';

interface Game {
  id: string;
  name: string;
  image: string;
  activeCodes: number;
  totalCodes: number;
  lastUpdated: string;
  category: string;
  popularity: number;
  monthlyPlayers: string;
  description: string;
}

const timeFilters = ['All Time', 'This Month', 'This Week', 'Today'];
const categoryFilters = ['All Categories', 'Roleplay', 'Adventure', 'Action', 'Strategy', 'Simulation', 'Mystery', 'Horror'];

export default function PopularPage() {
  const [popularGames, setPopularGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('All Time');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All Categories');
  const [sortBy, setSortBy] = useState('popularity');

  useEffect(() => {
    async function fetchPopularGames() {
      const res = await fetch('/api/popular-games');
      const data = await res.json();
      setPopularGames(data.map((game: any) => ({
        ...game,
        lastUpdated: formatDate(new Date(game.lastUpdated))
      })));
      setLoading(false);
    }
    fetchPopularGames();
  }, []);

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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
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

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-4">
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

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <div key={game.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
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