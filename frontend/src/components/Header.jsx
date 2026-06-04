import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* //Header */}
       <div className="w-full h-16 bg-gray-800 text-white flex justify-between items-center px-8">
          <div className="flex-1 ml-[60px]">
            <Link to="/">Blog</Link>
          </div>
          <div className="mr-[150px]">
            <ul className="flex">
                <li className="mx-4 cursor-pointer">Home</li>
                <li className="mx-4 cursor-pointer">Posts</li>
                <li className="mx-4 cursor-pointer">About</li>
                <li className="mx-4 cursor-pointer">Contact</li>
            </ul>
          </div>
       </div>
    </>
  )
}

export default Header