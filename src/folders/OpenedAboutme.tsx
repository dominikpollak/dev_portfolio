import { motion, useDragControls } from 'framer-motion';
import React, { RefObject, useState } from 'react';
import BoxBlack from '../imgs/box-black.png';
import BoxWhite from '../imgs/box-white.png';
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
    e.preventDefault()
    dragControls.start(e);
  }

  return (
    <motion.div
      style={{ zIndex: zIndex}}
      className={`absolute top-[4rem] left-[2rem] box-border block h-[50%] min-h-[25px] w-[70%] resize overflow-hidden border-[1.5px] border-black bg-white xl:left-[7rem] xl:w-[40%]`}
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
        className="relative flex h-[25px] items-center border-b-[1.5px] border-black"
      >
        <div
          className="absolute z-0 ml-[0.2rem] h-[60%] w-[calc(100%-6px)] bg-contain bg-center bg-repeat-x"
          style={{ backgroundImage: `url(${Handler})` }}
        />

        <div
          className="justify-left z-20 ml-[0.5rem] flex h-[100%] w-[30px] cursor-pointer items-center text-[1.6rem]"
          onClick={() => {
            handleClose();
          }}
        >
          {!dark ? (
            <img className="h-[70%] bg-white p-[0.3px]" src={BoxWhite} alt="" />
          ) : (
            <img className="h-[70%] p-[0.3px]" src={BoxBlack} alt="" />
          )}
        </div>

        <div className="absolute z-10 flex h-[100%] w-full items-center justify-center">
          <div className="flex h-[100%] items-center bg-white px-2 text-[0.9rem]">
            about_me.txt
          </div>
        </div>
      </motion.div>

      <div className="flex h-full w-full flex-wrap justify-start overflow-y-auto overflow-x-hidden p-4 pb-10 ">
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
            you will find the projects I'm the most proud of. Every project has
            a link for a page visit and also a link for the Github repo. In the
            navbar you'll find my contact information.
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
