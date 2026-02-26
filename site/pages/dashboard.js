import { useState, useEffect, useContext } from "react";
import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dashboard = () => {

  const [data, setData] = useState({});
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      window.location.href = "/login";
      return;
    }

    fetch("https://mylinktree-production.up.railway.app/data/dashboard", {
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

        {/* Core Stats Grid */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-10">
          <LinkBox
            lbTitle="Total Links"
            lbNumber={data.links?.length || 0}
            lbSvg="url"
          />
          <LinkBox
            lbTitle="Profile Views"
            lbNumber={data.profileViews || 0}
            lbSvg="growth"
          />
        </section>

        {/* Social Clicks Stats */}
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-800">Social Profile Clicks</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <LinkBox lbTitle="Email" lbNumber={data.emailClicks || 0} lbSvg="email" />
            <LinkBox lbTitle="Instagram" lbNumber={data.igClicks || 0} lbSvg="ig" />
            <LinkBox lbTitle="Facebook" lbNumber={data.facebookClicks || 0} lbSvg="facebook" />
            <LinkBox lbTitle="X (Twitter)" lbNumber={data.xClicks || 0} lbSvg="x" />
            <LinkBox lbTitle="YouTube" lbNumber={data.youtubeClicks || 0} lbSvg="youtube" />
            <LinkBox lbTitle="TikTok" lbNumber={data.tiktokClicks || 0} lbSvg="tiktok" />
            <LinkBox lbTitle="GitHub" lbNumber={data.githubClicks || 0} lbSvg="github" />
          </div>
        </section>

        {/* Link Clicks Details */}
        <section className="mt-10 mb-10">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-800">Your Links Performance</h2>
          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-sm p-6">
            {data.links && data.links.length > 0 ? (
              <div className="flex flex-col gap-4">
                {data.links.map((link, index) => (
                  <div key={index} className="flex items-center justify-between p-4 transition-all border rounded-2xl bg-slate-50 border-slate-100 hover:border-indigo-200 hover:shadow-sm">
                    <div className="flex items-center gap-4">
                      <img src={link.icon || '/svg/url.svg'} alt={link.title} className="w-10 h-10 rounded-full bg-white p-1 ring-2 ring-slate-100 object-contain" />
                      <div>
                        <h4 className="font-bold text-slate-800">{link.title}</h4>
                        <p className="text-xs text-slate-400 max-w-xs truncate">{link.url}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-indigo-600">{link.clicks || 0}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clicks</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-8 text-slate-500 font-medium">No links added yet.</div>
            )}
          </div>
        </section>

        {/* Daily Views Chart */}
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-800">Profile Views Over Time</h2>
          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-sm p-6 sm:p-8 h-[400px]">
            {data.dailyViews && data.dailyViews.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.dailyViews}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} padding={{ left: 20, right: 20 }} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    labelStyle={{ fontWeight: 'bold', color: '#1e293b' }}
                  />
                  <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={4} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6, fill: '#4f46e5' }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500 font-medium">Not enough data to show chart. (Visit your profile to generate data)</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default dashboard;