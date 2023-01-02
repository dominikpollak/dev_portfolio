import React, { useEffect } from 'react'
import Time from './Time'
import AppleBlack from '../imgs/apple-black.png'
import AppleWhite from '../imgs/apple-white.png'
import { useState, useRef } from 'react'


export default function Navbar() {

    const initialTime = new Date().toLocaleTimeString('en-GB', { weekday: "short", year: "2-digit", month: "numeric", day: "numeric", hour: '2-digit', minute: '2-digit' })

    const [logo, setLogo] = useState(AppleBlack)
    const [fileTab, setFileTab] = useState(false)
    const [editTab, setEditTab] = useState(false)
    const [helpTab, setHelpTab] = useState(false)
    const [close, setClose] = useState(false)
    const navbarRef = useRef<HTMLInputElement>(null);

    const handleLogo = () => {

        if (logo === AppleBlack) {
            setLogo(AppleWhite)
            setHelpTab(false)
            setEditTab(false)
            setFileTab(false)

        }
        else {
            setLogo(AppleBlack)
        }
    }

    const handleFileTab = () => {

        if (fileTab === false) {
            setFileTab(true)
            setHelpTab(false)
            setEditTab(false)
            setLogo(AppleBlack)
        }
        else {
            setFileTab(false)
        }
    }

    const handleEditTab = () => {

        if (editTab === false) {
            setEditTab(true)
            setFileTab(false)
            setHelpTab(false)
            setLogo(AppleBlack)


        }
        else {
            setEditTab(false)
        }
    }

    const handleHelpTab = () => {

        if (helpTab === false) {
            setHelpTab(true)
            setEditTab(false)
            setFileTab(false)
            setLogo(AppleBlack)


        }
        else {
            setHelpTab(false)
        }
    }

    const handleDocumentClick = (e: any) => {
        if (navbarRef.current && !navbarRef.current.contains(e.target)) {
          setFileTab(false);
          setEditTab(false);
          setHelpTab(false);
          setLogo(AppleBlack)
        }
      };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    });


    return (
        <>
            <div className='w-full top-0 h-[5%] flex justify-between items-center border-b-[2px] border-black bg-white rounded-t-lg stripes'>
            

                <div ref={navbarRef} className='flex h-full md:w-[32%] xl:w-[23%] items-center justify-between ml-[0.7rem]'>

                    <button
                        className={logo === AppleBlack ?
                            'h-[95%] md:w-[15%] xl:w-[13%] flex items-center justify-center bg-transparent rounded-sm' :
                            'h-[95%] md:w-[15%] xl:w-[13%] flex items-center justify-center bg-black rounded-sm'}
                        onClick={handleLogo}>
                        <img className='md:w-[65%] xl:w-[55%]' src={logo} alt="Apple logo" />
                    </button>

                    <div className='md:text-[0.9rem] xl:text-[1rem] w-[85%] flex justify-between h-full'>
                        <button onClick={handleFileTab} className={fileTab ? 'text-slate-100 bg-black w-full' : 'text-black bg-transparent w-full'}>File</button>
                        <button onClick={handleEditTab} className={editTab ? 'text-slate-100 bg-black w-full' : 'text-black bg-transparent w-full'}>Edit</button>
                        <button onClick={handleHelpTab} className={helpTab ? 'text-slate-100 bg-black w-full' : 'text-black bg-transparent w-full'}>Help</button>
                    </div>

                </div>

                <div className='md:text-[1rem] text-[1.2rem] text-black pr-4'>
                    <Time initialTime={initialTime} />
                </div>

            </div>
        </>
    )
}
