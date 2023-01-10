import { useState, useRef, createContext } from 'react'
import { motion, } from 'framer-motion'
import Navbar from './components/Navbar'
import AboutMe from './components/Aboutme'
import MyProjects from './components/MyProjects'
import OpenedAboutme from './folders/OpenedAboutme'
import OpenedMyProjects from './folders/OpenedMyProjects'
import OpenedAlienPls from './folders/OpenedAlienPls'
import 'overlayscrollbars/overlayscrollbars.css';
import OpenedContact from './folders/OpenedContact'

type AlienPlsContextType = {
  handleAlienPlsClick: () => void;
  handleContactClick: () => void;
};

export const AlienContext = createContext<AlienPlsContextType | undefined>(undefined);

function App() {

  const [openAboutme, setOpenAboutme] = useState<boolean>(false)
  const [openMyProjects, setOpenMyProjects] = useState<boolean>(false)
  const [openAlienPls, setOpenAlienPls] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)

  const [AboutmezIndex, setAboutmeZIndex] = useState<number>(40)
  const [myProjectsZIndex, setMyProjectsZIndex] = useState<number>(40)
  const [alienPlsZIndex, setAlienPlsZIndex] = useState<number>(40)
  const [contactIndex, setContactIndex] = useState<number>(40)

  const screenRef = useRef<HTMLInputElement>(null)

  const handleAboutmeClick = (): void => {

    setOpenAboutme(true)
    setAboutmeZIndex(50)
    setMyProjectsZIndex(40)
    setAlienPlsZIndex(40)
    setContactIndex(40)

  }

  const handleMyProjectsClick = (): void => {

    setOpenMyProjects(true)
    setAboutmeZIndex(40)
    setMyProjectsZIndex(50)
    setAlienPlsZIndex(40)
    setContactIndex(40)

  }

  const handleAlienPlsClick = (): void => {

    setOpenAlienPls(true)
    setAlienPlsZIndex(50)
    setAboutmeZIndex(40)
    setMyProjectsZIndex(40)
    setContactIndex(40)

  }

  const handleContactClick = (): void => {
    setOpenContact(true)
    setContactIndex(50)
    setAboutmeZIndex(40)
    setMyProjectsZIndex(40)
    setAlienPlsZIndex(40)
  }

  const closeAllFolders = () : void => {
    setOpenAboutme(false)
    setOpenMyProjects(false)
    setOpenAlienPls(false)
    setOpenContact(false)
  }

  return (

    <div className='w-screen h-screen bg-black font-chicago leading-5 font-normal text-black overflow-hidden'>

      <div className='fixed flex justify-center items-center h-[93%] w-full'>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeIn' }} exit={{ scale: 0 }}
          className='relative crt stripes w-[100%] h-[70%] md:w-[80%] xl:w-[50%] xl:h-[80%] bg-[url("./imgs/bg.png")] bg-repeat rounded-lg overflow-hidden box-border select-none'>

          <AlienContext.Provider value={{ handleAlienPlsClick, handleContactClick }}>
            <Navbar closeAllFolders={closeAllFolders} />
          </AlienContext.Provider>

          <div className='h-[95%] w-full text-[0.8rem] xl:text-[1rem]' ref={screenRef}>
            
            {/* About me folder icon */}
            <button onClick={handleAboutmeClick} className='translate-x-[90%] translate-y-[100%] w-[12%] z-30'>
              <AboutMe />
            </button>

            {/* My projects folder icon */}
            <button onClick={handleMyProjectsClick} className=' translate-x-[550%] translate-y-[170%] w-[12%] z-30'>
              <MyProjects />
            </button>

            {/* Opened about me file */}
            {openAboutme &&
              <div onMouseDown={handleAboutmeClick}>
                <OpenedAboutme screenRef={screenRef} setOpenAboutme={setOpenAboutme} zIndex={AboutmezIndex} />
              </div>}

            {/* Opened my_projects folder */}
            {openMyProjects &&
              <div onMouseDown={handleMyProjectsClick}>
                <OpenedMyProjects screenRef={screenRef} setOpenMyProjects={setOpenMyProjects} zIndex={myProjectsZIndex} />
              </div>}

            {/* Opened gif */}
            {openAlienPls &&
              <div onMouseDown={handleAlienPlsClick}>
                <OpenedAlienPls screenRef={screenRef} zIndex={alienPlsZIndex} setOpenAlienPls={setOpenAlienPls} />
              </div>}

            {/* Opened contact file */}
            {openContact &&
              <div onMouseDown={handleContactClick}>
                <OpenedContact screenRef={screenRef} setOpenContact={setOpenContact} zIndex={contactIndex} />
              </div>}

          </div>
        </motion.div>
      </div>
    </div>

  );

}
export default App;
