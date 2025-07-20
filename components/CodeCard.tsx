
'use client';

import { useState } from 'react';

interface CodeCardProps {
  code: string;
  reward: string;
  status: 'active' | 'expired';
  addedDate: string;
}

export default function CodeCard({ code, reward, status, addedDate }: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-white rounded-lg border p-4 ${
      status === 'expired' ? 'opacity-60 border-red-200' : 'border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'active' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {status === 'active' ? 'Active' : 'Expired'}
          </div>
          <span className="text-sm text-gray-500">Added {addedDate}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
          <span className="font-mono text-lg font-semibold text-gray-900">{code}</span>
          <button
            onClick={copyCode}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer flex items-center"
          >
            {copied ? (
              <>
                <i className="ri-check-line mr-1"></i>
                Copied!
              </>
            ) : (
              <>
                <i className="ri-file-copy-line mr-1"></i>
                Copy
              </>
            )}
          </button>
        </div>
        
        <div className="flex items-center text-gray-600">
          <i className="ri-gift-line mr-2 text-orange-500"></i>
          <span className="text-sm">{reward}</span>
        </div>
      </div>
    </div>
  );
}