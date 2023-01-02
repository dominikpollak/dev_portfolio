import React from 'react'
import { useState } from 'react'
import FolderIcon from '../imgs/folder.png'

export default function MyProjects() {

    const [myprojects, setMyprojects] = useState(false)

    const handleMyprojects = () => {

        if (myprojects === false) {
            setMyprojects(true)
            setTimeout(() => {
                setMyprojects(false)
            }, 80)
        }
        else {
            setMyprojects(false)
        }
    }
    return (
        <>
            <div className='flex flex-col items-center cursor-pointer' onClick={handleMyprojects}>
                <div className='w-[33%] mb-2'>
                    <img src={FolderIcon} className={myprojects ? 'invert' : 'brightness-[115%]'} alt='folder' />
                </div>

                <div className={myprojects ? 'flex items-center justify-center px-2 text-white bg-black text-[1rem] break-words m-0 p-0' : ' flex items-center justify-center px-2 text-center bg-white text-[1rem] break-words m-0 p-0'}>
                    
                    my_projects
                </div>
            </div>
        </>
    )
}
