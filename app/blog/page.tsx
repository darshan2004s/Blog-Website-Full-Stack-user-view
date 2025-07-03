import { getAllPosts } from '@/lib/api';
import { BlogPost } from '@/types';
import BlogPostsClient from '@/components/BlogPostsClient';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogListPage() {
  const posts: BlogPost[] = await getAllPosts();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blog-like background with theme support */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-600/10 backdrop-blur-3xl"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/15 to-purple-500/15 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 pt-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog Posts
          </span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-slate-500 transition-colors duration-500">
          Explore thoughts, ideas, and insights that shape our understanding of the world
        </p>
      </div>

      {/* Blog Posts */}
      <BlogPostsClient initialPosts={posts} />
    </div>
  );
}
