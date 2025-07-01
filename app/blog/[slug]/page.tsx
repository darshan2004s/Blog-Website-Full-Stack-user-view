import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { getAllPosts } from '@/lib/api';

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts: BlogPost[] = await getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== params.slug && p.category === post.category)
    .slice(0, 4);

  if (relatedPosts.length < 4) {
    const otherPosts = posts
      .filter((p) => p.slug !== params.slug && p.category !== post.category)
      .slice(0, 4 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Music': 'bg-blue-100 text-blue-800 border-blue-200',
      'Management': 'bg-green-100 text-green-800 border-green-200',
      'Lifestyle': 'bg-purple-100 text-purple-800 border-purple-200',
      'Food': 'bg-orange-100 text-orange-800 border-orange-200',
      'Health': 'bg-red-100 text-red-800 border-red-200',
      'Technology': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Travel': 'bg-teal-100 text-teal-800 border-teal-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 bg-[linear-gradient(to_right,rgba(236,72,153,0.1),rgba(219,39,119,0.1))] backdrop-blur-3xl">
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-600/10 backdrop-blur-3xl"> */}
        
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      
          {/* Main Article */}
          <article className="flex-1 lg:max-w-4xl">
            {/* Back to Blog Button */}
            <div className="mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Header */}
            
              

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {post.title}
                </span>
              
                <div className="mb-6">
                <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full border ${getCategoryColor(post.category || 'Uncategorized')}`}>
                  {post.category || 'Uncategorized'}
                </span>
              </div>
              </h1>

              {/* Meta Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-gray-600 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    {post.author?.charAt(0).toUpperCase() || 'A'}
                  </div>
                  <span className="font-medium">{post.author || 'Anonymous'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>

              {/* Featured Image */}
              {post.imageUrl && (
                <div className="relative w-full h-64 md:h-96 mb-12 rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </div>
              )}
            

            {/* Content */}
            <div className="prose prose-lg prose-gray max-w-none mb-12">
              <div 
                className="text-gray-700 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Article Footer */}
            <footer className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 text-sm font-medium">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </article>

          {/* Right Sidebar - Related Posts */}
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                Related Posts
              </h3>
              
              {relatedPosts.length > 0 ? (
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="relative h-full p-[2px] bg-gray-100 rounded-3xl transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300">
          {/* Glassy Card Container */}
          <div className="relative h-full bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl rounded-[22px] border border-white/30 shadow-xl hover:shadow-2xl hover:border-white/50 transition-all duration-300 overflow-hidden flex flex-col">
           
                      <article className="relative rounded-[20px] p-[2px] bg-gray-100 group transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-200 hover:via-purple-200 hover:to-pink-200">
                        <div className="relative z-10 bg-white rounded-[18px] p-4">
                        
                          {relatedPost.imageUrl && (
                            <div className="relative w-full h-32 mb-4 rounded-2xl overflow-hidden bg-gray-200">
                              <Image
                                src={relatedPost.imageUrl}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <h4 className="text-gray-900 font-bold text-sm mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(relatedPost.category || 'Uncategorized')}`}>
                              {relatedPost.category || 'Uncategorized'}
                            </span>
                            <span className="text-gray-500 font-medium">
                              {new Date(relatedPost.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                      </article>
                      </div></div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">No related posts found.</p>
                </div>
              )}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 mt-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 text-sm focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >     
                  Subscribe Now
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}