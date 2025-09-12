"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#C9A178] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* House Icon */}
          <span className="inline-block align-middle">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#8B6534" />
              <path d="M20 12L12 18V28H28V18L20 12Z" fill="#C9A178" />
            </svg>
          </span>
          {/* Title */}
          <span className="text-3xl font-dm-serif font-bold tracking-tight text-gray-800">SONIA'S REALTY MEDIA</span>
        </div>

        <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
          <Link href="/" className="text-white hover:text-gray-800">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-800">About us</Link>
          <Link href="/services" className="text-white hover:text-gray-800">Services</Link>
          <Link href="/projects" className="text-white hover:text-gray-800">Projects</Link>
          <Link href="/contact" className="text-white hover:text-gray-800">Contact</Link>
          {/* Search Icon */}
          <span className="ml-2 cursor-pointer">
            <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </nav>

        <button
          className="md:hidden p-2 text-2xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-white">
          <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About us</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block">Services</Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="block">Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          <span className="block pt-2">
            <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>
      )}
    </header>
  );
}
