import React, { useEffect } from 'react';
import Time from './Time';
import AppleBlack from '../imgs/apple-black.png';
import AppleWhite from '../imgs/apple-white.png';
import { useState, useRef } from 'react';
import FileTab from '../NavbarTabs/FileTab';
import EditTab from '../NavbarTabs/EditTab';
import HelpTab from '../NavbarTabs/HelpTab';
import MacTab from '../NavbarTabs/MacTab';

interface Props {
  closeAllFolders: () => void;
}

const Navbar: React.FC<Props> = ({ closeAllFolders }) => {
  const initialTime = new Date().toLocaleTimeString('en-GB', {
    weekday: 'short',
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const [logo, setLogo] = useState(AppleBlack);
  const [fileTab, setFileTab] = useState(false);
  const [editTab, setEditTab] = useState(false);
  const [helpTab, setHelpTab] = useState(false);
  const navbarRef = useRef<HTMLInputElement>(null);
  // const editTabRef = useRef<HTMLDivElement>(null);

  const closeAllTabs = () => {
    setEditTab(false);
    setFileTab(false);
    setHelpTab(false);
    setLogo(AppleBlack);
  };

  const handleLogo = () => {
    if (logo === AppleBlack) {
      setLogo(AppleWhite);
      setHelpTab(false);
      setEditTab(false);
      setFileTab(false);
    } else {
      setLogo(AppleBlack);
    }
  };

  const handleFileTab = () => {
    if (fileTab === false) {
      setFileTab(true);
      setHelpTab(false);
      setEditTab(false);
      setLogo(AppleBlack);
    } else {
      setFileTab(false);
    }
  };

  const handleEditTab = () => {
    if (editTab === false) {
      setEditTab(true);
      setFileTab(false);
      setHelpTab(false);
      setLogo(AppleBlack);
    } else {
      setEditTab(false);
    }
  };

  const handleHelpTab = () => {
    if (helpTab === false) {
      setHelpTab(true);
      setEditTab(false);
      setFileTab(false);
      setLogo(AppleBlack);
    } else {
      setHelpTab(false);
    }
  };

  const handleDocumentClick = (e: any) => {
    if (!navbarRef.current?.contains(e.target)) {
      closeAllTabs();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });

  return (
    <>
      <div
        className="top-0 flex h-[7%] w-full items-center justify-between rounded-t-lg
                            border-b-[2px] border-black bg-white text-[0.8rem] sm:text-[0.9rem] md:h-[5%] xl:text-[1rem]"
      >
        <div
          ref={navbarRef}
          className="ml-[0.4rem] flex h-full w-[42%] items-center justify-between sm:w-[32%] xl:ml-[0.7rem] xl:w-[30%] 2xl:w-[26%]"
        >
          <button
            className={
              logo === AppleBlack
                ? 'flex h-[95%] w-[20%] items-center justify-center rounded-sm bg-transparent sm:w-[11%] lg:w-[11%] xl:w-[17%]'
                : 'flex h-[95%] w-[20%] items-center justify-center rounded-sm bg-black sm:w-[11%] lg:w-[11%] xl:w-[17%]'
            }
            onClick={handleLogo}
          >
            <img
              className="w-[45%] md:w-[65%] xl:w-[50%] 2xl:w-[45%]"
              src={logo}
              alt="Apple logo"
            />
          </button>
          {logo === AppleWhite && <MacTab closeAllTabs={closeAllTabs} />}

          <div className="flex h-full w-[80%] justify-between">
            <div className="h-full w-full">
              <button
                onClick={handleFileTab}
                className={
                  fileTab
                    ? 'h-full w-full bg-black text-slate-100'
                    : 'h-full w-full bg-transparent text-black'
                }
              >
                File
              </button>
              {fileTab && (
                <FileTab
                  closeAllFolders={closeAllFolders}
                  closeAllTabs={closeAllTabs}
                />
              )}
            </div>

            <div className="h-full w-full">
              <button
                onClick={handleEditTab}
                className={
                  editTab
                    ? 'h-full w-full bg-black text-slate-100'
                    : 'h-full w-full bg-transparent text-black'
                }
              >
                Edit
              </button>
              {editTab && <EditTab />}
            </div>

            <div className="h-full w-full">
              <button
                onClick={handleHelpTab}
                className={
                  helpTab
                    ? 'h-full w-full bg-black text-slate-100'
                    : 'h-full w-full bg-transparent text-black'
                }
              >
                Help
              </button>
              {helpTab && <HelpTab closeAllTabs={closeAllTabs} />}
            </div>
          </div>
        </div>

        <div className="pr-2 sm:pr-4">
          <Time initialTime={initialTime} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
