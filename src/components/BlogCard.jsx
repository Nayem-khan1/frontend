import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function BlogCard({ blog }) {
  return (
    <div className="relative group w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3 bg-cyan-200 text-blue-600 text-sm px-3 py-1 rounded-full shadow z-10">
        {blog?.categories[0]?.name}
      </div>

      {/* Read Time */}
      <p className="absolute top-3 right-3 bg-white text-[#01A1A3] text-sm font-semibold px-3 py-1 rounded-full shadow z-10">
        {blog.read_time_minute} min read
      </p>

      {/* Bottom Content (Sliding Section) */}
      <div className="relative bg-white transition-all duration-300 group-hover:-translate-y-4">

        {/* Inverted Author Info Section */}
        <div className="relative w-full h-20 px-4">
          <div className="absolute -top-10 left-0 w-3/4 h-20 bg-white border-t-[8px] border-l-[8px] border-gray-200 rounded-tl-[30px] flex items-center px-4 shadow">
            <img
              className="w-10 h-10 rounded-full object-cover mr-3"
              src={blog.author.image}
              alt={blog.author.full_name}
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {blog?.author?.full_name}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="pt-10 pb-6 px-4">
          <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
            {blog.title}
          </h3>
        </div>
      </div>

      {/* Hover Icon Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <FiArrowRight className="text-white text-4xl transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  )
}

export default BlogCard
