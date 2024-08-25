import { createBrowserRouter } from "react-router-dom";
import UserLayOut from "../layout/UserLayOut";
import Home from "../pages/user/Home";
import Error from "../pages/user/Error";

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
]);

export default router;
