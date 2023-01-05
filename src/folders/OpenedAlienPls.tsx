import { motion, useDragControls } from "framer-motion"
import { RefObject, useState } from "react"
import AlienPls from '../imgs/alienpls.gif'

interface Props {
    screenRef: RefObject<HTMLInputElement>,
    setOpenAlienPls: React.Dispatch<React.SetStateAction<boolean>>
    zIndex: number
}


const OpenedMyProjects: React.FC<Props> = ({ screenRef , setOpenAlienPls, zIndex}) => {

    const [dark, setDark] = useState<boolean>(false)
    const dragControls = useDragControls()
    const [isDragging, setIsDragging] = useState<boolean>(false)


    const handleClose = () => {
        setDark(true)

        setTimeout(() => {
            setDark(false)
            setOpenAlienPls(false)
        }, 60)
    }

    function startDrag(e: any) {
        setIsDragging(true)
        dragControls.start(e)
    }

    return (
        <motion.div
            style={{ zIndex: zIndex }}
            className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[40%] h-[50%] box-border overflow-hidden resize top-[15rem] left-[20rem]`}
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
                        alienpls.gif
                    </div>
                </div>
            </motion.div>

            <motion.div
            className='h-[90%] w-full pointer-events-auto select-none overflow-hidden flex justify-center items-center'>
            <img className="pointer-events-none h-full w-auto" src={AlienPls} alt="" />   
            </motion.div>

        </motion.div>

    )
}
export default OpenedMyProjects