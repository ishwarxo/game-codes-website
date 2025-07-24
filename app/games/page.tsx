'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface Game {
  gameId: string;
  name: string;
  image: string;
  totalCodes: number;
  activeCodes: number;
  lastUpdated: string;
  category: string;
  popularity: string;
}

const categories = ['All', 'Roleplay', 'Adventure', 'Strategy', 'Action', 'Simulator', 'Shooter', 'Horror', 'Mystery'];
const sortOptions = ['Most Popular', 'Most Codes', 'Recently Updated', 'Alphabetical'];

export default function GamesPage() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');

  useEffect(() => {
    async function fetchGames() {
      const url = searchTerm ? `/api/search-games?search=${encodeURIComponent(searchTerm)}` : '/api/games';
      const res = await fetch(url);
      const data = await res.json();
      setGames(data.map((game: any) => ({
        ...game,
        id: game.gameId,
        lastUpdated: formatDate(new Date(game.lastUpdated))
      })));
      setLoading(false);
    }
    fetchGames();
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const filteredGames = games
    .filter(game => selectedCategory === 'All' || game.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'Most Popular':
          const popularityOrder = { 'Very High': 3, 'High': 2, 'Medium': 1 };
          return popularityOrder[b.popularity as keyof typeof popularityOrder] - popularityOrder[a.popularity as keyof typeof popularityOrder];
        case 'Most Codes':
          return b.activeCodes - a.activeCodes;
        case 'Recently Updated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'Alphabetical':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Roblox Games</h1>
          <p className="text-gray-600">Browse through our complete collection of Roblox games with active codes and rewards.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
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

        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            Showing {filteredGames.length} of {games.length} games
            {selectedCategory !== 'All' && (
              <span className="ml-2">
                in <span className="font-medium text-purple-600">{selectedCategory}</span>
              </span>
            )}
            {searchTerm && (
              <span className="ml-2">
                for <span className="font-medium text-purple-600">"{searchTerm}"</span>
              </span>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{games.reduce((sum, game) => sum + game.activeCodes, 0)} Total Active Codes</span>
            </div>
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="ri-search-line w-16 h-16 flex items-center justify-center text-gray-300 mx-auto mb-4"></i>
            <h3 className="text-xl font-medium text-gray-900 mb- arriba2">No games found</h3>
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

        <div className="mt-16 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map(category => {
              const categoryGames = games.filter(game => game.category === category);
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