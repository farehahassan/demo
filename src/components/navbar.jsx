import Link from 'next/link';
import React from 'react';

const navbar = () => {
    return (
       <header className='flex justify-between text-gray-300 py-10 px-10' >
        <div className='font-bold text-3xl'><h1>Fareha Hassan</h1></div>
        <ul className='flex justify-between'>
            <li className='px-5 hover:text-white hover:underline'>
                <Link href="/">Home</Link>
            </li>
            <li className='px-5  hover:text-white hover:underline'>
                <Link href="/about">About</Link>
            </li>
            <li className='px-5  hover:text-white hover:underline'>
                <Link href="/skills">Skills</Link>
            </li>
            <li className='px-5  hover:text-white hover:underline'>
                <Link href="/blogs">Blogs</Link>
            </li>
            <li className='px-5  hover:text-white hover:underline'>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
       </header>
    );
};

export default navbar;