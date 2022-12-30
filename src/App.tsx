import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Folder from './imgs/folder.png'


function App() {

  const [swap, setSwap] = useState(false)

  // const turnOnAnimation = animation({
  //   duration: 2,
  //   ease: 'linear',
  //   values: [
  //     {
  //       backgroundColor: '#000',
  //       borderRadius: '0%',
  //       scale: 1,
  //     },
  //     {
  //       backgroundColor: '#fff',
  //       borderRadius: '50%',
  //       scale: 1.2,
  //     },
  //   ],
  // });

  const [aboutme, setAboutme] = useState(false)

  const handleAboutme = () => {
    
    if(aboutme === false){
      setAboutme(true)
    }
    else {
      setAboutme(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSwap(!swap)
    }, 10)
    return () => clearInterval(interval)
  }, [swap])

  return (
    <>
      <div className={swap ? 'brightness-[96%]' : 'brightness-100 hue-rotate-[5deg]'}>
        <div className='flex justify-center items-center w-screen h-screen bg-black font-main text-black font-black brightness-[90%]'>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} exit={{ scale: 0 }}
            className='w-[55%] h-[80%] -translate-y-4 bg-[url("./imgs/macbg.png")] bg-cover rounded-lg'>

            <Navbar />
            <div className='flex justify-center items-center h-1/2'>

              <button className='flex flex-col items-center w-[14%]' onClick={handleAboutme}>
                <div className='w-[40%] mb-2'>
                  <img src={Folder} className={aboutme ? 'invert' : ''} alt='folder' />
                </div>

                <div className={ aboutme ? 'flex items-center justify-center w-[100%] text-white bg-black h-[1.5rem] text-[1.5rem] break-words m-0 p-0' : ' flex items-center justify-center w-[100%] text-center bg-slate-100 h-[1.5rem] text-[1.5rem] break-words m-0 p-0'}>
                  about_me.txt
                </div>

              </button>
            </div>


          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
