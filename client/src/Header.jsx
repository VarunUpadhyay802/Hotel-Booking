import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header className='flex justify-between'>
                <a href="" className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className='font-bold text-xl'>airbnb</span>
                </a>
                <div className="flex border border-gray-300 rounded-full py-2 pl-4 gap-3 shadow-md shadow-gray-500">
                    <div>Anywhere</div>
                    <div className="border border-l border-gray-300"></div>
                    <div>Any week</div>
                    <div className="border border-l border-gray-300"></div>
                    <div>Add guests</div>
                    <button className='bg-primary text-white p-1 rounded-full mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                </div>
                <div className="flex items-center  border border-gray-300 rounded-full py-2 px-2 gap-5 shadow-md shadow-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <Link to={'/login'} className="bg-gray-500 text-white rounded-full border border-gray border-gray-500 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative top-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                    </Link>
                </div>
            </header>
      
    </div>
  )
}

export default Header
