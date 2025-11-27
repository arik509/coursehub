"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      const loginRes = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
        callbackUrl: "/",
      });

      setLoading(false);

      if (loginRes?.ok) {
        router.push("/");
      } else {
        router.push("/auth/login");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Create an account
        </h1>
        <p className="text-sm text-base-content/70 mb-6">
          Sign up to save your progress and access protected features.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 card bg-base-100 shadow-sm p-6 border border-base-200"
        >
          {error && (
            <p className="text-sm text-error bg-error/10 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <label className="form-control w-full">
            <span className="label-text text-sm mb-1">Full name</span>
            <input
              type="text"
              className="input input-bordered w-full"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text text-sm mb-1">Email</span>
            <input
              type="email"
              className="input input-bordered w-full"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text text-sm mb-1">Password</span>
            <input
              type="password"
              className="input input-bordered w-full"
              required
              minLength={6}
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <div className="divider text-xs">OR</div>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>

          <p className="text-xs text-base-content/70 text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="link link-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
