"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#111A2D] text-white fixed top-0 w-full z-10 shadow">
      <div className="max-w-full mx-0 px-4 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <Image src={assets.logo} alt="website logo" className="w-22" /> 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">Software</Link>
          <Link href="/services" className="hover:text-gray-300 transition">Share</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav className="md:hidden bg-[#111A2D] px-4 pb-4 flex flex-col gap-4 text-sm">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </nav>
      )}
    </header>
  );
}
