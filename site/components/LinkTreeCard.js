import React from 'react'
import Link from 'next/link'

export const LinkTreeCard = ({title, url, image}) => {
  return (
    <>
        <span className='w-full'>
            <Link className='flex flex-row items-center p-2 mx-2 mb-3 text-white duration-500 bg-indigo-400 rounded-xl hover:bg-indigo-300 hover:translate-x-1 hover:translate-y-1 translate-all' href={url}>
                <img className='p-1 mr-5 bg-white rounded-full w-11' src={image} alt='' />
                <h4 className='md:text-lg'>{title}</h4>
            </Link>
        </span>
    </>
  )
}

export default LinkTreeCard;