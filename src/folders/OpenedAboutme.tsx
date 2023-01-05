import { motion, useDragControls } from "framer-motion"
import React, { RefObject, useState } from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"

interface Props {
    screenRef: RefObject<HTMLInputElement>,
    setOpenAboutme: React.Dispatch<React.SetStateAction<boolean>>,
    zIndex: number,
}

const OpenedAboutme: React.FC<Props> = ({ screenRef, setOpenAboutme, zIndex }) => {

    const [dark, setDark] = useState(false)
    const dragControls = useDragControls()

    const handleClose = () => {
        setDark(true)

        setTimeout(() => {
            setDark(false)
            setOpenAboutme(false)
        }, 60)
    }

    function startDrag(e: any) {
        dragControls.start(e)
    }

    return (
        <motion.div
            style={{ zIndex: zIndex }}
            className={`absolute bg-white border-[1.5px] border-black block min-h-[25px] w-[40%] h-[50%] box-border overflow-hidden resize top-[4rem] left-[7rem] select-none`}
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
                className='relative h-[25px] border-b-[1.5px] border-black flex items-center'
            // onClick={() => setIsDraggable(true)}
            >

                <div className='absolute z-0 h-[55%] w-[98.5%] ml-[0.2rem]' style={{ background: 'repeating-linear-gradient(to bottom, #000, #000 1px, #fff 1px, #fff 2px)' }} />

                <div
                    className='ml-[0.6rem] text-[1.6rem] cursor-pointer h-[100%] w-auto flex justify-center items-center pb-[0.5rem] px-[2px] bg-white z-10' onClick={() => { handleClose() }}>
                    {!dark ? '□' : '■'}
                </div>

                <div className='flex justify-center items-center w-full mr-[1.7rem] h-[100%] z-10'>
                    <div className='bg-white h-[100%] flex items-center px-2 text-[0.9rem]'>
                        about_me.txt
                    </div>
                </div>
            </motion.div>

            <div
                className='flex justify-start flex-wrap h-full w-full p-4 pb-10 overflow-y-auto overflow-x-hidden '>
                    
                <OverlayScrollbarsComponent>
                    <div className='text-[0.9rem]'>
                        <p>
                            My name is Dominik Pollák and this is my portfolio website. I'm an art student at Masaryk University with a burning passion for programming.
                        </p>
                        <p>
                            I graduated with honors in IT but after I finished high school I decided to try something different. After a few years I realized that programming is my true passion.
                        </p>
                        <p>
                            I also realized that I have something that most of the fellow frontend developers don't have - an aesthetic sense.
                        </p>
                        <p>
                            Day by day I'm being more and more proficient developer and I'm excited to show you why in this website. In the my_projects folder you will find the projects I'm the most proud of. In the navbar you'll find contact information.
                        </p>
                        <br />

                        <p>
                            My skillset:
                        </p>
                        <p>
                            Javascript/Typescript, CSS, HTML, React, NextJS, Git, Tailwind CSS, REST, Redux, Photoshop
                        </p>
                    </div>
                </OverlayScrollbarsComponent>
            </div>

        </motion.div>

    )
}
export default OpenedAboutme