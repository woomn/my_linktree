import React, { useState } from "react";
import styles from "../styles/Apply.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

export const Apply = () => {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!category)
      return toast.error("add a category please!", { type: "error" });
    //backend part
      fetch("http://localhost:8080/api/register", {
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
        console.log("Data from Backend:", data);

        if (data.status === "success" || data.message === "user created") {
          toast.success("Registered Successfully!");
          localStorage.setItem("LinkTreeToken", data.token);
          router.push("/login");
        } else if (
          data.message.includes("E11000") ||
          data.message.includes("duplicate")
        ) {
          // ถ้าเจอ Error เรื่องข้อมูลซ้ำ
          toast.error("Email หรือ Username นี้ถูกใช้ไปแล้ว");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <section
        className={
          styles.background + " min-h-screen flex justify-center items-center "
        }
      >
        <div className="main">
          <div className="px-4 py-8 bg-white border-2 shadow-lg rounded-2xl content">
            <h1 className="text-2xl font-bold text-center">
              Join the top 1% creators
            </h1>
            <p className="text-center">Create Linktree for your brand</p>
            <p className="py-5 font-bold text-center text-gray-400">
              Start building your Hub
            </p>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-4 mt-5 text-lg"
            >
              <span className="flex flex-row px-3 py-2 border-2 rounded-md shadow-md focus:outline-one">
                <img className="w-6 mr-4" src="/svg/profile.svg" alt="Profile Icon" />
                <input
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full focus:outline-none"
                  type="text"
                  placeholder="Social Handle"
                  required
                />
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 border-2 rounded-md shadow-md focus:outline-one"
                type="email"
                placeholder="Enter your email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border-2 rounded-md shadow-md focus:outline-one"
                type="password"
                placeholder="Set a password"
                required
              />

              <h5 className="text-sm text-center text-indigo-400">
                Account Type
              </h5>
              <span className="flex">
                <label className="flex flex-row mr-3">
                  <input
                    type="checkbox"
                    value="Creator"
                    checked={category === "Creator"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-2">Creator</p>
                </label>
                <label className="flex flex-row mr-3">
                  <input
                    type="checkbox"
                    value="Agency"
                    checked={category === "Agency"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-2">Agency</p>
                </label>
                <label className="flex flex-row mr-3">
                  <input
                    type="checkbox"
                    value="Brand"
                    checked={category === "Brand"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-2">Brand</p>
                </label>
              </span>

              <input
                className="py-2 text-white bg-indigo-600 rounded-lg cursor-pointer"
                type="submit"
                value="Register"
              />
            </form>
          </div>
          <h4 className="pt-3 text-center text-white">
            Already have an account?{" "}
            <Link className="font-bold" href="/login">
              Click
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Apply;
