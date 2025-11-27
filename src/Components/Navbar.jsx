"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          CourseHub
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side (auth buttons) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/(auth)/login"
            className="px-3 py-1.5 text-sm border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition"
          >
            Login
          </Link>
          <Link
            href="/(auth)/register"
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link
                href="/(auth)/login"
                onClick={() => setOpen(false)}
                className="flex-1 px-3 py-1.5 text-sm border border-indigo-600 text-indigo-600 rounded-full text-center"
              >
                Login
              </Link>
              <Link
                href="/(auth)/register"
                onClick={() => setOpen(false)}
                className="flex-1 px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-full text-center"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
