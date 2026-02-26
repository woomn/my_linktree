import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import UserContext from '@/context/userContext';
import UserHeader from '@/components/UserHeader';
import { toast } from 'react-toastify';

export const profile = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);
    const [social, setSocial] = useState({
        facebook: '',
        x: '',
        instagram: '',
        youtube: '',
        tiktok: '',
        github: ''
    })
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/128/847/847969.png');
    const [theme, setTheme] = useState('default');

    const themes = [
        { id: 'default', name: '✨ Indigo Breeze', colors: 'bg-[#f8fafc] text-indigo-600 border-indigo-500' },
        { id: 'dark', name: '🌙 Midnight', colors: 'bg-[#0f172a] text-purple-400 border-purple-500' },
        { id: 'sunset', name: '🌅 Sunset Glow', colors: 'bg-gradient-to-br from-orange-400 to-rose-500 text-white border-white' },
        { id: 'ocean', name: '🌊 Deep Ocean', colors: 'bg-gradient-to-br from-blue-400 to-cyan-500 text-white border-white' },
        { id: 'forest', name: '🌿 Jungle Forest', colors: 'bg-[#064e3b] text-emerald-400 border-emerald-500' },
        { id: 'galaxy', name: '🌌 Galaxy', colors: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-pink-300 border-pink-400' },
        { id: 'cloud', name: '☁️ Soft Cloud', colors: 'bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-700 border-white' },
        { id: 'retro', name: '🕹️ Retro 80s', colors: 'bg-[#ff00ff] text-yellow-300 border-yellow-200' },
        { id: 'luxury', name: '💎 Gold Luxury', colors: 'bg-[#1a1a1a] text-[#ffd700] border-[#ffd700]' }
    ]

    const handleSocial = (e) => {
        setSocial({
            ...social,
            [e.target.id]: e.target.value
        })
    }
    useEffect(() => {
        if (userData) {
            setName(userData.name);
            setBio(userData.bio);
            setAvatar(userData.avatar);
            setTheme(userData.theme || 'default');
        }
    }, [userData]);

    const saveProfile = e => {
        e.preventDefault();
        fetch(`https://mylinktree-production.up.railway.app/save/profile`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken'),
                name: name,
                bio: bio,
                avatar: avatar,
                theme: theme
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') return toast.error(data.error)
                toast.success('Profile saved successfully')
            })
    }
    const saveSocials = e => {
        e.preventDefault();
        fetch(`https://mylinktree-production.up.railway.app/save/socials`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken'),
                socials: social
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') return toast.error(data.error)
                toast.success('Socials saved successfully')
            })
    }

    useEffect(() => {
        if (!localStorage.getItem('LinkTreeToken')) return router.push('/login');
        fetch(`https://mylinktree-production.up.railway.app/load/socials`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken')
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') return toast.error(data.error);
                setSocial(data.socials)
            });
    }, []);

    return (
        <>
            <div className="min-h-screen bg-slate-50 pb-20">
                <UserHeader />
                <main className="max-w-4xl mx-auto px-4 pt-10">
                    <section className="grid md:grid-cols-2 gap-10">
                        {/* Left Side: Profile & Theme */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                            <h4 className='mb-8 text-xl font-bold text-slate-800 flex items-center gap-2'>
                                <span className="bg-indigo-100 p-2 rounded-lg"><img className="w-5" src="/svg/user.svg" /></span>
                                Profile Info
                            </h4>
                            <form onSubmit={saveProfile} className='flex flex-col gap-4'>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">Display Name</label>
                                    <span className="flex flex-row items-center px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-50">
                                        <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-transparent focus:outline-none font-medium" type="text" placeholder="Set a Name" required />
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">Bio</label>
                                    <span className="flex flex-row items-center px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-50">
                                        <input value={bio} onChange={e => setBio(e.target.value)} className="w-full bg-transparent focus:outline-none font-medium" type="text" placeholder="Enter a bio" required />
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">Profile Picture</label>
                                    <div className="flex items-center gap-4 px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <input
                                            className="w-full text-xs focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setAvatar(reader.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                        {avatar && <img className='object-cover w-12 h-12 rounded-2xl border-2 border-white shadow-sm' src={avatar} alt="Avatar" />}
                                    </div>
                                </div>

                                {/* Theme Selection */}
                                <div className="mt-4">
                                    <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">Select Theme</label>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                                        {themes.map((t) => (
                                            <div
                                                key={t.id}
                                                onClick={() => setTheme(t.id)}
                                                className={`cursor-pointer group relative overflow-hidden p-3 rounded-2xl border-2 transition-all duration-300 ${theme === t.id ? 'border-indigo-600 shadow-md ring-2 ring-indigo-50' : 'border-slate-100 hover:border-indigo-200'}`}
                                            >
                                                <div className={`h-12 w-full rounded-lg mb-2 ${t.colors}`}></div>
                                                <span className={`text-[10px] font-bold block text-center uppercase tracking-tighter ${theme === t.id ? 'text-indigo-600' : 'text-slate-500'}`}>
                                                    {t.name}
                                                </span>
                                                {theme === t.id && (
                                                    <div className="absolute top-1 right-1 bg-indigo-600 rounded-full p-0.5 shadow-sm">
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className='w-full mt-6 px-6 py-4 text-white font-bold bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]' type='submit'>
                                    Save Profile & Theme
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Socials */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 h-fit">
                            <h4 className='mb-8 text-xl font-bold text-slate-800 flex items-center gap-2'>
                                <span className="bg-emerald-100 p-2 rounded-lg"><img className="w-5" src="/svg/ig.svg" /></span>
                                Social Links
                            </h4>
                            <form onSubmit={saveSocials} className='flex flex-col gap-4'>
                                {[
                                    { id: 'facebook', icon: '/svg/facebook.svg', placeholder: 'Facebook URL' },
                                    { id: 'x', icon: '/svg/x.svg', placeholder: 'X (Twitter) URL' },
                                    { id: 'instagram', icon: '/svg/ig.svg', placeholder: 'Instagram URL' },
                                    { id: 'youtube', icon: '/svg/youtube.svg', placeholder: 'YouTube URL' },
                                    { id: 'tiktok', icon: '/svg/tiktok.svg', placeholder: 'TikTok URL' },
                                    { id: 'github', icon: '/svg/github.svg', placeholder: 'GitHub URL' },
                                ].map((s) => (
                                    <span key={s.id} className="flex flex-row items-center px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-50">
                                        <img className="w-5 mr-3 opacity-60" src={s.icon} alt={s.id} />
                                        <input id={s.id} value={social[s.id] || ''} onChange={handleSocial} className="w-full bg-transparent focus:outline-none text-sm font-medium" type="text" placeholder={s.placeholder} />
                                    </span>
                                ))}
                                <button className='w-full mt-4 px-6 py-4 text-white font-bold bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all active:scale-[0.98]' type='submit'>
                                    Save Social Links
                                </button>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default profile;