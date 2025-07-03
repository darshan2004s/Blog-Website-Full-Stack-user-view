'use client';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-600/10 backdrop-blur-3xl"></div>

      {/* Floating glass orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="text-center py-16 max-w-3xl mx-auto w-full">
          {/* Glass container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl text-white">

            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
              About My Simple Blog
            </h1>

            <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent leading-relaxed mb-6">
              Welcome to My Simple Blog! This is a minimalist blog built to demonstrate a clean and efficient structure using Next.js 14, the App Router, and TypeScript. We focus on delivering straightforward content without unnecessary complexities.
            </p>

            <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent leading-relaxed mb-6">

              Our goal is to provide insightful articles on various topics, from web development tips to technology trends. We believe in keeping things simple and functional.
            </p>

            <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-800 to-gray-600 bg-clip-text text-transparent leading-relaxed mb-6">

              Thank you for visiting!
            </p>

            {/* Subtle bottom accent */}
            <div className="mt-8 pt-4 border-t border-slate-700/40 flex justify-center">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m5 16v4m-2-2h4M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
