import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkTree from '../components/LinkTree';
import Link from 'next/link';
import SocialTree from '../components/SocialTree';
import ShareButton from '../components/ShareButton';

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

    // useEffect(() => {
    //     if(router.query?.handle){
    //         fetch(`http://localhost:8080/get/socials/${router.query.handle}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.status==='error') return toast.error(data.error);
    //             if(data.status==='success'){
    //                 setSocial(data.socials);
    //             }
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }
    // }, [router.query])

    if(!userFound){
        return(
            <div className='flex items-center justify-center h-screen'>
                <div className='px-3 not-found'>
                    <h1 className='text-lg font-bold'>User Not found 🥹</h1>

                    <p>If you're looking for a page, double check the spelling.</p>
                    Create you own<Link className='px-2 ml-2 text-white duration-500 bg-indigo-600 hover:bg-indigo-400 translate-all' href='/apply'> LinkTree</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ShareButton />
            <LinkTree data={data} />
            <SocialTree social={social} />
        </div>
    )
}

export default Handle
