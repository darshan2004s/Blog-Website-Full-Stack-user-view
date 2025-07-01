'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-600/10 backdrop-blur-3xl"></div>
      
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="text-center py-16 max-w-4xl mx-auto">
          {/* Glass container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
              Welcome to My Simple Blog
            </h1>
            <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-relaxed mb-6">

              Your go-to source for insightful articles on web development, tech, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/blog" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore Blog Posts</span>
              </Link>
              
              <Link href="/about-us" className="group relative px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Learn About Us</span>
              </Link>
            </div>
          </div>
          
          {/* Subtle bottom accent */}
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400/60 animate-pulse delay-200"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400/60 animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
