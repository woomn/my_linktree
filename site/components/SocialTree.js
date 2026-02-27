import Link from 'next/link';
import React from 'react';

const SocialTree = ({ social, handle, theme }) => {
    const { facebook, x, instagram, youtube, tiktok, github, email } = social || {};

    const formatUrl = (platform, value) => {
        if (!value) return '';
        if (value.startsWith('http://') || value.startsWith('https://')) return value;
        if (value.startsWith('www.')) return `https://${value}`;
        return `https://${platform}.com/${value}`;
    };

    const trackClick = (type) => {
        if (!handle) return;
        fetch(`https://mylinktree-production.up.railway.app/api/track/${handle}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type })
        }).catch(err => console.log(err));
    };

    const iconWrapperClass = "group relative flex flex-col items-center justify-center transition-all duration-300";

    // สไตล์ของวงกลมไอคอน
    const circleClass = "flex items-center justify-center w-12 h-12 bg-white border border-slate-100 rounded-full hover:shadow-md hover:border-slate-200 hover:-translate-y-1 active:scale-95 transition-all duration-300";

    // ไอคอนให้เป็นขาวดำแต่ชัดเจน
    const iconSizeClass = "w-5 h-5 object-contain transition-all duration-300";

    // สไตล์ของชื่อไอคอน (Label)
    const labelClass = `absolute -bottom-6 scale-0 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition-all duration-300 text-[10px] font-bold ${theme?.textTitle || 'text-gray-500'} uppercase tracking-widest whitespace-nowrap pointer-events-none`;

    const socialItems = [
        { key: 'facebook', value: facebook, icon: '/svg/facebook.svg', label: 'Facebook', type: 'facebook' },
        { key: 'x', value: x, icon: '/svg/x.svg', label: 'X', type: 'x' },
        { key: 'instagram', value: instagram, icon: '/svg/ig.svg', label: 'Instagram', type: 'ig' },
        { key: 'youtube', value: youtube, icon: '/svg/youtube.svg', label: 'YouTube', type: 'youtube' },
        { key: 'tiktok', value: tiktok, icon: '/svg/tiktok.svg', label: 'TikTok', type: 'tiktok' },
        { key: 'github', value: github, icon: '/svg/github.svg', label: 'GitHub', type: 'github' },
        { key: 'email', value: email, icon: '/svg/email.svg', label: 'Email', type: 'email' }
    ].filter(item => item.value && item.value.trim());

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 my-10 social-container">
            {socialItems.map((item) => {
                const href = item.key === 'email'
                    ? `mailto:${item.value.trim()}`
                    : formatUrl(item.key, item.value.trim());

                return (
                    <Link key={item.key} className={iconWrapperClass} target="_blank" href={href} onClick={() => trackClick(item.type)}>
                        <div className={circleClass}>
                            <img className={iconSizeClass} src={item.icon} alt={item.key} />
                        </div>
                        <span className={labelClass}>{item.label}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default SocialTree;
