import Link from 'next/link';
import React from 'react';

const SocialTree = ({ social }) => {
    const { facebook, x, instagram, youtube, tiktok, github } = social || {};

    const iconWrapperClass = "group relative flex flex-col items-center justify-center transition-all duration-300";
    
    // สไตล์ของวงกลมไอคอน
    const circleClass = "flex items-center justify-center p-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-indigo-200 hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300";
    
    const iconSizeClass = "w-6 h-6 object-contain grayscale-[0.5] group-hover:grayscale-0 transition-all duration-300";
    
    // สไตล์ของชื่อไอคอน (Label) - ใช้ absolute เพื่อไม่ให้ดันหน้าจอขยับ
    const labelClass = "absolute -bottom-6 scale-0 group-hover:scale-100 group-hover:opacity-100 opacity-0 transition-all duration-300 text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap pointer-events-none";

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 my-10 social-container">
            
            {/* Facebook */}
            <Link className={iconWrapperClass} target="_blank" href={`https://facebook.com/${facebook}`}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/facebook.svg" alt="facebook" />
                </div>
                <span className={labelClass}>Facebook</span>
            </Link>

            {/* X */}
            <Link className={iconWrapperClass} target="_blank" href={`https://x.com/${x}`}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/x.svg" alt="x" />
                </div>
                <span className={labelClass}>X</span>
            </Link>

            {/* Instagram */}
            <Link className={iconWrapperClass} target="_blank" href={`https://instagram.com/${instagram}`}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/ig.svg" alt="instagram" />
                </div>
                <span className={labelClass}>Instagram</span>
            </Link>

            {/* YouTube */}
            <Link className={iconWrapperClass} target="_blank" href={`https://youtube.com/${youtube}`}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/youtube.svg" alt="youtube" />
                </div>
                <span className={labelClass}>YouTube</span>
            </Link>

            {/* TikTok */}
            <Link className={iconWrapperClass} target="_blank" href={`https://tiktok.com/${tiktok}`}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/tiktok.svg" alt="tiktok" />
                </div>
                <span className={labelClass}>TikTok</span>
            </Link>

            {/* GitHub */}
            <Link className={iconWrapperClass} target="_blank" href={`https://github.com/${github}`}>
                <div className={circleClass}>
                    <img className={iconSizeClass} src="/svg/github.svg" alt="github" />
                </div>
                <span className={labelClass}>GitHub</span>
            </Link>

        </div>
    );
};

export default SocialTree;