import React, { useContext } from 'react'
import { AlienContext } from '../App'

interface Props {
    closeAllTabs: () => void
}

const HelpTab: React.FC<Props> = ({ closeAllTabs }) => {

    const value = useContext(AlienContext)

    if (value === undefined) {
        return null
    }

    const { handleAlienPlsClick, handleContactClick } = value

    const handleAlienWithClose = () => {
        handleAlienPlsClick()
        closeAllTabs()
    }

    const handleContactWithClose = () =>{
        handleContactClick()
        closeAllTabs()
    }

    return (
        <>
            <div className='absolute top-[5%] w-[100px] xl:w-[180px] h-auto pb-1 bg-white border-[1.5px] border-t-0 border-black z-[60] cursor-default leading-7'>
                <ul className='text-black text-[0.75rem] xl:text-[0.9rem]'>
                <li onClick={handleContactWithClose} className="cursor-pointer text-left border-black hover:bg-black hover:text-white pl-3">
                        Contact
                    </li>
                    <li onClick={handleAlienWithClose} className="cursor-pointer text-left border-black hover:bg-black hover:text-white pl-3">
                        alienpls.gif
                    </li>
                </ul>
            </div >
        </>
    )
}

export default HelpTab
