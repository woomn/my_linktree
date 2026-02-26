import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import UserContext from '@/context/userContext';
import UserHeader from '@/components/UserHeader';
import { toast } from 'react-toastify';

export const profile = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);
    const [social, setSocial] = useState({
        facebook: '',
        x: '',
        instagram: '',
        youtube: '',
        tiktok: '',
        github: ''
    })
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/128/847/847969.png');

    const handleSocial = (e) => {
        setSocial({
            ...social,
            [e.target.id]: e.target.value
        })
    }
    useEffect(() => {
        if (userData) {
            setName(userData.name);
            setBio(userData.bio);
            setAvatar(userData.avatar);
        }
    }, [userData]);
    const saveProfile = e => {
        e.preventDefault();
        fetch(`http://localhost:8080/save/profile`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken'),
                name: name,
                bio: bio,
                avatar: avatar
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') return toast.error(data.error)
                toast.success('Profile saved successfully')
            })
    }
    const saveSocials = e => {
        e.preventDefault();
        fetch(`http://localhost:8080/save/socials`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken'),
                socials: social
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') return toast.error(data.error)
                toast.success('Socials saved successfully')
            })
    }

    useEffect(() => {
        if (!localStorage.getItem('LinkTreeToken')) return router.push('/login');
        fetch(`http://localhost:8080/load/socials`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken')
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'error') return toast.error(data.error);
                setSocial(data.socials)
            });
    }, []);

    return (
        <>
            <div>
                <UserHeader />
                <main>
                    <section>
                        <div>
                            <h4 className='mb-5 font-bold text-center'>Edit profile</h4>
                            <div>
                                <form onSubmit={saveProfile} className='flex flex-col items-center justify-center'>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/profile.svg" alt="Profile Icon" />
                                        <input value={name} onChange={e => setName(e.target.value)} className="w-full focus:outline-none" type="text" placeholder="Set a Name" required />
                                    </span>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/text.svg" alt="Profile Icon" />
                                        <input value={bio} onChange={e => setBio(e.target.value)} className="w-full focus:outline-none" type="text" placeholder="Enter a bio" required />
                                    </span>
                                    <span className="flex flex-row items-center w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/user.svg" alt="Profile Icon" />
                                        <input
                                            className="w-full text-sm focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setAvatar(reader.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                        {avatar && <img className='object-cover w-10 h-10 ml-4 border p-0.5 rounded-full' src={avatar} alt="Avatar" />}
                                    </span>
                                    <input className='w-32 px-4 py-2 text-white bg-green-500 border-green-800 rounded-md shadow-md cursor-pointer' type='submit' value='save profile' />
                                </form>
                            </div>
                        </div>
                        <div className='mt-14'>
                            <h4 className='mb-5 font-bold text-center'>Edit Socials</h4>
                            <div>
                                <form onSubmit={saveSocials} className='flex flex-col items-center justify-center'>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/facebook.svg" alt="Profile Icon" />
                                        <input id='facebook' value={social.facebook} onChange={handleSocial} className="w-full focus:outline-none" type="text" placeholder="Enter Facebook Link" required />
                                    </span>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/x.svg" alt="Profile Icon" />
                                        <input id='x' value={social.x} onChange={handleSocial} className="w-full focus:outline-none" type="text" placeholder="Enter X link" required />
                                    </span>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/ig.svg" alt="Profile Icon" />
                                        <input id='instagram' value={social.instagram} onChange={handleSocial} className="w-full focus:outline-none" type="text" placeholder="Enter Instagram Link" required />
                                    </span>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/youtube.svg" alt="Profile Icon" />
                                        <input id='youtube' value={social.youtube} onChange={handleSocial} className="w-full focus:outline-none" type="text" placeholder="Enter Youtube Link" required />
                                    </span>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/tiktok.svg" alt="Profile Icon" />
                                        <input id='tiktok' value={social.tiktok} onChange={handleSocial} className="w-full focus:outline-none" type="text" placeholder="Enter Tiktok Link" required />
                                    </span>
                                    <span className="flex flex-row w-11/12 px-3 py-2 m-auto mb-3 border-2 rounded-md shadow-md focus:outline-one">
                                        <img className="w-6 mr-4" src="/svg/github.svg" alt="Profile Icon" />
                                        <input id='github' value={social.github} onChange={handleSocial} className="w-full focus:outline-none" type="text" placeholder="Enter Github link" required />
                                    </span>
                                    <input className='w-32 px-4 py-2 mb-10 text-white bg-green-500 border-green-800 rounded-md shadow-md cursor-pointer' type='submit' value='save socials' />
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default profile;