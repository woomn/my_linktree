import React,{ useState } from 'react'
import styles from '../styles/Apply.module.css';

export const Apply = () => {

  const [categoly, setCategory] = useState('');
  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  }
  return (
    <>
      <section
        className={
          styles.background + " min-h-screen flex justify-center items-center "
        }
      >
        <div className="main">
          <div className="px-4 py-8 border-2 shadow-lg rounded-2xl content">
            <h1 className="text-2xl font-bold text-center">
              Join the top 1% creators
            </h1>
            <p className="text-center">Create Linktree for your brand</p>
            <p className='py-5 font-bold text-center'>Start building your Hub</p>
            <form className="flex flex-col gap-4 mt-5 text-lg">
              <span className="flex flex-row px-3 py-2 border-2 rounded-md shadow-md focus:outline-one">
                <img className="w-6 mr-4" src="/svg/ig.svg" alt="" />
                <input className="w-full focus:outline-none" type="text" placeholder="Social Handle" />
              </span>
              <input
                className="px-3 py-2 border-2 rounded-md shadow-md focus:outline-one"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="px-3 py-2 border-2 rounded-md shadow-md focus:outline-one"
                type="password"
                placeholder="Set a password"
              />

              <h5 className='text-sm text-center'>Account Type</h5>
              <span className='flex'>
                <label className='flex flex-row mr-3'>
                  <input type='checkbox' value='Creator' checked={categoly === 'Creator'} onChange={handleCategoryChange}/>
                  <p className='pl-2'>Creator</p>
                </label> 
                <label className='flex flex-row mr-3'>
                  <input type='checkbox' value='Agency' checked={categoly === 'Agency'} onChange={handleCategoryChange}/>
                  <p className='pl-2'>Agency</p>
                </label>
                <label className='flex flex-row mr-3'>
                  <input type='checkbox' value='Brand' checked={categoly === 'Brand'} onChange={handleCategoryChange}/>
                  <p className='pl-2'>Brand</p>
                </label>
              </span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apply;