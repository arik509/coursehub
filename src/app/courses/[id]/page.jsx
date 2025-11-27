"use client";

import { useParams, useRouter } from "next/navigation";

const allCourses = [
  {
    id: "mern-bootcamp",
    title: "MERN Stack Bootcamp",
    fullDesc:
      "Master full‑stack development with MongoDB, Express, React, and Node. Build real projects, understand deployment, and learn best practices for production‑ready apps.",
    price: "$59",
    level: "Intermediate",
    lessons: 32,
    duration: "40+ hours",
    lastUpdated: "Nov 2025",
  },
  {
    id: "nextjs-advanced",
    title: "Advanced React & Next.js",
    fullDesc:
      "Deep dive into server components, App Router, data fetching, and performance optimization to ship scalable Next.js apps.",
    price: "$49",
    level: "Advanced",
    lessons: 24,
    duration: "25+ hours",
    lastUpdated: "Oct 2025",
  },
  {
    id: "uiux-fundamentals",
    title: "UI/UX Design Fundamentals",
    fullDesc:
      "Learn core design principles, wireframing, typography, color, and layout to design modern web interfaces.",
    price: "$39",
    level: "Beginner",
    lessons: 18,
    duration: "15+ hours",
    lastUpdated: "Sep 2025",
  },
  
];

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const course = allCourses.find((c) => c.id === id);

  if (!course) {
    return (
      <main className="py-10">
        <div className="w-11/12 mx-auto">
          <p className="text-sm text-error">
            Course not found. Please go back and select a valid course.
          </p>
          <button onClick={() => router.back()} className="btn btn-outline btn-sm mt-4">
            Go back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto space-y-6">
        
        <div className="hero rounded-2xl bg-linear-to-r from-indigo-600 via-sky-500 to-emerald-400 text-primary-content">
          <div className="hero-content flex-col md:flex-row items-start gap-8 p-8 md:p-10">
            <div className="flex-1 space-y-3">
              <p className="badge badge-outline border-white/40 text-xs text-white">
                {course.level}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
              <p className="text-sm md:text-base text-primary-content/90 max-w-2xl">
                {course.fullDesc.slice(0, 160)}...
              </p>
              <div className="flex flex-wrap gap-4 text-xs md:text-sm text-primary-content/90">
                <span>📚 {course.lessons} lessons</span>
                <span>⏱ {course.duration}</span>
                <span>🗓 Updated {course.lastUpdated}</span>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <div className="card bg-base-100 text-base-content shadow-xl">
                <div className="card-body">
                  <p className="text-xs text-base-content/60">Course price</p>
                  <p className="text-3xl font-bold mb-2">{course.price}</p>
                  <p className="text-xs text-base-content/60 mb-4">
                    One‑time payment · Lifetime access
                  </p>
                  <button className="btn btn-primary w-full mb-2">Enroll now</button>
                  <button
                    onClick={() => router.back()}
                    className="btn btn-outline btn-sm w-full"
                  >
                    Back to courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-xl font-semibold">About this course</h2>
            <p className="text-sm md:text-base text-base-content/80">
              {course.fullDesc}
            </p>
          </div>
          <aside className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/70">
              Course details
            </h3>
            <ul className="text-sm text-base-content/80 space-y-1">
              <li>Level: {course.level}</li>
              <li>Lessons: {course.lessons}</li>
              <li>Duration: {course.duration}</li>
              <li>Last updated: {course.lastUpdated}</li>
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
