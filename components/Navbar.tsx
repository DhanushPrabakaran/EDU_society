import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <ul className="menu items-center text-start  p-4 w-44 h-full bg-base-200 text-base-content opacity-80">
          {/* Sidebar content here */}
          <Link
          href={"/"}
          className=" btn btn-secondary  text-left w-full hover:bg-base-100 hover:text-secondary-focus  m-1">🏠 Home</Link>
          <Link
          href={"/idea"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">💭 Idea</Link>
          <Link
          href={"/project"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">💻 Projects</Link>
          <Link
          href={"/group"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">👥 Groups</Link>
          <Link
          href={"/test"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">📝Test</Link>
          <Link
          href={"/betaversion"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">📦β Vers</Link>
          
        </ul>
  )
}

export default Navbar