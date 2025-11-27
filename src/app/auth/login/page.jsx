"use client";

import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user) {
      router.replace(callbackUrl);
    }
  }, [session, callbackUrl, router]);

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

    if (res?.error) {
      setError("Invalid email or password.");
      return;
    }

    if (res?.ok) {
      router.push(callbackUrl);
    }
  };

  return (
    <main className="py-10">
      <div className="w-11/12 mx-auto max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Login</h1>
        <p className="text-sm text-base-content/70 mb-6">
          Login with email/password or continue with Google.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 card bg-base-100 shadow-sm p-6 border border-base-200">
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
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text text-sm mb-1">Password</span>
            <input
              type="password"
              className="input input-bordered w-full"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="divider text-xs">OR</div>

          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl })}
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
}
