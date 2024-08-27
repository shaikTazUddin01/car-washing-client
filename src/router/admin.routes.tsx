import DashboardLayOut from "../layout/DashboardLayOut";
import Home from "../pages/Dashboard/admin/Home";
import ServiceManagement from "../pages/Dashboard/admin/ServiceManagement";




export const adminPaths = [
  {
    name: "Dashboard",
    // index: true,
    path: "dashboard",
    element:<Home/>,
  },
  {
    name: "Service Management",
    // index: true,
    path: "serviceManagement",
    element:<ServiceManagement/>,
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element:<Home/> ,
      },
     
    ],
  },
    
];