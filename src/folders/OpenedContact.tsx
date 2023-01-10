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
      className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[70%] xl:w-[40%] h-[50%] box-border overflow-hidden resize top-[3rem] left-[1rem] xl:left-[10rem]`}
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
            Contact info
          </div>
        </div>
      </motion.div>

      <div className="flex justify-start items-center flex-col h-full w-full p-4 pb-10 overflow-y-auto overflow-x-hidden text-[0.9rem]">
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

        <div className="w-full mt-4">
          <div className="font-bold">Email:</div>
          <p>dominikpollak17@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenedContact;
