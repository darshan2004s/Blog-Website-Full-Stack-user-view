import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Blog Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">~</span>
              </div>
              <h3 className="text-xl font-bold">DARSHAN Blog</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your go-to resource for the latest in technology trends, software development, gadgets, AI, cybersecurity, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                <span className="text-sm font-bold">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-white transition-colors text-sm">Categories</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                
              </div>
              
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-lg">✉️</span>
                <span className="text-gray-300 text-sm">darshans2004@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} My Simple Blog. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}