import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main className="relative w-full min-h-screen bg-[#fafafa] text-[#1a1a1a] flex flex-col justify-between p-8 md:p-16">
        
        {/* 1. Top Section: Navigation-like Header */}
        {/* <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest uppercase opacity-40">Featured</span>
                <span className="text-sm font-medium">Template v2.0</span>
            </div>
            <div className="hidden md:block">
                <p className="text-xs leading-relaxed opacity-40 max-w-[200px] text-right">
                    BUILT FOR PERFORMANCE AND DESIGNED WITH PRECISION.
                </p>
            </div>
        </div> */}

        {/* 2. Center Section: The "Hero" Layout */}
        <div className="w-full max-w-4xl py-20 mx-auto my-auto">
            <h1 className='text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-12'>
                Welcome to <br/>
                <span className='pr-4 font-serif italic text-indigo-600'>Linktree</span> 
                
            </h1>

            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                <div className="max-w-sm">
                    <p className="text-lg italic font-light leading-relaxed text-slate-500">
                        Ready to grow your presence? Create your Linktree and connect everything with a single link.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link 
                        title='Notice the page loader' 
                        className='relative px-10 py-5 overflow-hidden text-sm font-bold text-white transition-all duration-500 bg-indigo-600 rounded-full group hover:bg-black' 
                        href="/apply"
                    >
                        <span className="relative z-10">GET STARTED</span>
                        <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-black group-hover:translate-y-0"></div>
                    </Link>
                    
                    <Link 
                        className="pb-1 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 border-indigo-600 hover:text-indigo-600"
                        href="/features"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </div>

        {/* 3. Bottom Section: Decorative Elements */}
        {/* <div className="flex items-end justify-between w-full pt-8 mt-auto border-t border-slate-200">
            <div className="text-[10px] font-mono opacity-30">
                CORE_SYSTEM / 2024
            </div>
            <div className="flex gap-4">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>
        </div> */}
      </main>
    </>
  )
}