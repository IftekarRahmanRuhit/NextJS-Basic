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
    <div>
        <h1 className="text-3xl font-bold text-center mt-12">Posts Page</h1>
        <div>
            {posts.map((post) => (
                <div key={post.id} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg my-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                    <p className="text-gray-800">{post.body}</p>
                    <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline mt-4 inline-block">Details</Link>
                </div>
            ))}
        </div>
    </div>
  )
}
