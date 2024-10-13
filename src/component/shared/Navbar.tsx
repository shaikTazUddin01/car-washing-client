import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
// import userimg from "../../assets/userimg.png";
import { logOut } from "../../redux/auth/authSlice";
import { toast } from "sonner";
import { useMyAccountInFoQuery } from "../../redux/auth/authApi";
import { MdClose } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const location = useLocation();
  // get user
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const { data: userInfo } = useMyAccountInFoQuery(user?.AuthId);

  // check scroll or not
  const [scroll, setscroll] = useState(false);
  // check collapse or not
  const [collapse, setCollapse] = useState(false);

  // handle scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;

    setscroll(scrollY > 50);
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
    // console.log("object");
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
              src={userInfo?.data?.image}
              alt="img"
              className="w-10 h-10 border rounded-full"
              onClick={() => handleCollapse()}
            />

            {collapse ? (
              <div
                className="mt-10 md:-mt-20 lg:mt-52 p-4 end-0 text-white border border-[#FFFFF] bg-[#2b2b2b] 
                             rounded-md z-20 absolute
                            text-center shadow-lg shadow-[#858585] w-[250px] "
              >
                <h1 className="">{userInfo?.data?.name}</h1>
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
        </>
      )}
    </>
  );

  return (
    <div
        className={` fixed w-full text-white z-50 items-center ${
          scroll || location.pathname != "/" ? "bg-black" : "lg:bg-transparent "
        }`}
      >
          <div className="navbar max-w-[1440px] mx-auto">


        <div className="navbar-start">
          {/* drawer */}
          <div className="drawer lg:hidden ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="text-2xl">
                {/* Open drawer */}
                <AiOutlineMenuFold />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-black text-white min-h-full w-[65%] md:w-[70%] p-4 relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    const drawerCheckbox = document.getElementById(
                      "my-drawer"
                    ) as HTMLInputElement;
                    if (drawerCheckbox) {
                      drawerCheckbox.checked = false;
                    }
                  }}
                  aria-label="close sidebar"
                  className="absolute top-4 right-4 text-2xl font-bold"
                >
                  <MdClose />
                </button>
                {/* Sidebar content here */}
                <div className="mt-10 mx-auto">
                  <div className="flex flex-col justify-center items-center text-lg">
                    {item}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* drawer */}
          <a href="/">
            <img src={logo} alt="" className="w-[60%] hidden lg:inline" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[17px]">{item}</ul>
        </div>
        <div className="navbar-end lg:hidden mr-5">
          <img src={logo} alt="" className="w-[60%]" />
        </div>



      </div>
    </div>
  );
};

export default Navbar;
