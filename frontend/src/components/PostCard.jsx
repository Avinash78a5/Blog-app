import React from 'react'
import {Link} from 'react-router-dom'

const PostCard = ({post}) => {
  return (
    <>
        <div>
            <div className="flex border-gray-300 border-1 rounded-xl overflow-hidden">
                <div className="h-[200px] w-[200px] bg-gray-300 flex-shrink-0"></div>
                <div className="flex flex-col ml-4">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.content.substr(0,100)}...</p>
                    <Link to={`/posts/${post._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md w-fit hover:bg-blue-600 mt-4">
                      Read More
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default PostCard