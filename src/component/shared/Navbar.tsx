import { useEffect, useState } from "react";
import logo from '../../assets/logo.svg'
import { useLocation } from "react-router-dom";

const Navbar = () => {
const location=useLocation()

  const [scroll, setscroll] = useState(false)
  
  const handleScroll = () => {
      const scrollY = window.scrollY;
      // console.log(scrollY)
      setscroll(scrollY > 1); 
  };


  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  const item = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/booking">Booking</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </>
  );
  
  return (
    <div className="">
      <div className={`navbar fixed max-w-[1440px] mx-auto text-white z-50 items-center ${scroll || location.pathname !='/' ? "bg-black":"bg-transparent"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[16px]"
            >
              {item}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="" className="w-[60%]" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">
           {item}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
