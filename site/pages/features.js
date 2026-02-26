import React from 'react'
import Link from 'next/link';

const Features = () => {
    const featureList = [
        {
            title: "Manage Multiple Links",
            desc: "Combine all your important links—Instagram, TikTok, YouTube, Shop, and more—into one single URL.",
            icon: "🔗"
        },
        {
            title: "Advanced Analytics",
            desc: "Track total profile views, track email clicks, IG referrals, and overall profit growth directly from your dashboard.",
            icon: "📈"
        },
        {
            title: "Beautiful Themes",
            desc: "Customize your profile with stunning modern themes. Apply colors, gradients, and custom layouts in seconds.",
            icon: "🎨"
        },
        {
            title: "QR Code Generator",
            desc: "Easily share your bio-link in the real world. Instantly generate a QR code for your profile.",
            icon: "📱"
        },
        {
            title: "Social Media Integrations",
            desc: "Seamlessly integrate specialized icons for every major social platform to drive cross-platform traffic.",
            icon: "🌍"
        },
        {
            title: "Fast & Mobile Responsive",
            desc: "Optimized for speed and designed to look flawless on any screen size, giving your followers the best experience.",
            icon: "⚡"
        },
    ];

    return (
        <div className='relative w-full min-h-screen bg-[#fdfeff] overflow-hidden px-6 py-24'>

            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-10 left-[5%] w-96 h-96 bg-indigo-300/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-purple-300/20 rounded-full blur-[120px]"></div>
            </div>

            <div className='max-w-6xl mx-auto'>

                {/* Header Section */}
                <div className="mb-20 text-center">
                    <span className="px-5 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold uppercase tracking-[0.2em] shadow-sm">
                        Why Choose Us?
                    </span>
                    <h1 className='mt-8 text-5xl font-black tracking-tight md:text-7xl text-slate-900'>
                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            grow online
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                        Powerful features designed to help creators, brands, and businesses connect their audiences faster and smarter.
                    </p>
                </div>

                {/* Grid Cards Section */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {featureList.map((item, index) => (
                        <div
                            key={index}
                            className='group relative p-10 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden'
                        >
                            {/* Icon  */}
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>

                            {/* Content Text */}
                            <div className="relative z-10">
                                <h3 className='mb-3 text-2xl font-bold transition-colors text-slate-800 group-hover:text-indigo-600'>
                                    {item.title}
                                </h3>
                                <p className="text-base font-medium leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Hover Bottom Line Indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Call To Action */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to level up your bio link?</h2>
                    <Link href="/apply" className="px-8 py-4 bg-indigo-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all active:scale-95 inline-block">
                        Create Your Free Profile
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Features