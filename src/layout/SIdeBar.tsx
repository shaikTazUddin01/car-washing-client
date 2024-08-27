// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, Menu } from "antd";
// import { createElement } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import SidebarGenarator from "../utiles/sidebarGenerator";
import { adminPaths } from "../router/admin.routes";
import { useAppSelector } from "../redux/hooks/hooks";
// import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const role = useAppSelector((state) => state.auth.user?.role);

  // crate dynamic path
  let items = SidebarGenarator(adminPaths, "admin");
  if (role === "admin") {
    items = SidebarGenarator(adminPaths, "admin");
  } else {
    items = SidebarGenarator(adminPaths, "user");
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      // className="scrollbar"
      style={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        // overflowY: "auto",
      }}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical ">
        <div >
          <a href="/" className="flex justify-center items-center mt-4">
          <img src={logo} alt="" className="w-[80%]" />
          </a>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        // className="min-h-[100%] sticky top-0 overflow-y-auto"
        style={{
          minHeight: "100%",
          // overflowY: "auto", // Ensure the menu itself can scroll
        }}
      />
    </Sider>
  );
};

export default Sidebar;
