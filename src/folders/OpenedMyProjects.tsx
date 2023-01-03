import { motion, useDragControls } from "framer-motion"
import { RefObject, useState } from "react"

interface Props {
    screenRef: RefObject<HTMLInputElement>,
    setOpenMyProjects: React.Dispatch<React.SetStateAction<boolean>>
}


const OpenedMyProjects: React.FC<Props> = ({ screenRef, setOpenMyProjects }) => {

    const [dark, setDark] = useState(false)
    const dragControls = useDragControls()


    const handleClose = () => {
        setDark(true)

        setTimeout(() => {
            setDark(false)
            setOpenMyProjects(false)
        }, 60)
    }

    function startDrag(e: any) {
        dragControls.start(e)
    }

    return (
        <motion.div
            className='absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[40%] h-[50%] z-40 box-border overflow-hidden resize top-[10rem] left-[15rem]'
            initial={{ scale: 0, originX: 0, originY: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}
            drag
            dragMomentum={false}
            dragConstraints={screenRef}
            dragListener={false}
            dragElastic={false}
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
                    <div className='bg-white h-[100%] flex items-center px-2 text-[0.8rem]'>
                        my_projects
                    </div>
                </div>
            </motion.div>

            <div className="relative h-[20px] border-black flex items-center justify-between select-none text-[0.7rem] px-2">
                <p>3 items</p>
                <p>12K in folder</p>
                <p>188K available</p>
            </div>

            <div className='flex flex-col h-[95%] w-full overflow-y-auto '>

                <button className="border-y-2 border-black hover:bg-black hover:text-white">timepark.app</button>
                <button className="border-b-2 border-black hover:bg-black hover:text-white">art_portfolio</button>
                <button className="border-b-2 border-black hover:bg-black hover:text-white">pokedex</button>
            </div>

        </motion.div>

    )
}
export default OpenedMyProjects