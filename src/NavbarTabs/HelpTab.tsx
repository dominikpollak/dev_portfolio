import React, { useContext } from 'react';
import { AlienContext } from '../App';

interface Props {
  closeAllTabs: () => void;
}

const HelpTab: React.FC<Props> = ({ closeAllTabs }) => {
  const value = useContext(AlienContext);

  if (value === undefined) {
    return null;
  }

  const { handleAlienPlsClick, handleContactClick } = value;

  const handleAlienWithClose = () => {
    handleAlienPlsClick();
    closeAllTabs();
  };

  const handleContactWithClose = () => {
    handleContactClick();
    closeAllTabs();
  };

  return (
    <>
      <div className="absolute top-[7%] z-[60] h-auto w-[120px] cursor-default border-[1.5px] border-t-0 border-black bg-white leading-7 sm:top-[5%] xl:w-[180px]">
        <ul className="text-[0.8rem] text-black xl:text-[0.9rem]">
          <li
            onClick={handleContactWithClose}
            className="cursor-pointer border-black pl-3 text-left hover:bg-black hover:text-white"
          >
            Contact
          </li>
          <li
            onClick={handleAlienWithClose}
            className="cursor-pointer border-black pl-3 text-left hover:bg-black hover:text-white"
          >
            alienpls.gif
          </li>
        </ul>
      </div>
    </>
  );
};

export default HelpTab;
