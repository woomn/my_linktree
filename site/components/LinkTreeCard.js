import React from 'react'
import Link from 'next/link'

export const LinkTreeCard = ({ title, url, image, linkId, handle }) => {
  const trackClick = () => {
    if (!handle || !linkId) return;
    fetch(`http://localhost:8080/api/track/link/${handle}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ linkId })
    }).catch(err => console.log(err));
  };
  return (
    <>
      <span className='block w-full max-w-2xl px-4 mx-auto'>
        <Link
          className='flex flex-row items-center justify-center p-3 mb-4 text-white transition-all duration-300 bg-indigo-500 border shadow-md rounded-2xl hover:shadow-xl hover:bg-indigo-400 active:scale-95 group border-indigo-400/20'
          target='_blank'
          href={url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`}
          onClick={trackClick}
        >
          {/* ส่วนของข้อความ */}
          <div className="text-center">
            <h4 className='text-lg font-semibold tracking-wide transition-all duration-300 md:text-xl'>
              {title}
            </h4>
          </div>
        </Link>
      </span>
    </>
  )
}

export default LinkTreeCard;