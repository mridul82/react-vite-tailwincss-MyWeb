
import React from 'react'

const BlogCard = ({post}) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg mb-6 rounded-2xl">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">{post.content.slice(0, 100)}...</p>
        <p className="text-black-600 mt-2">Category: {post.category}</p>
      </div>
    </div>
  )
}

export default BlogCard
