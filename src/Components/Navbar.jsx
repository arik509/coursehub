"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-base-100/80 backdrop-blur border-b border-base-200">
      <div className="navbar w-11/12 mx-auto px-4">
       
        <div className="navbar-start">
         
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

            {open && (
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content mt-3 z-1 w-52 p-2 shadow bg-base-100 rounded-box"
              >
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={
                        pathname === item.href ? "active text-primary font-semibold" : ""
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <div className="mt-2 flex gap-2">
                  <Link
                    href="/(auth)/login"
                    onClick={() => setOpen(false)}
                    className="btn btn-outline btn-sm flex-1"
                  >
                    Login
                  </Link>
                  <Link
                    href="/(auth)/register"
                    onClick={() => setOpen(false)}
                    className="btn btn-primary btn-sm flex-1"
                  >
                    Sign up
                  </Link>
                </div>
              </ul>
            )}
          </div>

          
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <span className="font-extrabold text-primary">Course</span>
            <span className="font-extrabold text-base-content">Hub</span>
          </Link>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "font-semibold text-primary"
                      : "text-base-content/80 hover:text-base-content"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="navbar-end hidden lg:flex gap-2">
          <Link href="/(auth)/login" className="btn btn-ghost btn-sm">
            Login
          </Link>
          <Link href="/(auth)/register" className="btn btn-primary btn-sm">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
