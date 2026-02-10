import React from 'react'

const features = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-screen'>
                <h1 className='text-lg font-bold'>Features of this Template:</h1>
                <ul className='p-4 mt-5 border rounded-lg shadow-xl'>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Tailwind CSS</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Google analytics</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Page loader animation</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Dynamic Head component</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Responsive Navbar</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Custom 404 Page</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Notification toast</li>
                    <li className='transition-all duration-300 cursor-pointer hover:text-indigo-500 hover:translate-x-2'>Footer</li>
                </ul>
            </div>
        </>
    )
}

export default features