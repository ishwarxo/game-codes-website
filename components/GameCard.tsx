
'use client';

import Link from 'next/link';

interface GameCardProps {
  id: string;
  name: string;
  image: string;
  totalCodes: number;
  activeCodes: number;
  lastUpdated: string;
}

export default function GameCard({ id, name, image, totalCodes, activeCodes, lastUpdated }: GameCardProps) {
  return (
    <Link href={`/game/${id}`} className="cursor-pointer">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="aspect-video relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {activeCodes} Active
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{totalCodes} Total Codes</span>
            <span>Updated {lastUpdated}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
