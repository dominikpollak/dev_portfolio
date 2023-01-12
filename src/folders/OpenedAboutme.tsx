import { motion, useDragControls } from 'framer-motion';
import React, { RefObject, useState } from 'react';
import BoxWhite from '../imgs/box-white.png';
import BoxBlack from '../imgs/box-black.png';
import Handler from '../imgs/handler.png';

interface Props {
  screenRef: RefObject<HTMLInputElement>;
  setOpenAboutme: React.Dispatch<React.SetStateAction<boolean>>;
  zIndex: number;
}

const OpenedAboutme: React.FC<Props> = ({
  screenRef,
  setOpenAboutme,
  zIndex,
}) => {
  const [dark, setDark] = useState(false);
  const dragControls = useDragControls();

  const handleClose = () => {
    setDark(true);

    setTimeout(() => {
      setDark(false);
      setOpenAboutme(false);
    }, 60);
  };

  function startDrag(e: any) {
    dragControls.start(e);
  }

  return (
    <motion.div
      style={{ zIndex: zIndex }}
      className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[70%] xl:w-[40%] h-[50%] box-border overflow-hidden resize top-[4rem] left-[2rem] xl:left-[7rem]`}
      initial={{ scale: 0, originX: 0, originY: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      drag
      dragMomentum={false}
      dragConstraints={screenRef}
      dragListener={false}
      dragElastic={false}
      dragControls={dragControls}
    >
      <motion.div
        onPointerDown={startDrag}
        className="relative h-[25px] border-b-[1.5px] border-black flex items-center"
      >
        <div
          className="absolute z-0 h-[60%] ml-[0.2rem] w-[calc(100%-6px)] bg-repeat-x bg-center bg-contain"
          style={{ backgroundImage: `url(${Handler})` }}
        />

        <div
          className="ml-[0.5rem] text-[1.6rem] cursor-pointer h-[100%] w-[30px] flex justify-left items-center z-20"
          onClick={() => {
            handleClose();
          }}
        >
          {!dark ? (
            <img className="h-[70%] p-[0.3px] bg-white" src={BoxWhite} alt="" />
          ) : (
            <img className="h-[70%] p-[0.3px]" src={BoxBlack} alt="" />
          )}
        </div>

        <div className="absolute flex justify-center items-center w-full h-[100%] z-10">
          <div className="bg-white h-[100%] flex items-center px-2 text-[0.9rem]">
            about_me.txt
          </div>
        </div>
      </motion.div>

      <div className="flex justify-start flex-wrap h-full w-full p-4 pb-10 overflow-y-auto overflow-x-hidden ">
        <div className="text-[0.9rem]">
          <p>
            My name is Dominik Pollák and this is my portfolio website. I'm an
            art student at Masaryk University with a burning passion for
            programming.
          </p>
          <br />
          <p>
            I graduated with honors in IT but after I finished high school I
            decided to try something different. After a few years I realized
            that programming is my true passion.
          </p>
          <br />
          <p>
            I also realized that I have something that most of the fellow
            frontend developers don't have - an aesthetic sense. That means I
            have lots of creative design ideas and I'm able to implement them. I
            can also create my own icons and illustrations.
          </p>
          <br />
          <p>
            Day by day I become more and more proficient developer and I'm
            excited to show you why in this website. In the my_projects folder
            you will find the projects I'm the most proud of. Every project has a
            link for a page visit and also a link for the Github repo.
            In the navbar you'll find my contact information.
          </p>
          <br />

          <p>My skillset:</p>
          <p className="mt-1">
            Javascript/Typescript, CSS, HTML, React, NextJS, Git, Tailwind CSS,
            Material UI, REST, Redux, ESLint, Photoshop
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default OpenedAboutme;
