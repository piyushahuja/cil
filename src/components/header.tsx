"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Cambridge Innovation Labs Logo" 
            width={50} 
            height={50} 
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold">Cambridge Innovation Labs</span>
        </Link>
        <img 
          src="/iuk.png"
          alt="Innovate UK"
          className="h-10 w-auto" 
        />
       
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/team" className="hover:text-blue-600">People</Link></li>
          <li className="relative">
            <button 
              onClick={toggleResourcesDropdown}
              className="flex items-center hover:text-blue-600 focus:outline-none"
            >
              Resources
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link 
                  href="/research" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setResourcesDropdownOpen(false)}
                >
                  Research Areas
                </Link>
                <Link 
                  href="/case-studies" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setResourcesDropdownOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  href="/blog" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setResourcesDropdownOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/news" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setResourcesDropdownOpen(false)}
                >
                  In The News
                </Link>
              </div>
            )}
          </li>
          <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

