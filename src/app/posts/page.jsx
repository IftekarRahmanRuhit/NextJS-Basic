// import Link from 'next/link';
// import React from 'react'

// export const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     return data;
// }

// export default async function PostPage() {
//     const posts = await getPosts();
//   return (
//     <div>
//         <h1 className="text-3xl font-bold text-center mt-12">Posts Page</h1>
//         <div>
//             {posts.map((post) => (
//                 <div key={post.id} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg my-6">
//                     <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
//                     <p className="text-gray-800">{post.body}</p>
//                     <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline mt-4 inline-block">Details</Link>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

import Link from 'next/link';
import React from 'react'

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export default async function PostPage() {
    const posts = await getPosts();
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-4">
                        Posts Page
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest articles, insights, and updates from our community.
                    </p>
                    <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Live from API</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {posts.length} Posts
                        </span>
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-amber-100/50 overflow-hidden">
                            {/* Post Header */}
                            <div className="p-6 pb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                                        Post #{post.id}
                                    </span>
                                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Post Title */}
                                <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-amber-600 transition-colors duration-300 line-clamp-2 capitalize">
                                    {post.title}
                                </h2>

                                {/* Post Body */}
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                                    {post.body}
                                </p>
                            </div>

                            {/* Post Footer */}
                            <div className="px-6 pb-6">
                                <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            {Math.floor(Math.random() * 1000) + 100}
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            {Math.floor(Math.random() * 50) + 10}
                                        </div>
                                    </div>

                                    <Link 
                                        href={`/posts/${post.id}`} 
                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                                    >
                                        Details
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Load More Section */}
                <div className="text-center mt-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-200/30">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Enjoying Our Content?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Stay updated with our latest posts and never miss out on valuable insights and updates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Subscribe to Newsletter
                        </button>
                        <button className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transform hover:scale-105 transition-all duration-300">
                            View Archive
                        </button>
                    </div>
                </div>

                {/* Stats Footer */}
                <div className="mt-12 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-amber-600">{posts.length}</div>
                            <div className="text-sm text-gray-600">Total Posts</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-amber-600">
                                {Math.floor(posts.length * 150 / 1000)}K+
                            </div>
                            <div className="text-sm text-gray-600">Total Views</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-amber-600">
                                {Math.floor(posts.length * 25 / 100)}+
                            </div>
                            <div className="text-sm text-gray-600">Authors</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-bold text-amber-600">Daily</div>
                            <div className="text-sm text-gray-600">Updates</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}