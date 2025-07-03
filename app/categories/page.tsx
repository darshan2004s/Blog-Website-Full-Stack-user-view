import CategoryCard from '@/components/CategoryCard';
import { getAllCategories } from '@/lib/api';
import { Category } from '@/types';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CategoriesListPage() {
  const categories: Category[] = await getAllCategories();

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

      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Browse Categories
              </span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-slate-500 transition-colors duration-500">
              Discover articles organized by topics and interests
            </p>
          </div>

          {/* Categories Content */}
          {categories.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <div className="mx-auto h-24 w-24 rounded-full flex items-center justify-center bg-slate-100/50 dark:bg-slate-700/30 transition-all duration-500">
                    <svg className="h-12 w-12 text-slate-500 dark:text-slate-400 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-500">
                  No categories found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">
                  Categories will appear here once they are created.
                </p>
              </div>
            </div>
          ) : (
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {categories.map((category, index) => (
    <div
      key={category.slug}
      style={{ animationDelay: `${index * 100}ms` }}
      className="animate-fade-in-up"
    >
      {/* Glow effect wrapper starts here */}
      <div className="group h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-full p-[2px] bg-gray-100 rounded-3xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300">
          <div className="relative h-full bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl rounded-[22px] border border-white/30 shadow-xl group-hover:shadow-2xl group-hover:border-white/50 transition-all duration-300 overflow-hidden">
            <CategoryCard category={category} />
          </div>
        </div>
      </div>
      {/* Glow effect wrapper ends here */}
    </div>
  
                
              ))}
            </div>
          )}

          {/* Bottom dots - same as blog */}
          <div className="mt-16 flex justify-center space-x-3">
            <div className="w-3 h-3 rounded-full animate-pulse bg-cyan-400/60 dark:bg-cyan-400/40"></div>
            <div className="w-3 h-3 rounded-full animate-pulse delay-200 bg-purple-400/60 dark:bg-purple-400/40"></div>
            <div className="w-3 h-3 rounded-full animate-pulse delay-400 bg-pink-400/60 dark:bg-pink-400/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
