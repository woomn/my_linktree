import React from 'react'
import LinkTreeCard from './LinkTreeCard';
import { AnimatePresence, motion } from 'framer-motion';

export const LinkTree = ({ data }) => {
    const { name, avatar, bio, links } = data;
    return (
        <>
            <section className='relative max-w-2xl px-4 py-12 mx-auto'>
                {/* Avatar Section - เพิ่มเงาและขอบขาวให้ดูเด่นขึ้น */}
                <div className="flex justify-center mb-6">
                    <div className="relative p-1 bg-white rounded-full shadow-xl ring-4 ring-indigo-50/50">
                        <img
                            className='object-cover w-24 h-24 border-2 border-white rounded-full md:w-28 md:h-28'
                            src={avatar}
                            alt={name}
                        />
                    </div>
                </div>

                {/* Name & Bio - ปรับขนาดและสีให้ดูสบายตา */}
                <div className="mb-10 text-center">
                    <h2 className='text-3xl font-extrabold tracking-tight text-gray-800'>
                        {name ? name : 'No Username'}
                    </h2>
                    <p className='max-w-sm mx-auto mt-2 font-medium leading-relaxed text-gray-500'>
                        {bio}
                    </p>
                </div>

                {/* Links Container - ปรับ Grid/Flex ให้ดูแน่นและสมมาตร */}
                <div className='flex flex-col justify-center w-full m-auto space-y-1'>
                    <AnimatePresence>
                        {links && links.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.1 + 0.3,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }
                                }}
                                className="w-full"
                            >
                                <LinkTreeCard title={link.title} url={link.url} image={link.icon} linkId={link._id} handle={data.handle} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Footer เล็กๆ (Optional) */}
                <footer className="mt-16 text-center">
                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                        Powered by YourBrand
                    </p>
                </footer>
            </section>
        </>
    )
}

export default LinkTree