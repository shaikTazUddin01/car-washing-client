import { createBrowserRouter } from "react-router-dom";
import UserLayOut from "../layout/UserLayOut";
import Home from "../pages/user/Home";
import Error from "../pages/user/Error";
import SignUp from "../pages/user/SignUp";
import Login from "../pages/user/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayOut />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  }
]);

export default router;
