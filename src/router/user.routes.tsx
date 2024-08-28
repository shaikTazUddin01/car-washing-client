import Dashboard from "../pages/Dashboard/userDeshboard/Dashboard";
import PastBooking from "../pages/Dashboard/userDeshboard/PastBooking";
import UpcomingBooking from "../pages/Dashboard/userDeshboard/UpcomingBooking";






export const userPaths = [
  {
    name: "Dashboard",
    // index: true,
    path: "dashboard",
    element:<Dashboard/>,
  },{
    name: "Booking Management",
    children: [
      {
        name: "Past Booking",
        path: "past-booking",
        element:<PastBooking/> ,
      },
      {
        name: "Upcoming Booking",
        path: "upcoming-booking",
        element:<UpcomingBooking/> ,
      },
     
    ],
  },
  
  
    
];