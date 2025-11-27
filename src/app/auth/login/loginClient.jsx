"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
      callbackUrl,
    });

    setLoading(false);

    if (res?.ok) {
      window.location.href = callbackUrl;
    } else {
      setError("Invalid email or password");
    }
  };

  const handleGoogle = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Login</h1>
        <p className="text-sm text-base-content/70 mb-6">
          Sign in to access your dashboard and protected features.
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
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>

          <p className="text-xs text-base-content/70 text-center">
            Don't have an account?{" "}
            <Link href="/auth/register" className="link link-primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
