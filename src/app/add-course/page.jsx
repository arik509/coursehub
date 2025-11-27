"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCoursePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    category: "Development",
    imageUrl: "",
  });

  // Optional extra guard on client
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
            You must be logged in to add a course.
          </p>
        </div>
      </main>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      alert("Course added (demo). Connect Express API next.");
      router.push("/manage-courses");
    }, 800);
  };

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Add Course</h1>
        <p className="text-sm text-base-content/70 mb-6">
          Only logged‑in users can access this page.
        </p>

        <form
          onSubmit={handleSubmit}
          className="card bg-base-100 shadow-sm border border-base-200 p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Course title"
            className="input input-bordered w-full"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Short description"
            rows={2}
            required
            value={form.shortDesc}
            onChange={(e) =>
              setForm({ ...form, shortDesc: e.target.value })
            }
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Full description"
            rows={4}
            required
            value={form.fullDesc}
            onChange={(e) =>
              setForm({ ...form, fullDesc: e.target.value })
            }
          />

          <div className="grid md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Price (e.g. $49)"
              className="input input-bordered w-full"
              required
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />
            <select
              className="select select-bordered w-full"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              <option>Development</option>
              <option>Design</option>
              <option>Career</option>
            </select>
            <input
              type="text"
              placeholder="Image URL (optional)"
              className="input input-bordered w-full"
              value={form.imageUrl}
              onChange={(e) =>
                setForm({ ...form, imageUrl: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Course"}
          </button>
        </form>
      </div>
    </main>
  );
}
