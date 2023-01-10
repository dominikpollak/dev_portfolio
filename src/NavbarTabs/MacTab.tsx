import { useState } from "react"

interface Props {
  closeAllTabs: () => void
}

const MacTab: React.FC<Props> = ({ closeAllTabs }) => {

  const [showAboutMac, setShowAboutMac] = useState<Boolean>(false)

  function toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      closeAllTabs()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        closeAllTabs()
      }
    }
  }

  return (
    <>
    <div className='absolute top-[5%] w-auto h-auto pb-1 bg-white border-[1.5px] border-t-0 border-black z-[60] leading-7'>
      <ul className='text-black text-[0.75rem] xl:text-[0.9rem]'>
        <li onClick={()=>setShowAboutMac(true)} className="cursor-pointer text-left border-black px-3 hover:text-white hover:bg-black">
          About this Mac
        </li>
        <li onClick={toggleFullScreen} className="cursor-pointer text-left border-black px-3 hover:text-white hover:bg-black">
          Toggle fullscreen
        </li>
      </ul>
    </div>

      {showAboutMac && 
      <div className="absolute w-[70%] xl:w-[50%] h-[25%] border-4 p-2 border-double border-black bg-white z-[60] left-[50%]
      translate-x-[-50%] top-[50%] translate-y-[-50%] flex justify-center items-center">
        Version 1.1g  ©1984 Apple Computer
        </div>}
    </>
  )
}

export default MacTab
