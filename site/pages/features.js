import React from 'react'

const Features = () => {
    const featureList = [
        { title: "Tailwind CSS", desc: "Rapid UI development with utility-first classes." },
        { title: "Google Analytics", desc: "Track your visitors and grow your audience." },
        { title: "Page Loader", desc: "Smooth NProgress transition between routes." },
        { title: "Dynamic Head", desc: "SEO optimized titles and meta tags per page." },
        { title: "Responsive Navbar", desc: "Perfectly viewable on any device or screen." },
        { title: "Custom 404 Page", desc: "A playful way to handle missing links." },
        { title: "Notification Toast", desc: "Real-time feedback for user actions." },
        { title: "Footer Component", desc: "Clean and minimal site navigation footer." },
    ];

    return (
        <div className='relative w-full min-h-screen bg-[#fdfeff] overflow-hidden px-6 py-24'>
            
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-300/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-300/20 rounded-full blur-[120px]"></div>
            </div>

            <div className='max-w-6xl mx-auto'>
                
                {/* Header Section */}
                <div className="mb-20 text-center">
                    <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-[0.2em]">
                        Platform Power
                    </span>
                    <h1 className='mt-6 text-4xl font-black tracking-tight md:text-6xl text-slate-900'>
                        Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Capabilities
                        </span>
                    </h1>
                    <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Grid Cards Section */}
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {featureList.map((item, index) => (
                        <div 
                            key={index}
                            className='group relative p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden'
                        >
                            {/* Background Number */}
                            <span className="absolute font-black transition-colors duration-500 pointer-events-none -right-4 -bottom-4 text-8xl text-slate-50 group-hover:text-indigo-50">
                                {index + 1}
                            </span>

                            {/* Content Text */}
                            <div className="relative z-10">
                                <h3 className='mb-2 text-lg font-bold transition-colors text-slate-800 group-hover:text-indigo-600'>
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-slate-500">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Hover Top Line Indicator */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features