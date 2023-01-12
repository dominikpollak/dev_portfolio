import React from 'react';

interface Props {
  closeAllFolders: () => void;
  closeAllTabs: () => void;
}

const FileTab: React.FC<Props> = ({ closeAllFolders, closeAllTabs }) => {
  const handleCloseAll = () => {
    closeAllFolders();
    closeAllTabs();
  };

  return (
    <div className="absolute top-[7%] z-[60] h-auto w-[120px] cursor-default border-[1.5px] border-t-0 border-black bg-white pb-1 leading-7 md:top-[5%] xl:w-[180px]">
      <ul className="text-[0.8rem] text-black/[0.45] xl:text-[0.9rem]">
        <li className="cursor-pointer border-black pl-3 text-left">New</li>
        <li className="cursor-pointer border-black pl-3 text-left">Open</li>
        <li
          onClick={handleCloseAll}
          className="cursor-pointer border-black pl-3 text-left text-black hover:bg-black hover:text-white"
        >
          Close all
        </li>
      </ul>
    </div>
  );
};
export default FileTab;
