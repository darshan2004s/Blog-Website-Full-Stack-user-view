'use client';

import { useState } from 'react';
import BlogPostCard from '@/components/BlogPostCard';
import { BlogPost } from '@/types';

interface BlogPostsClientProps {
  initialPosts: BlogPost[];
}

export default function BlogPostsClient({ initialPosts }: BlogPostsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = initialPosts.filter((post) => {
    const content = `${post.title} ${post.content} ${post.category} ${post.author}`.toLowerCase();
    return content.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {/* Search Bar */}
<div className="max-w-2xl mx-auto mb-10 px-4">
  <div className="relative group">
    {/* default border + shadow, switches to current text-color on focus */}
    <div
      className="absolute inset-0
                 bg-white
                 rounded-full
                 border border-gray-300
                 shadow-xl
                 group-focus-within:border-current
                 transition-colors duration-200"
    ></div>

    <div className="relative flex items-center">
      <svg
        className="absolute left-4 w-5 h-5 text-gray-600 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        onClick={() => { /* Add click if needed */ }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
  type="text"
  placeholder="Search articles, topics, or keywords&hellip;"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full
             pl-12 pr-4 py-3
             bg-white
             text-black placeholder-gray-500
             text-base
             rounded-full
             border-none
             outline-none
             focus:outline-none
             autofill:text-black"
/>

    </div>
  </div>
</div>
      



      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredPosts.length === 0 && searchTerm !== '' ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No results found for "{searchTerm}"</h3>
            <p className="text-slate-600">Please try a different search term.</p>
          </div>
        ) : initialPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No blog posts yet</h3>
            <p className="text-slate-600">Check back soon for new content and insights.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-container">
            {filteredPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
