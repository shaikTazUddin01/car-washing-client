import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import userimg from "../../assets/userimg.png";
import { logOut } from "../../redux/auth/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const location = useLocation();
  // get user
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  // check scroll or not
  const [scroll, setscroll] = useState(false);
  // check collapse or not
  const [collapse, setCollapse] = useState(false);

  // handle scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // console.log(scrollY)
    setscroll(scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleLogout = () => {
    toast.warning("logged out.!");
    console.log('object');
    dispatch(logOut());
  };

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
      {user && user?.role ? (
        <div className="pl-2">
          <div className="flex flex-col lg:justify-center lg:items-center px-5 lg:px-0">
            <img
              src={userimg}
              alt="img"
              className="w-10 h-10 border rounded-full"
              onClick={() => handleCollapse()}
            />

            {collapse ? (
              <div
                className="lg:mt-44 text-white border border-[#FFFFF]
                                 bg-[#2b2b2b] p-4 mt-10 
                             rounded-md z-20 ml-8 lg:ml-0 lg:mr-48 absolute
                            text-center shadow-lg shadow-[#858585] w-[250px] "
              >
                <h1 className="">Role : {user?.role && user.role}</h1>
                <h1 className="">Email : {user?.email && user.email}</h1>

                {/* navigate dashboard */}
                <NavLink to={`/${user?.role}/dashboard`}>
                  <li
                    className="bg-[#2b3440]
                                rounded-md 
                                py-2 px-3 
                                text-white mt-2
                                hover:bg-[#082e5f]
                        "
                  >
                    DashBoard
                  </li>
                </NavLink>
                {/* handle log out */}
                <li
                  className="bg-[#2b3440]
                                rounded-md 
                                py-2 px-3 
                                text-white mt-2
                                hover:bg-[#082e5f]

                        "
                  onClick={() => handleLogout()}
                >
                  LogOut
                </li>
                {/* <li onClick={handleLogOut}
                    className="bg-[#2b3440]
                                rounded-md 
                                py-2 px-3 
                                text-white mt-2
                                hover:bg-[#082e5f]
                        ">Log Out</li> */}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <>
          <li>
            <a href="/login">Login</a>
          </li>
          {/* <img src={userImg} alt="" className='w-10 h-10 rounded-full'/> */}
        </>
      )}
    </>
  );

  return (
    <div className="">
      <div
        className={`navbar fixed max-w-[1440px] mx-auto text-white z-50 items-center ${
          scroll || location.pathname != "/" ? "bg-black" : "bg-transparent"
        }`}
      >
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
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{item}</ul>
        </div>
        {/* <div className="navbar-end">
          
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
