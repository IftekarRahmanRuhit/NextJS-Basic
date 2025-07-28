import React from 'react'
import { getSinglePost } from '../../../lib/getSinglePost'

// Metadata for the single post page dynamically will show
export async function generateMetadata({ params }) {
  const id = params.id
 
  // fetch post information
  const singlePost = await getSinglePost(id)
  return {
    title: singlePost.title,
    description: singlePost.description,
  }
}


export default async function SinglePost({params}) {
    const p = params.id;
    const singlePost = await getSinglePost(p.id);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Article Header */}
                <div className="mb-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                        <button 
                          
                            className="hover:text-amber-600 transition-colors duration-200"
                        >
                            Posts
                        </button>
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-amber-600 font-medium">Post #{singlePost.id}</span>
                    </nav>

                    {/* Post Meta */}
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-semibold rounded-full border border-amber-200">
                            Article #{singlePost.id}
                        </span>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                Live from API
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {Math.floor(Math.random() * 10) + 3} min read
                            </div>
                        </div>
                    </div>

                    {/* Post Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 capitalize">
                        {singlePost.title}
                    </h1>

                    {/* Author & Date Info */}
                    <div className="flex items-center space-x-6 pb-8 border-b border-amber-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    {String.fromCharCode(65 + (singlePost.userId - 1))}
                                </span>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800">Author {singlePost.userId}</div>
                                <div className="text-sm text-gray-500">Content Writer</div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            <div>Published Today</div>
                            <div>Updated 2 hours ago</div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <article className="prose prose-lg max-w-none">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100/50 p-8 md:p-12">
                        {/* Article Body */}
                        <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                {singlePost.body}
                            </p>
                            
                            {/* Additional Content Sections */}
                            <div className="mt-8 pt-8 border-t border-amber-100">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Takeaways</h2>
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200/50">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Understanding the core concepts discussed in this article</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Practical applications and real-world examples</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Next steps and further learning opportunities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Engagement Section */}
                        <div className="mt-12 pt-8 border-t border-amber-100">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center space-x-6">
                                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span>{Math.floor(Math.random() * 100) + 20}</span>
                                    </button>
                                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                        </svg>
                                        <span>Share</span>
                                    </button>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {Math.floor(Math.random() * 1000) + 500} views
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Navigation Footer */}
                <div className="mt-12 flex items-center justify-between">
                    <button 
                       
                        className="inline-flex items-center px-6 py-3 text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2 transform transition-transform duration-300 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Posts
                    </button>

                    <div className="flex space-x-4">
                        {singlePost.id > 1 && (
                            <button 
                             
                                className="px-4 py-2 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300"
                            >
                                Previous
                            </button>
                        )}
                        <button 
                         
                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Related Posts CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-200/30">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Enjoyed This Article?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Discover more insightful content and stay updated with our latest posts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                           
                            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            View All Posts
                        </button>
                        <button className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transform hover:scale-105 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}