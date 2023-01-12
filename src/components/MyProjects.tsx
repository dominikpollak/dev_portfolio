import React from 'react';
import { useState } from 'react';
import FolderIcon from '../imgs/folder.png';

export default function MyProjects() {
  const [myprojects, setMyprojects] = useState(false);

  const handleMyprojects = () => {
    if (myprojects === false) {
      setMyprojects(true);
      setTimeout(() => {
        setMyprojects(false);
      }, 80);
    } else {
      setMyprojects(false);
    }
  };
  return (
    <div className="flex flex-col items-center" onClick={handleMyprojects}>
      <div className="mb-2 w-[66%] md:w-[45%] lg:w-[38%]">
        <img
          src={FolderIcon}
          className={myprojects ? 'invert' : 'brightness-[115%]'}
          alt="folder"
        />
      </div>

      <div
        className={
          myprojects
            ? 'm-0 flex items-center justify-center break-words bg-black p-0 px-2 text-white'
            : ' m-0 flex items-center justify-center break-words bg-white p-0 px-2 text-center'
        }
      >
        my_projects
      </div>
    </div>
  );
}
