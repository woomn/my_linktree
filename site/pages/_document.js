import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* นำฟอนต์เก่าออกและใส่ Plus Jakarta Sans ที่ดู Modern กว่าเข้าไปแทน */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        
        {/* ตั้งค่าเริ่มต้นให้สีพื้นหลังและสีตัวเลือกข้อความคุมโทน Indigo */}
        <style>{`
          body {
            background-color: #f8fafc; /* Slate-50 */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          ::selection {
            background-color: #e0e7ff; /* Indigo-100 */
            color: #4338ca; /* Indigo-700 */
          }
        `}</style>
      </Head>
      <body className="antialiased text-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}