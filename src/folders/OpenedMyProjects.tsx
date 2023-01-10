import { motion, useDragControls } from "framer-motion"
import { RefObject, useState, useEffect, useRef } from "react"
import BoxWhite from '../imgs/box-white.png'
import BoxBlack from '../imgs/box-black.png'
import Handler from '../imgs/handler.png'

interface Props {
    screenRef: RefObject<HTMLInputElement>,
    setOpenMyProjects: React.Dispatch<React.SetStateAction<boolean>>
    zIndex: number
}


const OpenedMyProjects: React.FC<Props> = ({ screenRef, setOpenMyProjects, zIndex }) => {

    const [dark, setDark] = useState<boolean>(false)
    const dragControls = useDragControls()
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [folderInfoVisible, setFolderInfoVisible] = useState(true)

    const folderRef = useRef<HTMLDivElement>(null);


    const handleClose = () => {
        setDark(true)

        setTimeout(() => {
            setDark(false)
            setOpenMyProjects(false)
        }, 60)
    }

    function startDrag(e: any) {
        setIsDragging(true)
        dragControls.start(e)
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
            className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[70%] xl:w-[40%] h-[50%] box-border overflow-hidden resize top-[10rem] left-0 xl:left-[15rem]`}
            initial={{ scale: 0, originX: 0, originY: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}
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
                className='relative h-[25px] border-b-[1.5px] border-black flex items-center '>

                <div className='absolute z-0 h-[60%] ml-[0.2rem] w-[calc(100%-6px)] bg-repeat-x bg-center bg-contain' style={{ backgroundImage: `url(${Handler})` }} />

                <div
                    className='ml-[0.5rem] text-[1.6rem] cursor-pointer h-[100%] w-[30px] flex justify-left items-center z-20' onClick={() => { handleClose() }}>
                    {!dark ? <img className="h-[70%] p-[0.3px] bg-white" src={BoxWhite} alt="" /> : <img className="h-[70%] p-[0.3px]" src={BoxBlack} alt="" />}

                </div>

                <div className='absolute flex justify-center items-center w-full h-[100%] z-10'>
                    <div className='bg-white h-[100%] flex items-center px-2 text-[0.9rem]'>
                        my_projects
                    </div>
                </div>
            </motion.div>


            <div className="relative h-[20px] border-black flex items-center justify-center text-[0.7rem] px-2">
                <p>12K in folder</p>
            </div>

            {folderInfoVisible &&
                <div className="absolute top-[25px] h-[20px] w-full border-black flex items-center justify-between text-[0.7rem] px-2">
                    <p>3 items</p>
                    <p>188K available</p>
                </div>
            }

            <motion.div
                className={isDragging ? 'flex flex-col h-[95%] w-full overflow-y-auto pointer-events-none leading-7' : 'flex flex-col h-[95%] w-full overflow-y-auto pointer-events-auto leading-7'}>
                <ul>
                    <li className="flex justify-around items-center border-y-2 border-black">
                        timepark.app
                        <div className="flex flex-col justify-around">
                            <a href="https://timepark-app-frontend.vercel.app/" target='_blank' rel='noreferrer' className=" hover:bg-black hover:text-white cursor-pointer px-2">Site</a>
                            <a href="https://github.com/dominikpollak/timepark.app-frontend" target='_blank' rel='noreferrer' className=" hover:bg-black hover:text-white cursor-pointer px-2">Repo</a>
                        </div>
                    </li>
                    <li className="flex justify-around items-center border-b-2 border-black">
                        art_portfolio
                        <div className="flex flex-col justify-around">
                            <a href="https://portfolio-dominikpollak.vercel.app/" target='_blank' rel='noreferrer' className=" hover:bg-black hover:text-white cursor-pointer px-2">Site</a>
                            <a href="https://github.com/dominikpollak/portfolio" target='_blank' rel='noreferrer' className=" hover:bg-black hover:text-white cursor-pointer px-2">Repo</a>
                        </div>
                    </li>
                    <li className="flex justify-around items-center border-b-2 border-black">
                        pokedex
                        <div className="flex flex-col justify-around">
                            <a href="https://pokemon-dominikpollak.vercel.app/" target='_blank' rel='noreferrer' className=" hover:bg-black hover:text-white cursor-pointer px-2">Site</a>
                            <a href="https://github.com/dominikpollak/pokemon" target='_blank' rel='noreferrer' className=" hover:bg-black hover:text-white cursor-pointer px-2">Repo</a>
                        </div>
                    </li>
                </ul>
            </motion.div>

        </motion.div>

    )
}
export default OpenedMyProjects