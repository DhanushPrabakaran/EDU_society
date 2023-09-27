"use client";
import React, { useEffect, useRef } from "react";
import logo from "@/public/next.svg";
import Image from "next/image";
import Profile from "@/public/profile.svg";
const Header = () => {
  const inputRef = useRef(null);
  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.altKey && event.key === "l") {
      inputRef && (inputRef.current as any).focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });

  return (
    <div className="navbar   h-5 w-auto  border-b border-b-stone-500 bg-base-100">
      <div className="flex-none lg:hidden min-md:visible">
        {/* <button className="btn btn-square btn-ghost"> */}
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>

        {/* </button> */}
      </div>
      <div className=" gap-2 flex-1 justify-between ">
        <div className="flex items-center ">
          <a className="btn btn-ghost text-lg normal-case mr-2"><span className=" text-secondary font-extrabold">Dev</span>Geeks</a>
          <div className="form-control relative  ">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search here..."
              className="input  input-bordered input-sm input-ghost"
            />

            <span className=" absolute right-1 top-1  ">
              <kbd className="kbd kbd-sm ">alt</kbd> +
              <kbd className="kbd kbd-sm">l</kbd>
            </span>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-neutral btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={Profile} alt="Picture of the author" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-box w-40"
          >
            <li>
              <a className="justify-center btn-neutral">Profile</a>
            </li>
            <li>
              <a className="justify-center btn-error">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
