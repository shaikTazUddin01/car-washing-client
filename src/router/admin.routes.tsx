import DashboardLayOut from "../layout/DashboardLayOut";
import Home from "../pages/Dashboard/admin/Home";




export const adminPaths = [
  {
    name: "Dashboard",
    // index: true,
    path: "dashboard",
    element:<Home/>,
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