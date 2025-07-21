'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-pacifico text-purple-400 mb-4">
            Roblox Codes Directory
          </div>
          <p className="text-gray-400 mb-6">
            Your ultimate source for the latest Roblox game codes and updates.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Twitter"
            >
              <i className="ri-twitter-line text-xl w-5 h-5 flex items-center justify-center"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Discord"
            >
              <i className="ri-discord-line text-xl w-5 h-5 flex items-center justify-center"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <i className="ri-youtube-line text-xl w-5 h-5 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}