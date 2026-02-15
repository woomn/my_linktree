import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const ShareButton = () => {
    const router = useRouter();
    const copyLink = () => {
        navigator.clipboard.writeText(`http://localhost:3000/${router.query.handle}`);
        toast('Copied to clipboard')
    }
  return (
    <>
        <div className='absolute z-10 p-2 bg-indigo-200 border-2 border-indigo-400 rounded-md shadow-md cursor-pointer top-28 left-10' onClick={copyLink}>
            <img className='w-4' src='/svg/share.svg' alt='share' />
        </div>
    </>
  )
}

export default ShareButton