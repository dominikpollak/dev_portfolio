import { motion } from 'framer-motion';
import { createContext, useRef, useState } from 'react';
import AboutMe from './components/Aboutme';
import MyProjects from './components/MyProjects';
import Navbar from './components/Navbar';
import OpenedAboutme from './folders/OpenedAboutme';
import OpenedAlienPls from './folders/OpenedAlienPls';
import OpenedContact from './folders/OpenedContact';
import OpenedMyProjects from './folders/OpenedMyProjects';

type AlienPlsContextType = {
  handleAlienPlsClick: () => void;
  handleContactClick: () => void;
};

export const AlienContext = createContext<AlienPlsContextType | undefined>(
  undefined
);

function App() {
  const [openAboutme, setOpenAboutme] = useState<boolean>(false);
  const [openMyProjects, setOpenMyProjects] = useState<boolean>(false);
  const [openAlienPls, setOpenAlienPls] = useState<boolean>(false);
  const [openContact, setOpenContact] = useState<boolean>(false);

  const [AboutmezIndex, setAboutmeZIndex] = useState<number>(40);
  const [myProjectsZIndex, setMyProjectsZIndex] = useState<number>(40);
  const [alienPlsZIndex, setAlienPlsZIndex] = useState<number>(40);
  const [contactIndex, setContactIndex] = useState<number>(40);

  const screenRef = useRef<HTMLInputElement>(null);

  const handleAboutmeClick = (): void => {
    setOpenAboutme(true);
    setAboutmeZIndex(50);
    setMyProjectsZIndex(40);
    setAlienPlsZIndex(40);
    setContactIndex(40);
  };

  const handleMyProjectsClick = (): void => {
    setOpenMyProjects(true);
    setAboutmeZIndex(40);
    setMyProjectsZIndex(50);
    setAlienPlsZIndex(40);
    setContactIndex(40);
  };

  const handleAlienPlsClick = (): void => {
    setOpenAlienPls(true);
    setAlienPlsZIndex(50);
    setAboutmeZIndex(40);
    setMyProjectsZIndex(40);
    setContactIndex(40);
  };

  const handleContactClick = (): void => {
    setOpenContact(true);
    setContactIndex(50);
    setAboutmeZIndex(40);
    setMyProjectsZIndex(40);
    setAlienPlsZIndex(40);
  };

  const closeAllFolders = (): void => {
    setOpenAboutme(false);
    setOpenMyProjects(false);
    setOpenAlienPls(false);
    setOpenContact(false);
  };

  console.log('lol');

  return (
    <div className="h-screen w-screen overflow-hidden bg-black font-chicago font-normal leading-5 text-black">
      <div className="fixed flex h-[93%] w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          exit={{ scale: 0 }}
          className='crt stripes relative box-border h-[70%] min-h-[500px] w-[100%] select-none overflow-hidden rounded-lg bg-[url("./imgs/bg.png")] bg-repeat sm:w-[90%] md:w-[80%] lg:w-[65%] xl:h-[80%] xl:w-[50%]'
        >
          <AlienContext.Provider
            value={{ handleAlienPlsClick, handleContactClick }}
          >
            <Navbar closeAllFolders={closeAllFolders} />
          </AlienContext.Provider>

          <div
            className="h-[95%] w-full text-[0.9rem] xl:text-[1rem]"
            ref={screenRef}
          >
            {/* About me folder icon */}
            <button
              onClick={handleAboutmeClick}
              className="z-30 w-[14%] translate-x-[90%] translate-y-[100%] sm:w-[10%] md:w-[12%]"
            >
              <AboutMe />
            </button>

            {/* My projects folder icon */}
            <button
              onClick={handleMyProjectsClick}
              className=" z-30 w-[14%] translate-x-[400%] translate-y-[170%] sm:w-[10%] md:w-[12%] lg:translate-x-[550%]"
            >
              <MyProjects />
            </button>

            {/* Opened about me file */}
            {openAboutme && (
              <div onMouseDown={handleAboutmeClick}>
                <OpenedAboutme
                  screenRef={screenRef}
                  setOpenAboutme={setOpenAboutme}
                  zIndex={AboutmezIndex}
                />
              </div>
            )}

            {/* Opened my_projects folder */}
            {openMyProjects && (
              <div onMouseDown={handleMyProjectsClick}>
                <OpenedMyProjects
                  screenRef={screenRef}
                  setOpenMyProjects={setOpenMyProjects}
                  zIndex={myProjectsZIndex}
                />
              </div>
            )}

            {/* Opened gif */}
            {openAlienPls && (
              <div onMouseDown={handleAlienPlsClick}>
                <OpenedAlienPls
                  screenRef={screenRef}
                  zIndex={alienPlsZIndex}
                  setOpenAlienPls={setOpenAlienPls}
                />
              </div>
            )}

            {/* Opened contact file */}
            {openContact && (
              <div onMouseDown={handleContactClick}>
                <OpenedContact
                  screenRef={screenRef}
                  setOpenContact={setOpenContact}
                  zIndex={contactIndex}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default App;
