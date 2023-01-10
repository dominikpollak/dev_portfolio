import React from 'react';
import TextIcon from '../imgs/text.png';
import { useState } from 'react';

export default function AboutMe() {
  const [aboutme, setAboutme] = useState(false);

  const handleAboutme = () => {
    if (aboutme === false) {
      setAboutme(true);
      setTimeout(() => {
        setAboutme(false);
      }, 80);
    } else {
      setAboutme(false);
    }
  };

  return (
    <div className="flex flex-col items-center" onClick={handleAboutme}>
      <div className="w-[66%] md:w-[45%] lg:w-[38%] mb-2">
        <img
          src={TextIcon}
          className={aboutme ? 'invert' : 'brightness-[125%]'}
          alt="text file"
        />
      </div>

      <div
        className={
          aboutme
            ? 'flex items-center justify-center px-2 text-white bg-black m-0 p-0'
            : ' flex items-center justify-center px-2 text-center bg-white m-0 p-0'
        }
      >
        about_me.txt
      </div>
    </div>
  );
}
