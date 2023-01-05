import React from 'react'

export default function EditTab() {
  return (
    <div className='absolute top-[5%] w-[180px] h-auto pb-1 bg-white border-[1.5px] border-t-0 border-black z-[60] cursor-default leading-7'>
      <ul className='text-black/[0.45] text-[0.9rem]'>
        <li className="cursor-pointer text-left border-black pl-3">
          Undo
        </li>
        <li className="cursor-pointer text-left border-black pl-3">
          Copy
        </li>
        <li className="cursor-pointer text-left border-black pl-3">
          Cut
        </li>
        <li className="cursor-pointer text-left border-black pl-3">
          Paste
        </li>
      </ul>
    </div>
  )
}