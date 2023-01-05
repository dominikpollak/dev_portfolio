import { motion, useDragControls } from "framer-motion"
import { RefObject, useState, useEffect, useRef } from "react"

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

    }, [folderRef.current?.offsetWidth])

    return (
        <motion.div
            ref={folderRef}
            style={{ zIndex: zIndex }}
            className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[40%] h-[50%] box-border overflow-hidden resize top-[10rem] left-[15rem]`}
            initial={{ scale: 0, originX: 0, originY: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}
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

                <div className='absolute z-0 h-[55%] w-[98.5%] ml-[0.2rem]' style={{ background: 'repeating-linear-gradient(to bottom, #000, #000 1px, #fff 1px, #fff 2px)' }} />

                <div
                    className='ml-[0.6rem] text-[1.6rem] cursor-pointer h-[100%] w-auto flex justify-center items-center pb-[0.5rem] px-[2px] bg-white z-10' onClick={() => { handleClose() }}>
                    {!dark ? '□' : '■'}
                </div>

                <div className='flex justify-center items-center w-full mr-[1.7rem] h-[100%] z-10'>
                    <div className='bg-white h-[100%] flex items-center px-2 text-[0.9rem]'>
                        my_projects
                    </div>
                </div>
            </motion.div>


            <div className="relative h-[20px] border-black flex items-center justify-center select-none text-[0.7rem] px-2">
                {/* <p>3 items</p> */}
                <p>12K in folder</p>
                {/* <p>188K available</p> */}
            </div>

            {folderInfoVisible &&
                <div className="absolute top-[25px] h-[20px] w-full border-black flex items-center justify-between select-none text-[0.7rem] px-2">
                    <p>3 items</p>
                    <p>188K available</p>
                </div>
            }

            <motion.div
                className={isDragging ? 'flex flex-col h-[95%] w-full overflow-y-auto pointer-events-none' : 'flex flex-col h-[95%] w-full overflow-y-auto pointer-events-auto select-none leading-7'}>
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