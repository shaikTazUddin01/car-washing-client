import React, { useState } from "react";
import { Button, Col, Layout } from "antd";
// import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { toast, Toaster } from "sonner";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
// import { adminInFo } from "../../redux/features/auth/AdminAuthSlice";
// import userImage from "../assets/userimg.png";
import Sidebar from "./SIdeBar";

const { Header, Content } = Layout;

const DashboardLayOut: React.FC = () => {
  // const dispatch = useAppDispatch();
//   const user = useAppSelector((state) => state.adminLoginInfo);

  const [openCollapse, SetOpenCollapse] = useState(false);

//   const handleLogout = () => {
//     toast.warning("our are logged out", {
//       duration: 1500,
//     });
//     dispatch(
//       adminInFo({
//         user: null,
//         token: null,
//       })
//     );
//   };

  return (
    <Layout className="min-h-[100%]">
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }}>
          <div className="flex justify-end pt-3 pr-5">
            {/* <img
              src={userImage}
              alt=""
              className="h-10 cursor-pointer"
              onClick={() => SetOpenCollapse(!openCollapse)}
            /> */}
            {/* {openCollapse == true && (
              <div className="bg-red-500 min-h-24 min-w-40 absolute top-14 rounded end-0 collapse-container"></div>
            )} */}
            {/* <div
              className={`collapse-container ${
                openCollapse ? "open " : ""
              } bg-[#001529] border-2 border-secondaryColor absolute top-14 rounded end-0 text-center flex flex-col text-white px-5 z-20`}
            > */}
              
                {/* <span className="text-[16px]"> {user?.user?.user}</span>
                <span className="-mt-8 text-[16px] " >Role : {user?.user?.role}</span>
                <Button
                  className="items-center btn btn-warning btn-sm -mt-2 mb-5"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
               */}
               <button className="btn btn-success">logout</button>
            {/* </div> */}
          </div>
        </Header>
        <Col lg={{ span: 20, offset: 4 }}>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                position: "relative",
              }}
            >
              <Outlet></Outlet>
              <Toaster></Toaster>
            </div>
          </Content>
        </Col>
      </Layout>
    </Layout>
  );
};



export default DashboardLayOut;