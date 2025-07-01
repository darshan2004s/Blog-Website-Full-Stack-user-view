'use client';

import { useState, useEffect } from 'react';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllPosts } from '@/lib/api';
import { BlogPost } from '@/types';

export default function BlogSearchPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }

    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const content = `${post.title} ${post.content} ${post.category}`.toLowerCase();
    return content.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">
          Blog Posts
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto px-4 mb-8">
          Explore thoughts, ideas, and insights that shape our understanding of the world
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full border border-gray-300 shadow-xl"></div>
            <div className="relative flex items-center">
              <svg className="absolute left-4 w-5 h-5 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={() => { /* Add search functionality here if needed */ }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for articles, ideas, or topics."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-none outline-none text-black placeholder-gray-600 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog posts */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No matching posts</h3>
            <p className="text-slate-600">Try a different keyword or check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
