import React from 'react'

const Rightbar = () => {
  return (
    <div className=" flex flex-col h-screen overflow-hidden bg-base-200 visible max-md:hidden">
          <ul className="menu bg-base-200 text-center w-64  rounded-box">
  <li className="menu-title text-accent text-xl ">Related post</li>
  <li className="line-clamp-3 justify-start bg-neutral rounded-md mb-1 text-lg text-info ">Lorem ipsum dolor sit amet consectetur adipisicing </li>
  <li className="line-clamp-3 justify-start bg-neutral rounded-md mb-1 text-lg text-info">Lorem ipsum dolor sit amet consectetur adipisicing </li>
  <li className="line-clamp-3 justify-start bg-neutral rounded-md mb-1 text-lg text-info">Lorem ipsum dolor sit amet consectetur adipisicing </li>
</ul>
        </div>
  )
}

export default Rightbar