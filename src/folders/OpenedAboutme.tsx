import { motion } from "framer-motion"
import { RefObject, useState } from "react"

interface Props {
    screenRef: RefObject<HTMLInputElement>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OpenedAboutme: React.FC<Props> = ({ screenRef, setOpen }) => {

    const [isDraggable, setIsDraggable] = useState(true)
    const [dark, setDark] = useState(false)


    const handleClose = () => {
        setDark(true)

        setTimeout(() => {
            setDark(false)
            setOpen(false)
        }, 60)
    }

    return (
        <motion.div
            className='absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[40%] h-[50%] z-40 box-border overflow-hidden resize top-[4rem] left-[7rem]'
            initial={{ scale: 0, originX: 0, originY: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}
            drag={isDraggable}
            dragMomentum={false}
            dragConstraints={screenRef}
            dragElastic={false}
        // onDragEnd={() => setIsDraggable(false)}
        >

            <div
                className='relative h-[25px] border-b-[1.5px] border-black bg-white flex items-center select-none'
            // onClick={() => setIsDraggable(true)}
            >

                <div className='absolute z-0 h-[55%] w-[98.5%] ml-[0.2rem]' style={{ background: 'repeating-linear-gradient(to bottom, #000, #000 1px, #fff 1px, #fff 2px)' }} />

                <div
                    className='ml-[0.6rem] text-[1.6rem] cursor-pointer h-[100%] w-auto flex justify-center items-center pb-[0.5rem] px-[2px] bg-white z-10' onClick={() => { handleClose() }}>
                    {!dark ? '□' : '■'}
                </div>

                <div className='flex justify-center items-center w-full mr-[1.7rem] h-[100%] z-10'>
                    <div className='bg-white h-[100%] flex items-center px-2 text-[0.8rem]'>
                        about_me.txt
                    </div>
                </div>
            </div>

            <div
                className='flex justify-start flex-row p-3 h-full w-full overflow-y-auto '>

                <div className='text-[0.9rem] z-[60] select-none w-full h-full'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus eos est quidem maiores? Molestiae voluptatum minus nam unde magni ipsam veniam vel, facere a provident explicabo cupiditate, dignissimos repellendus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestiae vitae voluptatum, similique, itaque, expedita quod et illo aperiam unde nobis ut cum ipsum quidem temporibus! Recusandae numquam accusamus magni.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, expedita eaque nobis eum quod nemo sed inventore at minus sint mollitia laboriosam omnis unde veritatis cupiditate voluptas, cumque enim fugiat?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aperiam consequatur ad eligendi sit iure dolores perspiciatis incidunt id deleniti quae, et dignissimos ullam provident inventore temporibus beatae quia tempora!
                    </p>
                </div>
            </div>

        </motion.div>

    )
}
export default OpenedAboutme