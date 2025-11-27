"use client";

import { useSession } from "next-auth/react";

const demoCourses = [
  { id: "mern-bootcamp", title: "MERN Stack Bootcamp", price: "$59", status: "Published" },
  { id: "nextjs-advanced", title: "Advanced React & Next.js", price: "$49", status: "Draft" },
];

export default function ManageCoursesPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="py-10">
        <div className="w-11/12 mx-auto">Checking authentication...</div>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="py-10">
        <div className="w-11/12 mx-auto">
          <p className="text-sm text-error">
            You must be logged in to manage courses.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Manage Courses</h1>
        <p className="text-sm text-base-content/70 mb-6">
          View and manage the courses you have created.
        </p>

        <div className="overflow-x-auto card bg-base-100 shadow-sm border border-base-200">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demoCourses.map((c) => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.price}</td>
                  <td>
                    <span className="badge badge-outline">{c.status}</span>
                  </td>
                  <td className="text-right space-x-2">
                    <a
                      href={`/courses/${c.id}`}
                      className="btn btn-xs btn-outline"
                    >
                      View
                    </a>
                    <button className="btn btn-xs btn-error btn-outline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
