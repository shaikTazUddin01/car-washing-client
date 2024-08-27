import DashboardLayOut from "../layout/DashboardLayOut";
import Home from "../pages/Dashboard/admin/Home";
import ServiceManagement from "../pages/Dashboard/admin/ServiceManagement";
import CreateSlot from "../pages/Dashboard/admin/slaotManagement/CreateSlot";
import ManageSlot from "../pages/Dashboard/admin/slaotManagement/ManageSlot";




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
    name: "Slot Management",
    children: [
      {
        name: "Create Slot",
        path: "create-slot",
        element:<CreateSlot/> ,
      },
      {
        name: "Manage Slot",
        path: "manage-slot",
        element:<ManageSlot/> ,
      },
     
    ],
  },
    
];