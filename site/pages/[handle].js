import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkTree from '../components/LinkTree';
import Link from 'next/link';
import SocialTree from '../components/SocialTree';
import ShareButton from '../components/ShareButton';
import { toast } from 'react-toastify';

import useSWR from 'swr';

const Handle = () => {

    const router = useRouter();
    const handle = router.query?.handle;

    const { data: apiResponse, error } = useSWR(
        handle ? `https://mylinktree-production.up.railway.app/get/${handle}` : null
    );

    const [social, setSocial] = useState({
        facebook: '', x: '', instagram: '', youtube: '', tiktok: '', github: ''
    })

    useEffect(() => {
        if (apiResponse && apiResponse.status === 'success') {
            setSocial(apiResponse.socials);
        }
    }, [apiResponse]);

    if (error) return toast.error("Failed to load profile");
    const userFound = apiResponse?.status === 'success';
    const data = apiResponse?.userData || {};
    const theme = data.theme || 'default';

    // Theme Config
    const themeStyles = {
        default: {
            bg: 'bg-[#f8fafc]',
            overlay: 'from-indigo-50/50',
            cardWrap: 'max-w-2xl',
            btn: 'bg-indigo-600 hover:bg-indigo-700 text-white border-transparent',
            footerBg: 'bg-white/80',
            textTitle: 'text-slate-800',
            textBio: 'text-slate-500'
        },
        dark: {
            bg: 'bg-[#0f172a]',
            overlay: 'from-purple-900/20',
            cardWrap: 'max-w-2xl',
            btn: 'bg-purple-600 hover:bg-purple-700 text-white border-transparent',
            footerBg: 'bg-slate-800/80',
            textTitle: 'text-white',
            textBio: 'text-slate-400'
        },
        sunset: {
            bg: 'bg-gradient-to-br from-orange-400 to-rose-500',
            overlay: 'from-white/10',
            cardWrap: 'max-w-2xl',
            btn: 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20',
            footerBg: 'bg-white/90',
            textTitle: 'text-white',
            textBio: 'text-rose-50'
        },
        ocean: {
            bg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
            overlay: 'from-white/10',
            cardWrap: 'max-w-2xl',
            btn: 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20',
            footerBg: 'bg-white/90',
            textTitle: 'text-white',
            textBio: 'text-blue-50'
        },
        forest: {
            bg: 'bg-[#064e3b]',
            overlay: 'from-emerald-900/40',
            cardWrap: 'max-w-2xl',
            btn: 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent',
            footerBg: 'bg-slate-900/80',
            textTitle: 'text-white',
            textBio: 'text-emerald-200'
        },
        galaxy: {
            bg: 'bg-[#0a0a2e] bg-[url("https://www.transparenttextures.com/patterns/stardust.png")]',
            overlay: 'from-indigo-600/20',
            cardWrap: 'max-w-2xl',
            btn: 'bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white border-transparent',
            footerBg: 'bg-indigo-950/80',
            textTitle: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-black',
            textBio: 'text-indigo-200'
        },
        cloud: {
            bg: 'bg-gradient-to-b from-blue-50 to-indigo-50',
            overlay: 'from-white/60',
            cardWrap: 'max-w-2xl',
            btn: 'bg-white hover:bg-slate-50 text-indigo-700 shadow-sm border-indigo-100',
            footerBg: 'bg-white/40',
            textTitle: 'text-indigo-900',
            textBio: 'text-indigo-400'
        },
        retro: {
            bg: 'bg-[#ff00ff] bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")]',
            overlay: 'from-cyan-400/20',
            cardWrap: 'max-w-2xl',
            btn: 'bg-[#00ffff] hover:bg-[#00eaea] text-black font-black border-2 border-black shadow-[4px_4px_0px_#000]',
            footerBg: 'bg-black/60',
            textTitle: 'text-yellow-300 [text-shadow:3px_3px_0px_#00ffff] italic uppercase',
            textBio: 'text-white font-mono bg-black/40 px-2'
        },
        luxury: {
            bg: 'bg-[#1a1a1a]',
            overlay: 'from-[#ffd700]/5',
            cardWrap: 'max-w-2xl',
            btn: 'bg-[#ffd700] hover:bg-[#e6c200] text-black font-bold uppercase tracking-widest border-transparent',
            footerBg: 'bg-black/80',
            textTitle: 'text-[#ffd700] uppercase tracking-[0.2em]',
            textBio: 'text-gray-400 italic'
        }
    }

    const currentTheme = themeStyles[theme] || themeStyles.default;

    const fontFamilies = {
        'Plus Jakarta Sans': "'Plus Jakarta Sans', sans-serif",
        'Mitr': "'Mitr', sans-serif",
        'Kanit': "'Kanit', sans-serif",
        'Itim': "'Itim', cursive",
        'Josefin Sans': "'Josefin Sans', sans-serif"
    }

    const currentFontFamily = fontFamilies[data.font] || fontFamilies['Plus Jakarta Sans'];

    if (!handle || (!apiResponse && !error)) {
        return <div className='min-h-screen flex items-center justify-center font-bold text-slate-400 animate-pulse'>Loading...</div>
    }

    if (error) return toast.error("Failed to load profile");

    if (!userFound) {
        return (
            <div className={`flex items-center justify-center min-h-screen px-6 ${themeStyles.default.bg}`}>
                <div className='max-w-md w-full text-center p-10 bg-white rounded-[2.5rem] shadow-xl shadow-indigo-100 border border-slate-100'>
                    <div className='mb-6 text-6xl'>🥹</div>
                    <h1 className='mb-4 text-3xl font-black tracking-tight text-slate-900'>User Not found</h1>
                    <p className='mb-8 font-medium leading-relaxed text-slate-500'>
                        The link you followed might be broken, or the user may have changed their handle.
                    </p>

                    <div className='flex flex-col gap-3'>
                        <Link className='inline-flex items-center justify-center px-6 py-3.5 text-white font-bold bg-indigo-600 hover:bg-indigo-700 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-200' href='/apply'>
                            Create your own LinkTree
                        </Link>
                        <Link className='text-sm font-bold transition-colors text-slate-400 hover:text-indigo-600' href='/'>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`min-h-screen relative pb-20 transition-all duration-700 bg-cover bg-center bg-fixed ${currentTheme.bg}`} style={{ fontFamily: currentFontFamily }}>
            {/* พื้นหลังแบบฟุ้งเบาๆ ให้หน้า Profile ดูมีมิติ */}
            <div className={`absolute top-0 left-0 w-full h-[550px] bg-gradient-to-b ${currentTheme.overlay} to-transparent -z-10`}></div>

            <div className={`${currentTheme.cardWrap} px-4 pt-10 mx-auto`}>
                {/* ส่วนของปุ่ม Share ที่เราแต่งไว้จะลอยเด่น */}
                <div className='flex justify-end mb-4'>
                    <ShareButton />
                </div>

                {/* Wrapper สำหรับ LinkTree และ SocialTree เพื่อคุมระเบียบ */}
                <div className='flex flex-col items-center'>
                    <LinkTree data={data} theme={currentTheme} />

                    <div className='w-full mt-6'>
                        <SocialTree social={social} handle={data.handle} theme={currentTheme} />
                    </div>
                </div>

                {/* Footer เล็กๆ เท่ๆ */}
                <div className='mt-16 text-center'>
                    <Link href="/" className={`inline-flex items-center gap-2 px-4 py-2 transition-all border rounded-full shadow-sm ${currentTheme.footerBg} backdrop-blur-sm border-white/10 hover:shadow-md group`}>
                        <span className={`text-xs font-bold transition-colors text-slate-400 group-hover:text-indigo-600`}>Made with LinkTree Indigo</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Handle