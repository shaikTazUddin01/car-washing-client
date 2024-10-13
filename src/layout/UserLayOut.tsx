import { Toaster } from "sonner";
import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";
import { Outlet } from "react-router-dom";

const UserLayOut = () => {
  return (
    <div className=" mx-auto">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default UserLayOut;
