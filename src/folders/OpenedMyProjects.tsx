import { motion, useDragControls } from "framer-motion"
import { RefObject, useState, useEffect, useRef } from "react"
import BoxWhite from '../imgs/box-white.png'
import BoxBlack from '../imgs/box-black.png'

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

        function checkSize(): void {
            if (folderRef.current && folderRef.current.offsetWidth < 300) {
                setFolderInfoVisible(false)
            }
            else {
                setFolderInfoVisible(true)
            }
        }

        checkSize()

    })

    return (
        <motion.div
            ref={folderRef}
            style={{ zIndex: zIndex }}
            className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[40%] h-[50%] box-border overflow-hidden resize top-[10rem] left-[15rem]`}
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
                className='relative h-[25px] border-b-[1.5px] border-black flex items-center select-none'
            // onClick={() => setIsDraggable(true)}
            >

                <div className='absolute z-0 h-[68%] w-[99.7%]' style={{ background: 'repeating-linear-gradient(to bottom, #000, #000 1px, #fff 1px, #fff 2px)' }} />

                <div
                    className='ml-[0.2rem] text-[1.6rem] cursor-pointer h-[100%] w-[20%] flex justify-left items-center z-20' onClick={() => { handleClose() }}>
                    {!dark ? <img className="h-[81%] mb-[0.5px]" src={BoxWhite} alt=""/> : <img className="h-[81%] mb-[0.5px]" src={BoxBlack} alt=""/>}
                    
                </div>

                <div className='absolute flex justify-center items-center w-full h-[100%] z-10'>
                    <div className='bg-white h-[100%] flex items-center px-2 text-[0.9rem]'>
                        my_projects
                    </div>
                </div>
            </motion.div>


            <div className="relative h-[20px] border-black flex items-center justify-center select-none text-[0.7rem] px-2">
                <p>12K in folder</p>
            </div>

            {folderInfoVisible &&
                <div className="absolute top-[25px] h-[20px] w-full border-black flex items-center justify-between select-none text-[0.7rem] px-2">
                    <p>3 items</p>
                    <p>188K available</p>
                </div>
            }

            <motion.div
                className={isDragging ? 'flex flex-col h-[95%] w-full overflow-y-auto pointer-events-none leading-7' : 'flex flex-col h-[95%] w-full overflow-y-auto pointer-events-auto select-none leading-7'}>
                <ul>
                    <li className="text-center cursor-pointer border-y-2 border-black hover:bg-black hover:text-white">
                        timepark.app
                    </li>
                    <li className="text-center cursor-pointer border-b-2 border-black hover:bg-black hover:text-white">
                        art_portfolio
                    </li>
                    <li className="text-center cursor-pointer border-b-2 border-black hover:bg-black hover:text-white">
                        pokedex
                    </li>
                </ul>
            </motion.div>

        </motion.div>

    )
}
export default OpenedMyProjects