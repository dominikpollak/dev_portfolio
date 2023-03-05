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
      className={`absolute top-[15rem] left-[3rem] box-border block h-[50%] min-h-[25px] w-[70%] resize overflow-hidden border-[1.5px] border-black bg-white xl:left-[20rem] xl:w-[40%]`}
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
            alienpls.gif
          </div>
        </div>
      </motion.div>

      <motion.div className="pointer-events-auto flex h-[90%] w-full items-center justify-center overflow-hidden">
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
