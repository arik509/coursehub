const features = [
    {
      title: "Expert Instructors",
      desc: "Learn from real‑world developers and designers with industry experience.",
    },
    {
      title: "Hands‑on Projects",
      desc: "Build portfolio‑ready projects to showcase your skills to employers.",
    },
    {
      title: "Flexible Learning",
      desc: "Study anytime, anywhere with lifetime access to all course content.",
    },
    {
      title: "Certificates",
      desc: "Earn completion certificates to highlight your achievements.",
    },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:-translate-x-0.5"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-primary/40 via-sky-500/40 to-emerald-400/40 blur-2xl transition-opacity duration-300" />
  
                <div className="relative card-body bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xs font-semibold border border-white/10">
                    0{idx + 1}
                  </span>
                  <h3 className="card-title mb-2 text-base md:text-xl">
                    {item.title}
                  </h3>
  
                  
                  <p className="text-sm text-slate-200/80 min-h-16">
                    {item.desc}
                  </p>
  
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-200/70 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <span className="w-6 h-0.5 rounded-full bg-linear-to-r from-primary to-emerald-400" />
                    <span>Learn more benefits</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  