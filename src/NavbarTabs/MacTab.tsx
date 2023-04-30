import { useState } from 'react';

interface Props {
  closeAllTabs: () => void;
}

const MacTab: React.FC<Props> = ({ closeAllTabs }) => {
  const [showAboutMac, setShowAboutMac] = useState<Boolean>(false);

  function toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      closeAllTabs();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        closeAllTabs();
      }
    }
  }

  return (
    <>
      <div className="absolute top-[7%] z-[60] h-auto w-auto border-[1.5px] border-t-0 border-black bg-white leading-7 md:top-[5%]">
        <ul className="text-[0.8rem] text-black xl:text-[0.9rem]">
          <li
            onClick={() => setShowAboutMac(true)}
            className="cursor-pointer border-black px-3 text-left hover:bg-black hover:text-white"
          >
            About this Mac
          </li>
          <li
            onClick={toggleFullScreen}
            className="cursor-pointer border-black px-3 text-left hover:bg-black hover:text-white"
          >
            Toggle fullscreen
          </li>
        </ul>
      </div>

      {showAboutMac && (
        <div
          className="absolute left-[50%] top-[50%] z-[60] flex h-[25%] w-[70%] translate-x-[-50%] translate-y-[-50%] items-center justify-center border-4
      border-double border-black bg-white p-2 text-center xl:w-[50%]"
        >
          Version 1.1g ©1984 Apple Computer
        </div>
      )}
    </>
  );
};

export default MacTab;
