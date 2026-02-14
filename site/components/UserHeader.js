import React from 'react'
import { useRouter } from 'next/router';

export const UserHeader = ({data}) => {
  const {name, role, avatar, handle, links} = data;
  const router = useRouter();
  const handleLogout = ()=> {
    localStorage.removeItem('LinkTreeToken');
    router.push('/login');
  }
  return (
    <>
      <header className='flex flex-row items-center justify-between'>
        <div className="flex flex-col p-8 md:flex-row">
          <button className="inline-flex w-full px-5 py-3 mb-3 text-purple-500 border-2 border-purple-500 rounded-md md:w-auto hover:bg-purple-100">
            <img src="/svg/url.svg" className="w-6 h-6 mr-3" />
            Edit Links
          </button>
          <button className="inline-flex w-full px-5 py-3 mb-3 text-red-500 border-2 border-red-500 rounded-md md:ml-4 md:w-auto hover:bg-red-100">
            <img src="/svg/user.svg" className="w-6 h-6 mr-3" />
            Edit Profile
          </button>
        </div>
        <div className="flex flex-row">
          <div className='inline-flex items-center px-5 py-2 mr-5 text-right bg-gray-200 rounded-lg'>
            <div className="flex flex-col flex-wrap text-xs md:text-md">
              <span className='font-bold'>{handle}</span>
              <span>{role} Pack</span>
            </div>
            <div className='user.img'>
              <img className='w-10 ml-5' src={avatar} />
            </div>
          </div>
        <img className='w-6 mr-5 cursor-pointer' src='/svg/notify.svg' alt='' />
        <img className='w-6 mr-5 cursor-pointer' src='/svg/logout.svg' alt='' onClick={handleLogout}/>
        </div>
      </header>
    </>
  );
}

export default UserHeader