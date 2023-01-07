import React from 'react'

interface Props {
  closeAllFolders: () => void
  closeAllTabs: () => void
}

const FileTab: React.FC<Props> = ({closeAllFolders, closeAllTabs}) => {

  const handleCloseAll = () => {
    closeAllFolders()
    closeAllTabs()
  }

  return (
    <div className='absolute top-[5%] w-[180px] h-auto pb-1 bg-white border-[1.5px] border-t-0 border-black z-[60] cursor-default leading-7'>
      <ul className='text-black/[0.45] text-[0.9rem]'>
        <li className="cursor-pointer text-left border-black pl-3">
          New
        </li>
        <li className="cursor-pointer text-left border-black pl-3">
          Open
        </li>
        <li onClick={handleCloseAll} className="cursor-pointer text-black hover:text-white hover:bg-black text-left border-black pl-3">
          Close all
        </li>
      </ul>
    </div>
  )
}
export default FileTab
