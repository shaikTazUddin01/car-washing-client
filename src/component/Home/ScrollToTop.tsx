import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)
    // Show the button when scrolling
    // console.log(showButton)
    const handleScroll = () => {
        const scrollY = window.scrollY;
        // console.log(scrollY)
        setShowButton(scrollY > 100); 
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
const goTop=()=>{
    window.scrollTo(0,0)
}

    return (
        <div className={`${showButton ? 'visible' : 'hidden'} `}>
            <button className='rounded-xl bg-[#19083d] px-3 py-2 fixed bottom-10 right-5 text-white border border-black text-xl z-50 ' onClick={goTop}>
           <FaArrowUp/>
               
            </button>
        </div>
    );
};

export default ScrollToTop;