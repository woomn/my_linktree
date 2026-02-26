import React from 'react'
import Link from 'next/link'

export const LinkTreeCard = ({ title, url, image, linkId, handle, theme }) => {
  const trackClick = () => {
    if (!handle || !linkId) return;
    fetch(`https://mylinktree-production.up.railway.app/api/track/link/${handle}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ linkId })
    }).catch(err => console.log(err));
  };

  const btnClass = theme?.btn || 'bg-indigo-500 hover:bg-indigo-400 text-white border-transparent';

  return (
    <>
      <span className='block w-full max-w-2xl px-4 mx-auto'>
        <Link
          className={`flex flex-row items-center justify-center p-4 mb-4 transition-all duration-300 border shadow-md rounded-2xl hover:shadow-xl active:scale-95 group ${btnClass}`}
          target='_blank'
          href={url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`}
          onClick={trackClick}
        >
          {/* ส่วนของข้อความ */}
          <div className="text-center">
            <h4 className='text-lg font-bold tracking-wide transition-all duration-300 md:text-xl'>
              {title}
            </h4>
          </div>
        </Link>
      </span>
    </>
  )
}

export default LinkTreeCard;