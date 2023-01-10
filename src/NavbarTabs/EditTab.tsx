import React from 'react';

// interface Props {
//   editTabRef : React.RefObject<HTMLDivElement>
// }

const EditTab = () => {
  // console.log(editTabRef.current)

  return (
    <div className="absolute top-[5%] w-[100px] xl:w-[180px] h-auto pb-1 bg-white border-[1.5px] border-t-0 border-black z-[60] cursor-default leading-7">
      <ul className="text-black/[0.45] text-[0.75rem] xl:text-[0.9rem]">
        <li className="cursor-pointer text-left border-black pl-3">Undo</li>
        <li className="cursor-pointer text-left border-black pl-3">Copy</li>
        <li className="cursor-pointer text-left border-black pl-3">Cut</li>
        <li className="cursor-pointer text-left border-black pl-3">Paste</li>
      </ul>
    </div>
  );
};
export default EditTab;
