import { createBrowserRouter } from "react-router-dom";
import UserLayOut from "../layout/UserLayOut";
import Home from "../pages/user/Home";
import Error from "../pages/user/Error";
import SignUp from "../pages/user/SignUp";
import Login from "../pages/user/Login";
import Services from "../pages/user/Services";
import ServiceDetails from "../pages/user/ServiceDetails";
import DashboardLayOut from "../layout/DashboardLayOut";
import routerGenerator from "../utiles/routerGenerator";
import { adminPaths } from "./admin.routes";
import Booking from "../pages/user/Booking";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { userPaths } from "./user.routes";
import AllReview from "../pages/user/AllReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayOut />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/booking",
        element: <ProtectedRoute role="user"><Booking /></ProtectedRoute>,
      },
      {
        path: "/allReview",
        element: <ProtectedRoute role="user"><AllReview/></ProtectedRoute>,
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute role="admin"><DashboardLayOut /></ProtectedRoute>,
    children: routerGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <ProtectedRoute role="user"><DashboardLayOut /></ProtectedRoute>,
    children: routerGenerator(userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
