'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/games?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false); // Close mobile menu on search
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="px-4 py-4">
        {/* <div className="flex items-center justify-between"> */}
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-pacifico text-purple-600">Roblox Codes Directory</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/games" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              Games
            </Link>
            <Link href="/latest" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              Latest Codes
            </Link>
            <Link href="/popular" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              Popular
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="ri-search-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </form>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/games" 
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Games
              </Link>
              <Link 
                href="/latest" 
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Latest Codes
              </Link>
              <Link 
                href="/popular" 
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Popular
              </Link>
              
              <form onSubmit={handleSearch} className="relative sm:hidden pt-2">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="ri-search-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}