import Link from "next/link";

export default function BannerSection() {
  return (
    <section className="py-10">
      <div className="w-11/12 mx-auto">
        <div className="hero rounded-2xl bg-linear-to-r from-primary to-sky-500 text-primary-content">
          <div className="hero-content flex-col md:flex-row justify-between w-full gap-6 px-8 py-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to start your next course?
              </h2>
              <p className="text-sm md:text-base text-primary-content/90 max-w-md">
                Create your free account in minutes and get access to our full
                library of courses and learning paths.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/(auth)/register" className="btn btn-primary bg-white text-primary border-0">
                Get started free
              </Link>
              <Link href="/courses" className="btn btn-outline border-base-200">
                Browse catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
