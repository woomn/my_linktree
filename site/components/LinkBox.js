import React from 'react'

export const LinkBox = ({ lbTitle, lbNumber, lbSvg }) => {
  return (
    <div className="flex items-center px-6 py-5 transition-all duration-300 bg-white border border-gray-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-md hover:border-indigo-100">
      {/* Icon Container - Simple and clean */}
      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4">
        <img
          src={`/svg/${lbSvg}.svg`}
          className="object-contain w-full h-full opacity-80"
          alt={lbTitle}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-none tracking-tight text-slate-800 mb-1.5">
          {lbNumber}
        </span>
        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          {lbTitle}
        </span>
      </div>
    </div>
  );
}

export default LinkBox