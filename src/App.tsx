import { useState, useEffect, useRef } from 'react'
import { motion, } from 'framer-motion'
import Navbar from './components/Navbar'
import AboutMe from './components/Aboutme'
import MyProjects from './components/MyProjects'
import OpenedAboutme from './folders/OpenedAboutme'


function App() {

  const [swap, setSwap] = useState(false)
  const [open, setOpen] = useState(false)

  const screenRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setSwap(!swap)
    }, 10)
    return () => clearInterval(interval)
  }, [swap])

  return (
    <>
      <div className={swap ? 'brightness-[100%]' : 'brightness-[103%] hue-rotate-[5deg]'}>
        <div className='w-screen h-screen bg-black font-chicago leading-5 font-normal text-black overflow-hidden'>

          <div className='fixed flex justify-center items-center h-[93%] w-full'>

            <motion.div
              ref={screenRef}
              initial={{ opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, ease: 'easeIn' }} exit={{ scale: 0 }}
              className='relative stripes w-[65%] h-[90%] 2xl:w-[50%] 2xl:h-[80%] bg-[url("./imgs/bg.png")] bg-repeat rounded-lg overflow-hidden box-border'>

              <Navbar />

              {/* About me folder icon */}
              <button onClick={() => setOpen(true)} className=' translate-x-[80%] translate-y-[100%] w-[12%]'>
                <AboutMe />
              </button>

              {/* Opened about me folder */}
              {open &&
                <OpenedAboutme screenRef={screenRef} setOpen={setOpen} />}

              {/* My projects folder icon */}
              <div className=' translate-x-[550%] translate-y-[170%] w-[12%]'>
                <MyProjects />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );

}
export default App;
