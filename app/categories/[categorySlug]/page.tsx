import BlogPostCard from '@/components/BlogPostCard';
import { getPostsByCategory, getAllCategories } from '@/lib/api';
import { BlogPost, Category } from '@/types';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const categories: Category[] = await getAllCategories();
  return categories.map((category) => ({ categorySlug: category.slug }));
}

interface PostsByCategoryPageProps {
  params: { categorySlug: string };
}

export default async function PostsByCategoryPage({ params }: PostsByCategoryPageProps) {
  const categories = await getAllCategories();
  const category = categories.find((cat) => cat.slug === params.categorySlug);

  if (!category) notFound();

  const posts: BlogPost[] = await getPostsByCategory(category.id);

  const categoryName = posts.length > 0
    ? posts[0].category
    : params.categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blog-like background with theme support */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-600/10 backdrop-blur-3xl"></div>

      {/* Animated background elements - same as blog */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/15 to-purple-500/15 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blogs in {categoryName}
          </span>
          
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-slate-300 text-lg">No posts found for this category yet.</p>
        ) : (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Accent dots at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10">
        <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-purple-400/60 animate-pulse delay-200"></div>
        <div className="w-2 h-2 rounded-full bg-pink-400/60 animate-pulse delay-400"></div>
      </div>
    </div>
  );
}
