import UserHeader from '@/components/UserHeader';
import React, { useState, useEffect, useContext } from 'react'
import { toast } from "react-toastify";

export const links = () => {
  const [links, setLinks] = useState([{url: '', title: ''}]);
  const [title, setTitle] = useState('');

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    const linkToUpdate = { ...updatedLinks[index], [field]: value};
    updatedLinks[index] = linkToUpdate;
    setLinks(updatedLinks);
  }
  
  const handleAddLink = () => {
    setLinks([...links, {url: '', title: ''}]);
  }

  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  }

  const saveLinks = (e) => {
    e.preventDefault();
    const linkArray = Object.values(links);
    const titlesArray = Object.values(title);
    const linksData = linkArray.map((link, index) => ({
      link,
      title: titlesArray[index]
    }))

    fetch(`http://localhost:8080/save/links`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        links: linksData
      })
    }).then(res => res.json()).then(data => {
      if(data.status === 'error') return toast.error(data.error);
      toast.success('Links saved successfully');
    }).catch(err => { toast.error(err.message)});
  }

      useEffect(() => {
          if(!localStorage.getItem('LinkTreeToken')) return router.push('/login');
          fetch(`http://localhost:8080/load/links`, {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify({
                  tokenMail: localStorage.getItem('LinkTreeToken')
              })
          }).then(res => res.json())
          .then(data => {
              if(data.status === 'error') return toast.error(data.error);
              setLinks(data.links);
          })
      }, [])
  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section>
            <h1 className='text-xl font-bold text-center text-gray-600'>Add or Customize your Links</h1>
            <div>
              <form onSubmit={saveLinks}>
                {links.map((link, index) => (
                  <div className='flex flex-row my-2 justify-evenly' key={index}>
                    <label>
                      URL: 
                      <input className='p-1 px-2 ml-2 border border-gray-200 rounded-md shadow-md outline-none' type='text' value={link.url} onChange={e => handleLinkChange(index, 'url', e.target.value)} />
                    </label>
                    <label>
                      Title:
                      <input className='p-1 px-2 ml-2 border border-gray-200 rounded-md shadow-md outline-none' type='text' value={link.title} onChange={e => handleLinkChange(index, 'title', e.target.value)} />
                    </label>
                    <button className='px-4 py-2 ml-3 text-white bg-indigo-500 rounded-md shadow-sm' type='button' onClick={() => {handleRemoveLink(index)}}>
                      Remove Link
                    </button>
                  </div>
                ))}
                <div className='flex flex-row gap-5 my-1 buttons'>
                  <button className='w-full px-4 py-2 text-white bg-indigo-500 rounded-md shadow-sm' type='button' onClick={handleAddLink}>
                    Add link
                  </button>
                  <button className='w-full px-4 py-2 text-white bg-green-500 rounded-md shadow-sm' type='submit'>
                    Save
                  </button>
                </div>
              </form>
            </div>

          </section>
        </main>
      </div>
    </>
  )
}

export default links;