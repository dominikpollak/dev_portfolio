import { useState, useEffect, useRef, createContext } from 'react'
import { motion, } from 'framer-motion'
import Navbar from './components/Navbar'
import AboutMe from './components/Aboutme'
import MyProjects from './components/MyProjects'
import OpenedAboutme from './folders/OpenedAboutme'
import OpenedMyProjects from './folders/OpenedMyProjects'
import OpenedAlienPls from './folders/OpenedAlienPls'
import 'overlayscrollbars/overlayscrollbars.css';

type AlienPlsContextType = {
  handleAlienPlsClick: () => void;
};

export const AlienContext = createContext<AlienPlsContextType | undefined>(undefined);

function App() {

  const [openAboutme, setOpenAboutme] = useState<boolean>(false)
  const [openMyProjects, setOpenMyProjects] = useState<boolean>(false)
  const [openAlienPls, setOpenAlienPls] = useState<boolean>(false)

  const [AboutmezIndex, setAboutmeZIndex] = useState<number>(40)
  const [myProjectsZIndex, setMyProjectsZIndex] = useState<number>(40)
  const [alienPlsZIndex, setAlienPlsZIndex] = useState<number>(40)

  const screenRef = useRef(null)

  const handleAboutmeClick = (): void => {

    setOpenAboutme(true)
    setAboutmeZIndex(50)
    setMyProjectsZIndex(40)
    setAlienPlsZIndex(40)

  }

  const handleMyProjectsClick = (): void => {

    setOpenMyProjects(true)
    setAboutmeZIndex(40)
    setMyProjectsZIndex(50)
    setAlienPlsZIndex(40)

  }

  const handleAlienPlsClick = (): void => {

    setOpenAlienPls(true)
    setAlienPlsZIndex(50)
    setAboutmeZIndex(40)
    setMyProjectsZIndex(40)
  }

  const closeAllFolders = () => {
    setOpenAboutme(false)
    setOpenMyProjects(false)
    setOpenAlienPls(false)
  }

  return (
    <>
      <div className='crt'>
        <div className='w-screen h-screen bg-black font-chicago leading-5 font-normal text-black overflow-hidden'>

          <div className='fixed flex justify-center items-center h-[93%] w-full'>

            <motion.div
              ref={screenRef}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeIn' }} exit={{ scale: 0 }}
              className='relative stripes w-[60%] h-[90%] 2xl:w-[50%] 2xl:h-[80%] bg-[url("./imgs/bg.png")] bg-repeat rounded-lg overflow-hidden box-border'>

              <AlienContext.Provider value={{ handleAlienPlsClick }}>
                <Navbar closeAllFolders={closeAllFolders}/>
              </AlienContext.Provider>

              {/* About me folder icon */}
              <button onClick={handleAboutmeClick} className=' translate-x-[80%] translate-y-[100%] w-[12%] z-30'>
                <AboutMe />
              </button>

              {/* My projects folder icon */}
              <button onClick={handleMyProjectsClick} className=' translate-x-[550%] translate-y-[170%] w-[12%] z-30'>
                <MyProjects />
              </button>

              {/* Opened about me folder */}
              {openAboutme &&
                <div onMouseDown={handleAboutmeClick}>
                  <OpenedAboutme screenRef={screenRef} setOpenAboutme={setOpenAboutme} zIndex={AboutmezIndex} />
                </div>}

              {/* Opened my_projects folder */}
              {openMyProjects &&
                <div onMouseDown={handleMyProjectsClick}>
                  <OpenedMyProjects screenRef={screenRef} setOpenMyProjects={setOpenMyProjects} zIndex={myProjectsZIndex} />
                </div>}

              {openAlienPls &&
                <div onMouseDown={handleAlienPlsClick}>
                  <OpenedAlienPls screenRef={screenRef} zIndex={alienPlsZIndex} setOpenAlienPls={setOpenAlienPls} />
                </div>}

            </motion.div>
          </div>
        </div>
      </div>
    </>
  );

}
export default App;
