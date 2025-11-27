const testimonials = [
    {
      name: "Nusrat Jahan",
      role: "Frontend Developer",
      quote:
        "CourseHub helped me move from tutorial hell to real projects. The MERN course was exactly what I needed.",
    },
    {
      name: "Rakib Hasan",
      role: "Junior Full‑Stack Dev",
      quote:
        "Clear explanations, practical assignments, and great structure. I landed my first internship after finishing a track.",
    },
  ];
  
  export default function TestimonialsSection() {
    return (
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Success Stories</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Thousands of learners have upgraded their careers through CourseHub.
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card border border-base-200/70 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-linear-to-br from-indigo-50 via-sky-50 to-emerald-50"
              >
                <div className="card-body relative">
                  <div className="absolute inset-x-4 -top-1 h-[3px] rounded-full bg-linear-to-r from-primary via-sky-400 to-emerald-400" />
  
                  <div className="mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-4xl">
                      “
                    </span>
                  </div>
  
                  <p className="text-sm text-slate-800 leading-relaxed mb-4">
                    {t.quote}
                  </p>
  
                  <div className="mt-2 pt-3 border-t border-base-200 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-600">{t.role}</p>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                      Verified learner
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  