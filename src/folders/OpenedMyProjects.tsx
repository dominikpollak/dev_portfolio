import { motion, useDragControls } from 'framer-motion';
import { RefObject, useEffect, useRef, useState } from 'react';
import BoxBlack from '../imgs/box-black.png';
import BoxWhite from '../imgs/box-white.png';
import Handler from '../imgs/handler.png';

interface Props {
  screenRef: RefObject<HTMLInputElement>;
  setOpenMyProjects: React.Dispatch<React.SetStateAction<boolean>>;
  zIndex: number;
}

const OpenedMyProjects: React.FC<Props> = ({
  screenRef,
  setOpenMyProjects,
  zIndex,
}) => {
  const [dark, setDark] = useState<boolean>(false);
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [folderInfoVisible, setFolderInfoVisible] = useState(true);
  const folderRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setDark(true);

    setTimeout(() => {
      setDark(false);
      setOpenMyProjects(false);
    }, 60);
  };

  function startDrag(e: any) {
    setIsDragging(true);
    dragControls.start(e);
  }

  useEffect(() => {
    if (!folderRef.current) {
      return;
    }

    const observer = new MutationObserver(() => {
      if (folderRef.current && folderRef.current.offsetWidth < 300) {
        setFolderInfoVisible(false);
      } else {
        setFolderInfoVisible(true);
      }
    });

    observer.observe(folderRef.current, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={folderRef}
      style={{ zIndex: zIndex }}
      className={`absolute top-[10rem] left-0 box-border block h-[50%] min-h-[25px] w-[70%] resize overflow-hidden border-[1.5px] border-black bg-white xl:left-[15rem] xl:w-[43%]`}
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
        className="relative flex h-[25px] touch-none items-center border-b-[1.5px] border-black"
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
            <img
              className="h-[70%] bg-white p-[0.3px]"
              src={BoxWhite}
              alt="white box"
            />
          ) : (
            <img className="h-[70%] p-[0.3px]" src={BoxBlack} alt="black box" />
          )}
        </div>

        <div className="absolute z-10 flex h-[100%] w-full items-center justify-center">
          <div className="flex h-[100%] items-center bg-white px-2 text-[0.9rem]">
            my_projects
          </div>
        </div>
      </motion.div>

      <div className="relative flex h-[20px] items-center justify-center border-black px-2 text-[0.7rem]">
        <p>12K in folder</p>
      </div>

      {folderInfoVisible && (
        <div className="absolute top-[25px] flex h-[20px] w-full items-center justify-between border-black px-2 text-[0.7rem]">
          <p>3 items</p>
          <p>188K available</p>
        </div>
      )}

      <motion.div className="flex h-[95%] w-full flex-col overflow-y-auto pb-8 leading-7">
        <ul>
          <li className="flex items-center justify-around border-y-2 border-black">
            <div className="w-[50%]">shoezzr</div>
            <div className="flex flex-col justify-around">
              <a
                href="https://shoezzr.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Site
              </a>
              <a
                href="https://github.com/dominikpollak/shoezzr"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Repo
              </a>
            </div>
          </li>
          <li className="flex items-center justify-around border-b-2 border-black">
            <div className="w-[50%]">timepark.app</div>
            <div className="flex flex-col justify-around">
              <a
                href="https://timepark-app-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Site
              </a>
              <a
                href="https://github.com/dominikpollak/timepark.app-frontend"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Repo
              </a>
            </div>
          </li>
          <li className="flex items-center justify-around border-b-2 border-black">
            <div className="w-[50%]">art_portfolio</div>
            <div className="flex flex-col justify-around">
              <a
                href="https://portfolio-dominikpollak.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Site
              </a>
              <a
                href="https://github.com/dominikpollak/portfolio"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Repo
              </a>
            </div>
          </li>
          <li className="flex items-center justify-around border-b-2 border-black">
            <div className="w-[50%]">pokedex</div>
            <div className="flex flex-col justify-around">
              <a
                href="https://pokemon-ecru.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Site
              </a>
              <a
                href="https://github.com/dominikpollak/pokemon"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer px-2 hover:bg-black hover:text-white"
              >
                Repo
              </a>
            </div>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
export default OpenedMyProjects;
