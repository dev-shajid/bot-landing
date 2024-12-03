import { Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='w-full px-4 lg:px-6 border-b border-gray-800'>
      <div className='container w-full max-w-5xl mx-auto h-20 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <div className='flex items-center gap-2'>
            <Share2 className='h-6 w-6 text-white' />
            <span className='text-lg font-bold text-white'>attensys</span>
          </div>
        </Link>
        <div className='ml-auto flex gap-2'>
          <a
            href='#_'
            className='inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500'
          >
            <span className='relative'>Chat with Us</span>
          </a>
          <a
            href='#_'
            className='inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-center text-indigo-100 border-2 border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white'
          >
            <span className='relative'>Community</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;