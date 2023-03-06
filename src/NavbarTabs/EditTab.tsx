import React from 'react';

// interface Props {
//   editTabRef : React.RefObject<HTMLDivElement>
// }

const EditTab = () => {
  // console.log(editTabRef.current)

  return (
    <div className="absolute top-[7%] z-[60] h-auto w-[120px] cursor-default border-[1.5px] border-t-0 border-black bg-white leading-7 md:top-[5%] xl:w-[180px]">
      <ul className="text-black/[0.45] md:text-[0.8rem] xl:text-[0.9rem]">
        <li className="cursor-pointer border-black pl-3 text-left">Undo</li>
        <li className="cursor-pointer border-black pl-3 text-left">Copy</li>
        <li className="cursor-pointer border-black pl-3 text-left">Cut</li>
        <li className="cursor-pointer border-black pl-3 text-left">Paste</li>
      </ul>
    </div>
  );
};
export default EditTab;
