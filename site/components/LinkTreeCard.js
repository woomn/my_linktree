import React from 'react'
import Link from 'next/link'

export const LinkTreeCard = ({title, url, image}) => {
  return (
    <>
        <span className='block w-full max-w-2xl px-4 mx-auto'>
            <Link 
              className='flex flex-row items-center p-3 mb-4 text-white transition-all duration-300 bg-indigo-500 border shadow-md rounded-2xl hover:shadow-xl hover:bg-indigo-400 active:scale-95 group border-indigo-400/20' 
              target='_blank' 
              href={`https://${url}`}
            >
                {/* ส่วนของรูปภาพ/ไอคอน พร้อมวงแหวนสีขาวจางๆ */}
                <div className="relative flex-shrink-0 leading-none">
                  <img 
                    className='object-cover w-12 h-12 p-1 transition-transform duration-500 bg-white rounded-full ring-4 ring-white/10 group-hover:rotate-12' 
                    src={image} 
                    alt={title} 
                  />
                </div>

                {/* ส่วนของข้อความ */}
                <div className="flex-grow ml-4">
                  <h4 className='text-lg font-semibold tracking-wide transition-all duration-300 md:text-xl group-hover:translate-x-1'>
                    {title}
                  </h4>
                </div>

                {/* เพิ่มลูกศรเล็กๆ ด้านขวาเพื่อให้ดูเป็นปุ่มนำทาง (Optional) */}
                <div className="mr-2 transition-all duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="out-14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
            </Link>
        </span>
    </>
  )
}

export default LinkTreeCard;