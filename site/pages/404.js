import Head from "next/head";
import Link from 'next/link'

export default function Custom404() {
    return(
        <>
        <Head>
            <title>404 | Page Not Found</title>
            <meta name="description" content="The page you are looking for doesn't exist." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>

        {/* ปรับ Background ให้ดูสะอาดและใช้ Flexbox จัดกลางหน้าจอให้เป๊ะ */}
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl shadow-indigo-100/50 p-8 md:p-12 text-center border border-gray-50">
                
                {/* Image Section - เพิ่ม Animation เล็กน้อยเวลาโหลด */}
                <div className="relative mb-8 duration-500 transform transition-hover hover:scale-105">
                    <img 
                        className="w-full max-w-sm mx-auto rounded-3xl drop-shadow-xl" 
                        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" 
                        alt="404 Illustration"
                    />
                </div>

                {/* Text Content */}
                <div className="mb-10 space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                        Oops! <span className="text-indigo-600">Lost in Space?</span>
                    </h1>
                    <p className="max-w-md mx-auto text-lg font-medium leading-relaxed text-gray-500 md:text-xl">
                        Sorry, the page you are looking for can't be found. It might have been moved or deleted.
                    </p>
                </div>

                {/* Action Button - เปลี่ยนจาก Green เป็น Indigo ตามธีม */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link 
                        href="/" 
                        className="flex items-center justify-center w-full px-8 py-4 text-xl font-bold text-white transition-all duration-300 bg-indigo-600 shadow-lg sm:w-auto rounded-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="out-3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}