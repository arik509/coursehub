"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      <header className="sticky top-0 z-50 bg-base-100 border-b border-base-200">
        <div className="navbar w-11/12 mx-auto px-4">
          {/* LEFT */}
          <div className="navbar-start">
            {/* mobile menu button */}
            <button
              type="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setOpen(!open)}
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

            {/* logo */}
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              <span className="font-extrabold text-primary">Course</span>
              <span className="font-extrabold text-base-content">Hub</span>
            </Link>
          </div>

          {/* CENTER (desktop) */}
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

              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      href="/add-course"
                      className={
                        pathname === "/add-course"
                          ? "font-semibold text-primary"
                          : "text-base-content/80 hover:text-base-content"
                      }
                    >
                      Add Course
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/manage-courses"
                      className={
                        pathname === "/manage-courses"
                          ? "font-semibold text-primary"
                          : "text-base-content/80 hover:text-base-content"
                      }
                    >
                      Manage Courses
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* RIGHT (desktop auth) */}
          <div className="navbar-end hidden lg:flex gap-3 items-center">
            {isLoggedIn && (
              <span className="text-xs md:text-sm text-base-content/70">
                {session.user.name || session.user.email}
              </span>
            )}

            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                Logout
              </button>
            ) : (
              <>
                <Link href="/auth/login" className="btn btn-ghost btn-sm">
                  Login
                </Link>
                <Link href="/auth/register" className="btn btn-primary btn-sm">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="lg:hidden bg-base-100 border-b border-base-200 shadow-lg">
          <div className="w-11/12 mx-auto py-4 space-y-3">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    pathname === item.href
                      ? "font-semibold text-primary py-2 px-3 rounded-lg bg-primary/10"
                      : "text-base-content py-2 px-3 hover:bg-base-200 rounded-lg transition"
                  }
                >
                  {item.name}
                </Link>
              ))}

              {isLoggedIn && (
                <>
                  <Link
                    href="/add-course"
                    onClick={() => setOpen(false)}
                    className={
                      pathname === "/add-course"
                        ? "font-semibold text-primary py-2 px-3 rounded-lg bg-primary/10"
                        : "text-base-content py-2 px-3 hover:bg-base-200 rounded-lg transition"
                    }
                  >
                    Add Course
                  </Link>
                  <Link
                    href="/manage-courses"
                    onClick={() => setOpen(false)}
                    className={
                      pathname === "/manage-courses"
                        ? "font-semibold text-primary py-2 px-3 rounded-lg bg-primary/10"
                        : "text-base-content py-2 px-3 hover:bg-base-200 rounded-lg transition"
                    }
                  >
                    Manage Courses
                  </Link>
                </>
              )}
            </nav>

            <div className="pt-3 border-t border-base-200 flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <span className="text-xs text-base-content/70 px-3">
                    Signed in as{" "}
                    <span className="font-semibold">
                      {session.user.name || session.user.email}
                    </span>
                  </span>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="btn btn-outline btn-sm w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setOpen(false)}
                    className="btn btn-outline btn-sm w-full"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setOpen(false)}
                    className="btn btn-primary btn-sm w-full"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
