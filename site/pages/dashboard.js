import React, {use, useEffect} from 'react'

export const dashboard = () => {

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) return window.location.href = "/login";
  }, []);

  return (
    <>
      <section className='flex justify-center main'>
        <h1 className="text-white bg-gray-700 rounded-md">Dashboard</h1>
      </section>
    </>
  );
}

export default dashboard