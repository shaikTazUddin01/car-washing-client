import { useState, useEffect } from 'react';

import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)
    // Show the button when scrolling
    console.log(showButton)
    const handleScroll = () => {
        const scrollY = window.scrollY;
        console.log(scrollY)
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
            <button className='rounded-xl bg-[#19083d] p-2 fixed bottom-10 right-5 text-white border border-black text-3xl' onClick={goTop}>
            <MdKeyboardDoubleArrowUp></MdKeyboardDoubleArrowUp>
                {/* top */}
            </button>
        </div>
    );
};

export default ScrollToTop;