import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">My Linktree</h1>
          <h2 className="text-gray-500 text-xl mt-6">
            รวมทุกลิงก์สำคัญไว้ที่เดียว
            เพื่อให้ข้าถึงผลงานและช่องทางติดต่อได้อย่างรวดเร็ว
          </h2>
        </div>
          <form className="inline-flex items-center shadow-lg shadow-gray500/20 rounded-xl overflow-hidden">
            <span className="bg-white py-4 pl-4">
              my linktree.to/
            </span>
            <input type="text" className="py-4 bg-white" placeholder="username"/>
            <button type="submit" className="bg-blue-500 text-white py-4 px-6">
              Get Started
            </button>
          </form>
      </section>
    </main>
  );
}
