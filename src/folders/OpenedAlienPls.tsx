import { motion, useDragControls } from 'framer-motion';
import { RefObject, useState } from 'react';
import AlienPls from '../imgs/alienpls.gif';
import BoxWhite from '../imgs/box-white.png';
import BoxBlack from '../imgs/box-black.png';
import Handler from '../imgs/handler.png';

interface Props {
  screenRef: RefObject<HTMLInputElement>;
  setOpenAlienPls: React.Dispatch<React.SetStateAction<boolean>>;
  zIndex: number;
}

const OpenedMyProjects: React.FC<Props> = ({
  screenRef,
  setOpenAlienPls,
  zIndex,
}) => {
  const [dark, setDark] = useState<boolean>(false);
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleClose = () => {
    setDark(true);

    setTimeout(() => {
      setDark(false);
      setOpenAlienPls(false);
    }, 60);
  };

  function startDrag(e: any) {
    setIsDragging(true);
    dragControls.start(e);
  }

  return (
    <motion.div
      style={{ zIndex: zIndex }}
      className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[70%] xl:w-[40%] h-[50%] box-border overflow-hidden resize top-[15rem] left-[3rem] xl:left-[20rem]`}
      initial={{ scale: 0, originX: 0, originY: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      drag={isDragging}
      dragMomentum={false}
      dragConstraints={screenRef}
      dragListener={false}
      dragElastic={false}
      onDragEnd={() => setIsDragging(false)}
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
            alienpls.gif
          </div>
        </div>
      </motion.div>

      <motion.div className="h-[90%] w-full pointer-events-auto overflow-hidden flex justify-center items-center">
        <img
          className="pointer-events-none h-full w-auto"
          src={AlienPls}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};
export default OpenedMyProjects;
