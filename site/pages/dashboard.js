import { useState, useEffect, useContext } from "react";
import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";

const dashboard = () => {

  const [data, setData] = useState({});
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:8080/data/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          return toast.error("Error happened");
        }

        setData(data.userData);
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
      })
      .catch((err) => {
        console.error("Dashboard fetch error:", err);
        toast.error("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้");
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc]"> {/* พื้นหลัง Slate-50 ช่วยให้ Card เด่นขึ้น */}
      <UserHeader />

      <main className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">
                Dashboard Overview
            </h1>
            <p className="font-medium text-slate-500">
                Welcome back, <span className="text-indigo-600">@{data.handle || 'user'}</span>. Here's what's happening with your links.
            </p>
        </div>

        {/* Stats Grid */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <LinkBox
            lbTitle="Total Links"
            lbNumber={data.links || 0}
            lbSvg="url"
            lbTheme="red"
          />

          <LinkBox
            lbTitle="Profile Growth"
            lbNumber="30%"
            lbSvg="growth"
            lbTheme="blue"
          />

          <LinkBox
            lbTitle="Email Clicks"
            lbNumber="12"
            lbSvg="email"
            lbTheme="red"
          />

          <LinkBox
            lbTitle="IG Referrals"
            lbNumber="30%"
            lbSvg="ig"
            lbTheme="blue"
          />
        </section>

        {/* แนะนำส่วนเพิ่มเติม: แถบสถานะหรือกราฟ (ถ้ามีในอนาคต) */}
        <div className="mt-10 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <img src="/svg/growth.svg" className="w-8 h-8 opacity-70" alt="" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Your bio-link is getting noticed!</h3>
            <p className="max-w-sm mt-2 text-slate-500">
                You've had a 15% increase in traffic compared to last week. Keep updating your links to engage more followers.
            </p>
        </div>
      </main>
    </div>
  );
};

export default dashboard;