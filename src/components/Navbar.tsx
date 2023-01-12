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
        className="w-full top-0 h-[5%] flex justify-between items-center
                            text-[0.7rem] md:text-[0.9rem] xl:text-[1rem] border-b-[2px] border-black bg-white rounded-t-lg"
      >
        <div
          ref={navbarRef}
          className="flex h-full md:w-[32%] xl:w-[30%] 2xl:w-[26%] items-center justify-between ml-[0.4rem] xl:ml-[0.7rem]"
        >
          <button
            className={
              logo === AppleBlack
                ? 'h-[95%] w-[20%] md:w-[15%] xl:w-[17%] flex items-center justify-center bg-transparent rounded-sm'
                : 'h-[95%] w-[20%] md:w-[15%] xl:w-[17%] flex items-center justify-center bg-black rounded-sm'
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

          <div className="w-[80%] flex justify-between h-full">
            <div className="w-full h-full">
              <button
                onClick={handleFileTab}
                className={
                  fileTab
                    ? 'text-slate-100 bg-black w-full h-full'
                    : 'text-black bg-transparent w-full h-full'
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

            <div className="w-full h-full">
              <button
                onClick={handleEditTab}
                className={
                  editTab
                    ? 'text-slate-100 bg-black w-full h-full'
                    : 'text-black bg-transparent h-full w-full'
                }
              >
                Edit
              </button>
              {editTab && <EditTab />}
            </div>

            <div className="w-full h-full">
              <button
                onClick={handleHelpTab}
                className={
                  helpTab
                    ? 'text-slate-100 bg-black w-full h-full'
                    : 'text-black bg-transparent w-full h-full'
                }
              >
                Help
              </button>
              {helpTab && <HelpTab closeAllTabs={closeAllTabs} />}
            </div>
          </div>
        </div>

        <div className="pr-4">
          <Time initialTime={initialTime} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
