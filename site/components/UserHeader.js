import React, {useContext, useEffect} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserContext from '@/context/userContext';

export const UserHeader = () => {
  // const {name, role, avatar, handle, links} = data;
  const router = useRouter();
  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem("LinkTreeToken");
    router.push("/login"); // เช็กชื่อ route จริง
  }
  
  const { userData, setUserData } = useContext(UserContext);
  const { role, avatar, handle } = userData;

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:8080/data/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          return toast.error("Error happened");
        }

        // setData(data.userData);
        console.log('loggin from userHeader', data.userData);
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        // toast.success(data.message);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  return (
    <>
      <header className="flex flex-row items-center justify-between">
        <div className="flex flex-col p-8 md:flex-row">
          <Link href="/edit/links">
            <button className="inline-flex w-full px-5 py-3 mb-3 text-purple-500 border-2 border-purple-500 rounded-md md:w-auto hover:bg-purple-100">
              <img src="/svg/url.svg" className="w-6 h-6 mr-3" />
              Edit Links
            </button>
          </Link>
          <Link href="/edit/profile">
            <button className="inline-flex w-full px-5 py-3 mb-3 text-red-500 border-2 border-red-500 rounded-md md:ml-4 md:w-auto hover:bg-red-100">
              <img src="/svg/user.svg" className="w-6 h-6 mr-3" />
              Edit Profile
            </button>
          </Link>
        </div>
        <Link href={`http://localhost:3000/${handle}`}>
          <div className="flex flex-row">
            <div className="inline-flex items-center px-5 py-2 mr-5 text-right bg-gray-200 rounded-lg">
              <div className="flex flex-col flex-wrap text-xs md:text-md">
                <span className="font-bold">{handle}</span>
                <span>{role} Pack</span>
              </div>
              <div className="user.img">
                <img className="w-10 ml-5 rounded-full" src={avatar} />
              </div>
            </div>
            <img
              className="w-6 mr-5 cursor-pointer"
              src="/svg/notify.svg"
              alt=""
            />
            <img
              className="w-6 mr-5 cursor-pointer"
              src="/svg/logout.svg"
              alt=""
              onClick={handleLogout}
            />
          </div>
        </Link>
      </header>
    </>
  );
}

export default UserHeader
//finish