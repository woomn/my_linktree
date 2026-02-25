import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkTree from '../components/LinkTree';
import Link from 'next/link';
import SocialTree from '../components/SocialTree';
import ShareButton from '../components/ShareButton';
import { toast } from 'react-toastify';

const Handle = () => {

    const router = useRouter();
    const [data, setData] = useState({});
    const [userFound, setUserFound] = useState(false);

    const[social, setSocial] = useState({
        facebook: '',
        x: '',
        instagram: '',
        youtube: '',
        tiktok: '',
        github: ''
    })

    useEffect(() => {
        if(router.query?.handle){
            fetch(`http://localhost:8080/get/${router.query.handle}`)
            .then(res => res.json())
            .then(data => {
                if(data.status==='error') return toast.error(data.error);
                if(data.status==='success'){
                    setData(data.userData);
                    setSocial(data.socials);
                    setUserFound(true);
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [router.query])

    if(!userFound){
        return(
            <div className='flex items-center justify-center min-h-screen px-6 bg-slate-50'>
                <div className='max-w-md w-full text-center p-10 bg-white rounded-[2.5rem] shadow-xl shadow-indigo-100 border border-slate-100'>
                    <div className='mb-6 text-6xl'>🥹</div>
                    <h1 className='mb-4 text-3xl font-black tracking-tight text-slate-900'>User Not found</h1>
                    <p className='mb-8 font-medium leading-relaxed text-slate-500'>
                        The link you followed might be broken, or the user may have changed their handle.
                    </p>
                    
                    <div className='flex flex-col gap-3'>
                        <Link className='inline-flex items-center justify-center px-6 py-3.5 text-white font-bold bg-indigo-600 hover:bg-indigo-700 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-200' href='/apply'>
                            Create your own LinkTree
                        </Link>
                        <Link className='text-sm font-bold transition-colors text-slate-400 hover:text-indigo-600' href='/'>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-[#fcfdff] relative pb-20'>
            {/* พื้นหลังแบบฟุ้งเบาๆ ให้หน้า Profile ดูมีมิติ */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-50/50 to-transparent -z-10"></div>
            
            <div className='max-w-2xl px-4 pt-10 mx-auto'>
                {/* ส่วนของปุ่ม Share ที่เราแต่งไว้จะลอยเด่น */}
                <div className='flex justify-end mb-4'>
                    <ShareButton />
                </div>

                {/* Wrapper สำหรับ LinkTree และ SocialTree เพื่อคุมระเบียบ */}
                <div className='flex flex-col items-center'>
                    <LinkTree data={data} />
                    
                    <div className='w-full mt-6'>
                         <SocialTree social={social} />
                    </div>
                </div>

                {/* Footer เล็กๆ เท่ๆ */}
                <div className='mt-16 text-center'>
                    <Link href="/" className='inline-flex items-center gap-2 px-4 py-2 transition-all border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-slate-100 hover:shadow-md group'>
                        <span className='text-xs font-bold transition-colors text-slate-400 group-hover:text-indigo-600'>Made with LinkTree Indigo</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Handle