import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const ShareButton = () => {
    const router = useRouter();
    const copyLink = () => {
        navigator.clipboard.writeText(`http://localhost:3000/${router.query.handle}`);
        // ตกแต่ง Toast เล็กน้อยให้เข้ากับธีม
        toast.success('Link copied to clipboard!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    }
  return (
    <>
        <div 
            className='fixed z-30 flex items-center justify-center w-12 h-12 transition-all duration-300 bg-white border border-indigo-100 rounded-full shadow-lg cursor-pointer top-6 right-6 hover:bg-indigo-600 group active:scale-90' 
            onClick={copyLink}
            title="Share Profile"
        >
            {/* ปรับสี Icon ให้เปลี่ยนตาม Hover State */}
            <img 
                className='w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:invert' 
                src='/svg/share.svg' 
                alt='share' 
            />
            
            {/* Tooltip เล็กๆ แสดงตอน Hover (Optional) */}
            <span className="absolute p-2 text-xs font-medium text-white transition-all scale-0 bg-gray-800 rounded right-14 group-hover:scale-100">
                Share
            </span>
        </div>
    </>
  )
}

export default ShareButton