export default function Footer() {
    return (
      <footer className="mt-12 border-t border-base-200 bg-base-100">
        <div className="w-11/12 mx-auto py-8 grid gap-8 md:grid-cols-4">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-extrabold text-primary">Course</span>
              <span className="text-xl font-extrabold text-base-content">
                Hub
              </span>
            </div>
            <p className="text-sm text-base-content/70">
            Upgrade your career with CourseHub
            </p>
          </div>
  
          
          <div>
            <h4 className="text-sm font-semibold mb-3 text-base-content">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <a href="/courses" className="link link-hover">
                  Browse courses
                </a>
              </li>
              <li>
                <a href="/about" className="link link-hover">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="link link-hover">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold mb-3 text-base-content">
              For creators
            </h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <a href="/add-course" className="link link-hover">
                  Add course
                </a>
              </li>
              <li>
                <a href="/manage-courses" className="link link-hover">
                  Manage courses
                </a>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h4 className="text-sm font-semibold mb-3 text-base-content">
              Follow
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="btn btn-ghost btn-circle btn-sm border border-base-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="btn btn-ghost btn-circle btn-sm border border-base-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.95 7.14c.01.17.01.35.01.52 0 5.3-4.03 11.4-11.4 11.4-2.26 0-4.36-.66-6.13-1.8.31.04.63.06.96.06 1.88 0 3.61-.64 4.99-1.73-1.76-.03-3.24-1.2-3.75-2.8.25.05.51.07.77.07.37 0 .73-.05 1.07-.14-1.84-.37-3.22-1.99-3.22-3.94v-.05c.54.3 1.16.48 1.82.5a3.96 3.96 0 0 1-1.76-3.3c0-.73.2-1.4.54-1.99a11.44 11.44 0 0 0 8.3 4.21 4.47 4.47 0 0 1-.1-.9 3.95 3.95 0 0 1 6.83-2.7 7.78 7.78 0 0 0 2.5-.95 3.96 3.96 0 0 1-1.74 2.18 7.9 7.9 0 0 0 2.27-.63 8.51 8.51 0 0 1-1.99 2.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        <div className="border-t border-base-200">
          <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-base-content/70">
            <p>© {new Date().getFullYear()} CourseHub. All rights reserved.</p>
           
          </div>
        </div>
      </footer>
    );
  }
  