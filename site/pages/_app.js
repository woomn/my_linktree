import "../styles/globals.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from "../components/Navbar";
import NProgress from 'nprogress';
import '../public/nprogress.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import UserContext from "@/context/userContext";
import Head from "next/head";
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: '',
    role: '',
    bio: '',
    avatar: '',
    handle: ''
  })

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        {/* เพิ่มฟอนต์โมเดิร์น (Plus Jakarta Sans) เข้าไปทั้งโปรเจกต์ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Mitr:wght@400;500;600&family=Kanit:wght@400;500;600;700&family=Itim&family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />

        {/* ปรับแต่งสี NProgress ให้เป็นสี Indigo โดยตรงผ่าน CSS Injection */}
        <style>{`
        #nprogress .bar {
          background: #6366f1 !important;
          height: 3px !important;
        }
        #nprogress .spinner-icon {
          border-top-color: #6366f1 !important;
          border-left-color: #6366f1 !important;
        }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #f8fafc; /* Slate-50: พื้นหลังเทาจางๆ ช่วยให้การ์ดสีขาวดูเด่น */
        }
      `}</style>
      </Head>

      <NavBar />

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6`} />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WYTYXQXVK6', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <UserContext.Provider value={{ userData, setUserData }}>
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then(res => res.json()),
            revalidateOnFocus: false,
            revalidateIfStale: true,
          }}
        >
          <main className="min-h-screen selection:bg-indigo-100 selection:text-indigo-700">
            <Component {...pageProps} />
          </main>
        </SWRConfig>
      </UserContext.Provider>

      {/* ปรับแต่ง Toast ให้ดูพรีเมียมขึ้น */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ borderRadius: '16px', border: '1px solid #f1f5f9' }}
      />

      {isLoading && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <div className="nprogress-custom-parent">
            <div className="nprogress-custom-bar bg-indigo-600 shadow-[0_0_10px_#6366f1]" />
          </div>
        </div>
      )}
    </>
  )
}