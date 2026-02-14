import React from 'react'

export const LinkBox = ({lbTitle, lbNumber, lbSvg, lbTheme}) => {
  return (
    <div className="flex items-center p-8 bg-white border rounded-lg shadow">
      <div className={`bg-${lbTheme}-500 items-center justify-center w-16 h-16 mr-6 rounded-full flex-shrink-0 inline-flex`}>
        <img src={`/svg/${lbSvg}.svg`} className="w-6"></img>
      </div>
      <div className="">
        <span className="inline-block text-2xl font-bold">{lbNumber}</span>
        <span className="block text-gray-500">{lbTitle}</span>
      </div>
    </div>
  );
}

export default LinkBox