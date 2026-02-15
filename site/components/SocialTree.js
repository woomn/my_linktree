import Link from 'next/link';
import React from 'react'

const SocialTree = ({social}) => {
    const {
        facebook,
        x,
        instagram,
        youtube,
        tiktok,
        github
    } = social;
  return (
    <>
      <div className="flex flex-row justify-center my-4 social">
        <Link className='p-2 mx-1 transition-all duration-500 bg-white border rounded-full shadow hover:bg-zinc-100 hover:scale-110 border-gray-70' target="_blank" href={`https://facebook.com/${facebook}`}>
          <img className='w-6' src="/svg/facebook.svg" />
        </Link>
        <Link className='p-2 mx-1 transition-all duration-500 bg-white border rounded-full shadow hover:bg-zinc-100 hover:scale-110 border-gray-70' target="_blank" href={`https://instagram.com/${instagram}`}>
          <img className='w-6' src="/svg/ig.svg" />
        </Link>
        <Link className='p-2 mx-1 transition-all duration-500 bg-white border rounded-full shadow hover:bg-zinc-100 hover:scale-110 border-gray-70' target="_blank" href={`https://x.com/${x}`}>
          <img className='w-6' src="/svg/x.svg" />
        </Link>
        <Link className='p-2 mx-1 transition-all duration-500 bg-white border rounded-full shadow hover:bg-zinc-100 hover:scale-110 border-gray-70' target="_blank" href={`https://youtube.com/${youtube}`}>
          <img className='w-6' src="/svg/youtube.svg" />
        </Link>
        <Link className='p-2 mx-1 transition-all duration-500 bg-white border rounded-full shadow hover:bg-zinc-100 hover:scale-110 border-gray-70' target="_blank" href={`https://tiktok.com/${tiktok}`}>
          <img className='w-6' src="/svg/tiktok.svg" />
        </Link>
        <Link className='p-2 mx-1 transition-all duration-500 bg-white border rounded-full shadow hover:bg-zinc-100 hover:scale-110 border-gray-70' target="_blank" href={`https://github.com/${github}`}>
          <img className='w-6' src="/svg/github.svg" />
        </Link>
      </div>
    </>
  );
}

export default SocialTree