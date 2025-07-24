'use client';

import Link from 'next/link';

interface RelatedPost {
  id: string;
  name: string;
  image: string;
  activeCodes: number;
  lastUpdated: string;
}

interface RelatedPostsCardProps {
  posts?: RelatedPost[]; // Make posts optional to handle undefined cases
}

export default function RelatedPostsCard({ posts = [] }: RelatedPostsCardProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Related Games</h2>
        <Link href="/games" className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
          View All Games →
        </Link>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/game/${post.id}`} className="cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="aspect-video relative">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {post.activeCodes} Active
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{post.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{post.activeCodes} Active Codes</span>
                    <span>Updated {post.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <i className="ri-inbox-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Related Games</h3>
          <p className="text-gray-600">Check out other games for more codes!</p>
          <Link
            href="/games"
            className="inline-block mt-4 text-purple-600 hover:text-purple-700 font-medium cursor-pointer"
          >
            Browse All Games
          </Link>
        </div>
      )}
    </section>
  );
}