import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge badge-primary badge-outline mb-3">
            New · Learn modern skills
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Upgrade your career with{" "}
            <span className="text-primary">CourseHub</span>
          </h1>
          <p className="text-base-content/70 mb-6">
            High‑quality online courses in web development, design, and more. Learn at your own pace with hands‑on projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
            <Link href="/(auth)/register" className="btn btn-outline">
              Become an Instructor
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-base-content/70">
            <div>
              <p className="font-semibold text-base-content">200+ Courses</p>
              <p>Curated by industry experts</p>
            </div>
            <div>
              <p className="font-semibold text-base-content">10K+ Students</p>
              <p>Learning with CourseHub</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
              <h2 className="card-title">Learn Full‑Stack Development</h2>
              <p className="text-sm text-base-content/70">
                Master React, Next.js, Node.js, and MongoDB with real projects and mentor support.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Instructor" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Sabir Hossain Arik</p>
                  <p className="text-xs text-base-content/70">Frontend Developer · Instructor</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-base-content/60">
                <span>🔥 Beginner to Advanced</span>
                <span>⏱ 40+ hours</span>
                <span>⭐️ 4.9 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
