import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='fixed -translate-x-1/2 bottom-5 left-1/2'>
      <Link className='flex flex-row items-center' target='_blank' href='/'>
        <img className='w-10 h-10 transition-all hover:rotate-45 duration-400' src='/svg/logo.svg'></img>
        <h5 className='pl-1 font-bold text-indigo-400 transition-all hover:text-indigo-300 duration-400'>Try LinkTree</h5>
      </Link>
    </footer>
  )
}

export default Footer