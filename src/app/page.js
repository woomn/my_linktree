import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Heroform from "@/components/forms/Heroform";

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
        <Heroform />
      </section>
    </main>
  );
}
