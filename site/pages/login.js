import React, { useState } from "react";
import styles from "../styles/Apply.module.css";
import { toast } from "react-toastify";
import Footer from "@/components/Footer";
import Link from "next/link";

export const Apply = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    toast("You are logged in successfully!");
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
              Login to your account
            </h1>
            <p className="text-center">Access your Dashboard</p>
            <p className="py-5 font-bold text-center text-gray-400">
              Start building your Hub
            </p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 mt-5 text-lg"
            >
              <span className="flex flex-row px-3 py-2 border-2 rounded-md shadow-md focus:outline-one">
                <img className="w-6 mr-4" src="/svg/email.svg" alt="" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:outline-one"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border-2 rounded-md shadow-md focus:outline-one"
                type="password"
                placeholder="Set a password"
                required
              />

              <input
                className="py-2 text-white bg-indigo-600 rounded-lg cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
            <h4 className="text-gray-700">
              Register Here?{" "}
              <Link className="font-bold" href="/apply">
                Click
              </Link>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
