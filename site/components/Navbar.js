import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const NavBar = () => {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    useEffect(()=>{
        setMobileMenuOpen(false);
    }, [router.asPath])

    // Helper function สำหรับเช็ค Active Link
    const isActive = (path) => router.pathname === path;

    const navLinkClass = (path) => 
        `block py-2 pl-3 pr-4 transition-all duration-200 rounded md:p-0 ${
            isActive(path) 
            ? "text-indigo-600 font-bold md:bg-transparent" 
            : "text-gray-600 hover:text-indigo-500 hover:bg-gray-50 md:hover:bg-transparent"
        } dark:text-white dark:hover:text-indigo-400`;

    return (
    <>    
        {/* เพิ่ม Sticky และ Backdrop Blur ให้ดูพรีเมียม */}
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <Link href="/" className="flex items-center group">
                <div className="p-2 mr-3 transition-transform bg-indigo-500 rounded-lg group-hover:rotate-12">
                    <img src="/svg/logo.svg" className="w-6 h-6 brightness-0 invert" alt="Logo" />
                </div>
                <span className="self-center text-xl font-bold tracking-tight whitespace-nowrap dark:text-white">
                    Link<span className="text-indigo-600">Tree</span>
                </span>
            </Link>
            
            <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-gray-400 dark:hover:bg-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>

            <div className={`${mobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto transition-all`} id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-2xl bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <Link href="/" className={navLinkClass("/")}>Home</Link>
                    </li>
                    <li>
                        <Link href="/features" className={navLinkClass("/features")}>Features</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className={navLinkClass("/dashboard")}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/apply" className="block px-5 py-2 mt-2 text-center text-white transition-all bg-indigo-600 shadow-md md:mt-0 rounded-xl hover:bg-indigo-700 hover:shadow-indigo-200 active:scale-95">
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </>
    )
}

export default NavBar;