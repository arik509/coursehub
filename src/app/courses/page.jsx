"use client";

import { useState } from "react";

const allCourses = [
  {
    id: "mern-bootcamp",
    title: "MERN Stack Bootcamp",
    level: "Intermediate · 32 lessons",
    price: "$59",
    category: "Development",
    shortDesc: "Build full‑stack apps with MongoDB, Express, React, and Node.",
  },
  {
    id: "nextjs-advanced",
    title: "Advanced React & Next.js",
    level: "Advanced · 24 lessons",
    price: "$49",
    category: "Development",
    shortDesc: "Optimize, scale, and ship production‑ready Next.js apps.",
  },
  {
    id: "uiux-fundamentals",
    title: "UI/UX Design Fundamentals",
    level: "Beginner · 18 lessons",
    price: "$39",
    category: "Design",
    shortDesc: "Learn layouts, typography, and visual hierarchy for the web.",
  },
  {
    id: "js-master",
    title: "JavaScript Mastery",
    level: "Beginner · 28 lessons",
    price: "$35",
    category: "Development",
    shortDesc: "Go from JS basics to working confidently with modern syntax.",
  },
  {
    id: "tailwind-ui",
    title: "Tailwind & UI Systems",
    level: "Intermediate · 20 lessons",
    price: "$29",
    category: "Design",
    shortDesc:
      "Build beautiful, responsive UIs with Tailwind CSS and design tokens.",
  },
  {
    id: "career-prep",
    title: "Developer Career Prep",
    level: "All levels · 15 lessons",
    price: "$25",
    category: "Career",
    shortDesc: "Portfolio, resume, and interview prep for junior devs.",
  },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Explore Courses
          </h1>
          <p className="text-base-content/70 max-w-2xl">
            Search and filter our catalog to find the right course for your next
            step.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
          <div className="flex-1">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>

          <div className="flex gap-2">
            <select
              className="select select-bordered select-sm md:select-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Development</option>
              <option>Design</option>
              <option>Career</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((course) => (
            <article
              key={course.id}
              className="card border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-linear-to-br from-indigo-50 via-sky-50 to-emerald-50"
            >
              <div className="card-body">
                <div className="badge badge-outline badge-sm mb-2">
                  {course.category}
                </div>
                <h3 className="card-title text-base md:text-lg">
                  {course.title}
                </h3>
                <p className="text-xs text-base-content/60">{course.level}</p>
                <p className="mt-3 text-sm text-base-content/80 line-clamp-2">
                  {course.shortDesc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-amber-500">
                    {course.price}
                  </span>
                  <a
                    href={`/courses/${course.id}`}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Details
                  </a>
                </div>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="text-sm text-base-content/70">
              No courses found. Try a different search or category.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
