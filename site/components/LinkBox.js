import React from 'react'

export const LinkBox = ({lbTitle, lbNumber, lbSvg, lbTheme}) => {
  // กำหนดสีพื้นหลังไอคอนให้ดูละมุนขึ้น (Light background with darker icon/border)
  const themeClasses = {
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    // คุณสามารถเพิ่มสีอื่นๆ ตาม lbTheme ที่ส่งมาได้
  };

  return (
    <div className="flex items-center p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-md group">
      {/* Icon Container - เพิ่ม Animation เล็กน้อยเวลา Hover */}
      <div className={`items-center justify-center w-14 h-14 mr-5 rounded-xl flex-shrink-0 inline-flex transition-transform group-hover:scale-110 bg-${lbTheme}-500/10`}>
        <img 
          src={`/svg/${lbSvg}.svg`} 
          className="object-contain w-7 h-7" 
          alt={lbTitle}
        />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col">
        <span className="mb-1 text-2xl font-extrabold leading-none tracking-tight text-gray-800">
          {lbNumber}
        </span>
        <span className="text-sm font-medium tracking-wider text-gray-400 uppercase">
          {lbTitle}
        </span>
      </div>
    </div>
  );
}

export default LinkBox