import React, { useContext } from 'react'
import { AlienContext} from '../App'

export default function HelpTab() {

    const value = useContext(AlienContext)

    if(value === undefined){
        return null
    }
    const {handleAlienPlsClick} = value

    return (
        <>
        <div className='absolute top-[5%] w-[180px] h-[100px] bg-white border-[1.5px] border-t-0 border-black z-[60] cursor-default leading-7'>
            <ul className='text-black text-[0.9rem]'>
                <li onClick={handleAlienPlsClick} className="cursor-pointer text-left border-black hover:bg-black hover:text-white pl-3">
                    alienpls.gif
            </li>
        </ul>
    </div >

    {/* {alienPls &&
    <OpenedAlienPls />} */}
    </>
  )
}
