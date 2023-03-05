import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import { RefObject, useState } from 'react';
import BoxWhite from '../imgs/box-white.png';
import BoxBlack from '../imgs/box-black.png';
import Handler from '../imgs/handler.png';

interface Props {
  screenRef: RefObject<HTMLInputElement>;
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
  zIndex: number;
}

const OpenedContact: React.FC<Props> = ({
  screenRef,
  setOpenContact,
  zIndex,
}) => {
  const [dark, setDark] = useState(false);
  const dragControls = useDragControls();

  const handleClose = () => {
    setDark(true);

    setTimeout(() => {
      setDark(false);
      setOpenContact(false);
    }, 60);
  };

  function startDrag(e: any) {
    dragControls.start(e);
  }

  return (
    <motion.div
      style={{ zIndex: zIndex }}
      className={`absolute top-[3rem] left-[1rem] box-border block h-[50%] min-h-[25px] w-[70%] resize overflow-hidden border-[1.5px] border-black bg-white xl:left-[10rem] xl:w-[40%]`}
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
        className="relative flex h-[25px] items-center border-b-[1.5px] border-black touch-none"
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
            Contact info
          </div>
        </div>
      </motion.div>

      <div className="flex h-full w-full flex-col items-center justify-start overflow-y-auto overflow-x-hidden p-4 pb-10 text-[0.9rem]">
        <div className="w-full">
          <div className="font-bold">Github:</div>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:bg-black hover:text-white"
            href="https://github.com/dominikpollak"
          >
            https://github.com/dominikpollak
          </a>
        </div>

        <div className="mt-4 w-full">
          <div className="font-bold">Email:</div>
          <p>dominikpollak17@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenedContact;
