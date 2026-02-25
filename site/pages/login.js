import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

export const Apply = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Login Successful!");
          localStorage.setItem("LinkTreeToken", data.token);
          router.push("/dashboard");
        } else {
          toast.error("Invalid credentials");
        }
      })
      .catch(() => toast.error("Server Error"));
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100">

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-[140px]"></div>

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <Link href="/" className="flex justify-center mb-12 group">
          <h2 className="text-3xl font-black tracking-tight transition-all duration-300 group-hover:scale-105">
            NEXT
            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
              JS.
            </span>
          </h2>
        </Link>

        {/* Card */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/40 p-10 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Sign in to continue your journey
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">

            {/* Email */}
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
                required
                className="w-full px-5 py-4 text-sm font-medium transition-all border shadow-sm outline-none peer rounded-2xl bg-white/80 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="w-full px-5 py-4 text-sm font-medium transition-all border shadow-sm outline-none peer rounded-2xl bg-white/80 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="relative w-full py-4 mt-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-500 shadow-lg rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-black hover:to-black shadow-indigo-300/40 active:scale-95"
            >
              Sign In
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                href="/apply"
                className="font-bold text-transparent transition bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text hover:opacity-70"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-10 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-400">
          Secure Access / Auth v2.0
        </p>
      </div>
    </section>
  );
};

export default Apply;