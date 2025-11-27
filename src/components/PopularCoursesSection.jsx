const popularCourses = [
    {
      title: "MERN Stack Bootcamp",
      level: "Intermediate · 32 lessons",
      price: "$59",
    },
    {
      title: "Advanced React & Next.js",
      level: "Advanced · 24 lessons",
      price: "$49",
    },
    {
      title: "UI/UX Design Fundamentals",
      level: "Beginner · 18 lessons",
      price: "$39",
    },
  ];
  
  export default function PopularCoursesSection() {
    return (
      <section className="py-10">
        <div className="w-11/12 mx-auto">
          <div>
            <h2 className="text-2xl mb-2 md:text-4xl text-center font-bold">
              Popular Courses
            </h2>
            <p className="text-base-content/70 text-center">
              Start with student‑favorite courses picked for you.
            </p>
          </div>
  
          <div className="flex items-center justify-between mb-6">
            <span /> 
            <a href="/courses" className="btn btn-ghost btn-sm">
              View all
            </a>
          </div>
  
          <div className="grid gap-6 md:grid-cols-3">
            {popularCourses.map((course, idx) => (
              <div
                key={course.title}
                className="card shadow-sm border border-base-200 hover:shadow-xl transition-all duration-300 bg-linear-to-br from-indigo-50 via-sky-50 to-emerald-50 text-base-content"
              >
                <div className="card-body">
                  <span className="badge badge-sm border-0 bg-linear-to-r from-indigo-500/90 to-sky-400/90 text-xs text-white w-fit mb-3">
                    Top #{idx + 1}
                  </span>
                  <h3 className="card-title text-base md:text-lg text-slate-900">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-600">{course.level}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-amber-500">
                      {course.price}
                    </span>
                    <button className="btn btn-sm btn-primary btn-outline border-primary/40 text-xs">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  