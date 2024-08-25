import { createBrowserRouter } from "react-router-dom";
import UserLayOut from "../layout/UserLayOut";
import Home from "../pages/user/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
