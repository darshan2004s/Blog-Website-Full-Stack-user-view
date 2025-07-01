import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Music': 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white',
      'Management': 'bg-gradient-to-r from-emerald-500/80 to-teal-500/80 text-white',
      'Lifestyle': 'bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white',
      'Food': 'bg-gradient-to-r from-orange-500/80 to-red-500/80 text-white',
      'Health': 'bg-gradient-to-r from-red-500/80 to-pink-500/80 text-white',
      'Technology': 'bg-gradient-to-r from-indigo-500/80 to-blue-500/80 text-white',
      'Travel': 'bg-gradient-to-r from-teal-500/80 to-cyan-500/80 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-slate-500/80 to-gray-500/80 text-white';
  };

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full flex flex-col transform hover:-translate-y-2 transition-all duration-300">
        {/* Gradient Border Container */}
        <div className="relative h-full p-[2px] bg-gray-100 rounded-3xl transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300">
          {/* Glassy Card Container */}
          <div className="relative h-full bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl rounded-[22px] border border-white/30 shadow-xl hover:shadow-2xl hover:border-white/50 transition-all duration-300 overflow-hidden flex flex-col">
            {/* Glassy overlay effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
             */}
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden rounded-t-[22px]">
              {post.imageUrl ? (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-100/60 to-slate-200/40 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-16 h-16 text-slate-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-full backdrop-blur-sm border border-white/20 ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative p-6 flex-grow flex flex-col">
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-slate-600 transition-colors line-clamp-2">
                {post.title}
              </h3>

              

              {/* Decorative divider */}
              <div className="flex items-center mb-4">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
                <div className="mx-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-400 to-slate-500"></div>
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
              </div>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm mt-auto">
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {post.author?.charAt(0).toUpperCase() || 'A'}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 text-sm">{post.author || 'Anonymous'}</div>
                    <div className="text-xs text-slate-500">{formatDate(post.createdAt || post.date)}</div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-2 rounded-full shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}