import DashboardLayOut from "../layout/DashboardLayOut";
import Dashboard from "../pages/Dashboard/admin/Home";
import Home from "../pages/Dashboard/admin/Home";
import ServiceManagement from "../pages/Dashboard/admin/ServiceManagement";
import CreateSlot from "../pages/Dashboard/admin/slaotManagement/CreateSlot";
import ManageSlot from "../pages/Dashboard/admin/slaotManagement/ManageSlot";
import UserBooking from "../pages/Dashboard/admin/UserManagement/UserBooking";
import UserManagement from "../pages/Dashboard/admin/UserManagement/UserManagement";

export const adminPaths = [
  {
    name: "Dashboard",
    // index: true,
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Service Management",
    // index: true,
    path: "serviceManagement",
    element: <ServiceManagement />,
  },
  {
    name: "Slot Management",
    children: [
      {
        name: "Create Slot",
        path: "create-slot",
        element: <CreateSlot />,
      },
      {
        name: "Manage Slot",
        path: "manage-slot",
        element: <ManageSlot />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Manage User",
        // index: true,
        path: "manageUser",
        element: <UserManagement />,
      },
      {
        name: "Manage Booking",
        path: "userBooking",
        element: <UserBooking />,
      },
    ],
  },
 
];
