import Link from 'next/link';
import React from 'react';

const SocialTree = ({ social, handle }) => {
    const { facebook, x, instagram, youtube, tiktok, github, email } = social || {};

    const formatUrl = (platform, value) => {
        if (!value) return '';
        if (value.startsWith('http://') || value.startsWith('https://')) return value;
        if (value.startsWith('www.')) return `https://${value}`;
        return `https://${platform}.com/${value}`;
    };

    const trackClick = (type) => {
        if (!handle) return;
        fetch(`http://localhost:8080/api/track/${handle}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type })
        }).catch(err => console.log(err));
    };

    const iconWrapperClass = "group relative flex flex-col items-center justify-center transition-all duration-300";

    // สไตล์ของวงกลมไอคอน
    const circleClass = "flex items-center justify-center w-12 h-12 bg-white border border-slate-100 rounded-full hover:shadow-md hover:border-slate-200 hover:-translate-y-1 active:scale-95 transition-all duration-300";

    // ไอคอนให้เป็นขาวดำแต่ชัดเจน (ลบ grayscale ทิ้งเพื่อให้สีเดิม หรือถ้าต้องการดำล้วนๆ อาจใช้ CSS filter อื่น แต่ SVG ปกติจะเป็นสีดำอยู่แล้ว)
    const iconSizeClass = "w-5 h-5 object-contain transition-all duration-300";

    // สไตล์ของชื่อไอคอน (Label)
    const labelClass = "absolute -bottom-6 scale-0 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition-all duration-300 text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap pointer-events-none";

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 my-10 social-container">

            {/* Facebook */}
            <Link className={iconWrapperClass} target="_blank" href={formatUrl('facebook', facebook)} onClick={() => trackClick('facebook')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/facebook.svg" alt="facebook" />
                </div>
                <span className={labelClass}>Facebook</span>
            </Link>

            {/* X */}
            <Link className={iconWrapperClass} target="_blank" href={formatUrl('x', x)} onClick={() => trackClick('x')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/x.svg" alt="x" />
                </div>
                <span className={labelClass}>X</span>
            </Link>

            {/* Instagram */}
            <Link className={iconWrapperClass} target="_blank" href={formatUrl('instagram', instagram)} onClick={() => trackClick('ig')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/ig.svg" alt="instagram" />
                </div>
                <span className={labelClass}>Instagram</span>
            </Link>

            {/* YouTube */}
            <Link className={iconWrapperClass} target="_blank" href={formatUrl('youtube', youtube)} onClick={() => trackClick('youtube')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/youtube.svg" alt="youtube" />
                </div>
                <span className={labelClass}>YouTube</span>
            </Link>

            {/* TikTok */}
            <Link className={iconWrapperClass} target="_blank" href={formatUrl('tiktok', tiktok)} onClick={() => trackClick('tiktok')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/tiktok.svg" alt="tiktok" />
                </div>
                <span className={labelClass}>TikTok</span>
            </Link>

            {/* GitHub */}
            <Link className={iconWrapperClass} target="_blank" href={formatUrl('github', github)} onClick={() => trackClick('github')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/github.svg" alt="github" />
                </div>
                <span className={labelClass}>GitHub</span>
            </Link>

            {/* Email */}
            <Link className={iconWrapperClass} target="_blank" href={`mailto:${email}`} onClick={() => trackClick('email')}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/email.svg" alt="email" />
                </div>
                <span className={labelClass}>Email</span>
            </Link>

        </div>
    );
};

export default SocialTree;