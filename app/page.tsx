'use client';

import Header from '../components/Header';
import GameCard from '../components/GameCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Game {
  gameId: string;
  name: string;
  image: string;
  totalCodes: number;
  activeCodes: number;
  lastUpdated: string;
}

interface Code {
  game: string;
  code: string;
  reward: string;
  status: 'active' | 'expired';
}

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [recentCodes, setRecentCodes] = useState<Code[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [gamesRes, codesRes] = await Promise.all([
        fetch('/api/featured-games'),
        fetch('/api/recent-codes')
      ]);
      const gamesData = await gamesRes.json();
      const codesData = await codesRes.json();

      setFeaturedGames(gamesData.map((game: any) => ({
        ...game,
        id: game.gameId,
        lastUpdated: formatDate(new Date(game.lastUpdated))
      })));
      setRecentCodes(codesData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
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