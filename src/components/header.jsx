import React, { useState } from "react";
// import {  Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import Link from "next/link";

const Hearder = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="fixed top-0 flex justify-between items-center py-12 px-2 w-full h-20 bg-black">
      <div>
        <h1 className="tracking-wider ml-9  font-bold text-3xl sm:text-4xl text-gray-500 ">
          Fareha Hassan
        </h1>{" "}
      </div>

      {/* <div className='flex items-start place-content-end content-end  justify-end mx-18 px-40 text-2xl'> */}
      <ul className=" sm:font-semibold tracking-wider  md:flex flex justify-center  text-xl mr-20">
        <li>
          <Link
            href="home"
            
            className={({ isActive }) =>
              `block pl-3 duration-200 ${
                isActive ? "text-white" : "text-gray-500"
              } border-gray-300 lg:hover:bg-transparent`
            }
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={({ isActive }) =>
              `block pl-3 cursor-pointer duration-200 ${
                isActive ? "text-white" : "text-gray-500"
              } bordet-gray-500 lg:hover:bg-transparent`
            }
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/skills"
            className={({ isActive }) =>
              `block pl-3 cursor-pointer du ration-200 ${
                isActive ? "text-white" : "text-gray-500"
              } bordet-gray-500 lg:hover:bg-transparent`
            }
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            href="/blogs"
            className={({ isActive }) =>
              `block pl-3 cursor-pointer duration-200 ${
                isActive ? "text-white" : "text-gray-500"
              } bordet-gray-500 lg:hover:bg-transparent`
            }
          >
            Blogs
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={({ isActive }) =>
              `block pl-3 cursor-pointer duration-200 ${
                isActive ? "text-white" : "text-gray-500"
              } bordet-gray-500 lg:hover:bg-transparent`
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* </div> */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white"/>}
      </div>

      {nav && (
        <ul className="flex bg-fixed z-1 h-100 flex-col md:hidden justify-center items-center absolute top-0 left-0 w-full h-screen py-11 bg-dark-gray">
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link 
              href="/home"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 duration-200 ${
                  isActive ? "text-white" : "text-gray-500"
                } bordet-gray-500 lg:hover:bg-transparent`
              }
            >
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link
              href="/about"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-gray-500"
                } bordet-gray-500 lg:hover:bg-transparent`
              }
            >
              About
            </Link>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link
              href="/skills"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer du ration-200 ${
                  isActive ? "text-white" : "text-gray-500"
                } bordet-gray-500 lg:hover:bg-transparent`
              }
            >
              Skills
            </Link>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link
              href="/blogs"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-gray-500"
                } bordet-gray-500 lg:hover:bg-transparent`
              }
            >
             Blogs
            </Link>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link
              href="/contact"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-gray-500"
                } bordet-gray-500 lg:hover:bg-transparent`
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Hearder;