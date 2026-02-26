import React, { useState } from "react";
import styles from "../styles/apply.module.css"; // มั่นใจว่ามีไฟล์ CSS นี้อยู่
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

export const Apply = () => {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!category)
      return toast.error("Please select an account type!", { position: "top-center" });

    fetch("https://mylinktree-production.up.railway.app/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handle,
        email,
        password,
        category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" || data.message === "user created") {
          toast.success("Registered Successfully!");
          localStorage.setItem("LinkTreeToken", data.token);
          router.push("/login");
        } else if (
          data.message.includes("E11000") ||
          data.message.includes("duplicate")
        ) {
          toast.error("Email หรือ Username นี้ถูกใช้ไปแล้ว");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      {/* นำ className เดิมกลับมาใช้เพื่อดึงพื้นหลังจาก CSS Module */}
      <section className={styles.background + " min-h-screen flex flex-col justify-center items-center px-4 py-10"}>
        <div className="w-full max-w-md">
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-black/20 border border-gray-100">

            <div className="mb-8 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Join the <span className="text-indigo-600">top 1%</span>
              </h1>
              <p className="mt-2 font-medium text-gray-500">Create your Hub in seconds</p>
            </div>

            <form onSubmit={handleRegister} className="flex flex-col gap-5">

              {/* Social Handle Input */}
              <div className="relative group">
                <div className="flex items-center px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-2xl focus-within:border-indigo-500 focus-within:bg-white transition-all shadow-sm">
                  <img className="w-5 h-5 mr-3 opacity-50 group-focus-within:opacity-100" src="/svg/profile.svg" alt="" />
                  <input
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="w-full text-base font-medium bg-transparent focus:outline-none"
                    type="text"
                    placeholder="Social Handle"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex items-center px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-2xl focus-within:border-indigo-500 focus-within:bg-white transition-all shadow-sm">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-base font-medium bg-transparent focus:outline-none"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-2xl focus-within:border-indigo-500 focus-within:bg-white transition-all shadow-sm">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-base font-medium bg-transparent focus:outline-none"
                  type="password"
                  placeholder="Set Password"
                  required
                />
              </div>

              {/* Account Type Selection */}
              <div className="mt-2">
                <h5 className="mb-4 text-xs font-bold tracking-widest text-center text-gray-400 uppercase">
                  Account Type
                </h5>
                <div className="grid grid-cols-3 gap-3">
                  {["Creator", "Agency", "Brand"].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={type}
                        checked={category === type}
                        onChange={handleCategoryChange}
                        className="hidden"
                      />
                      <div className={`py-2 text-center rounded-xl border-2 transition-all text-sm font-bold ${category === type
                          ? "border-indigo-600 bg-indigo-50 text-indigo-600 shadow-inner"
                          : "border-gray-100 bg-white text-gray-400 hover:border-gray-200"
                        }`}>
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="mt-4 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Create Account
              </button>
            </form>
          </div>

          {/* ปรับสีตัวหนังสือด้านล่างให้เด่นขึ้นถ้าพื้นหลังเดิมเป็นสีเข้ม */}
          <p className="mt-8 font-medium text-center text-white drop-shadow-sm">
            Already have an account?{" "}
            <Link className="font-extrabold text-white hover:underline underline-offset-4" href="/login">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Apply;