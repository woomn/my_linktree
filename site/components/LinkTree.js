import React from 'react'
import LinkTreeCard from './LinkTreeCard';
import { AnimatePresence, motion } from 'framer-motion';

export const LinkTree = ({data}) => {
    const {name, avatar, bio, links} = data;
  return (
    <>
        <section className='relative'>
            <img className='absolute w-20 mt-2 -translate-x-1/2 rounded-full left-1/2' src={avatar} alt='' />
            <h2 className='text-lg font-bold text-center pt-28'>{name ? name: 'No Username'}</h2>
            <p className='pb-5 text-center'>{bio}</p>
            <div className='flex flex-col justify-center w-full m-auto max-w-7xl md:my-5 md:w-2/5'>
                <AnimatePresence>
                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y:40 }}
                            animate={{ opacity: 1 , y:0, transition: { delay: index * 0.1 + 0.5} }}
                        >
                            <LinkTreeCard title={link.title} url={link.url} image={link.image}/>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    </>
  )
}

export default LinkTree