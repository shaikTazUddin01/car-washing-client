import  { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { Navigate, useLocation } from "react-router-dom";

const PRouter = ({
  children,

}: {
  children: ReactNode;
  
}) => {
  const location=useLocation()
  // console.log(auth);
  const token = useAppSelector((state) => state.auth.token);


  if (!token) {
    return <Navigate to="/login" state={location?.pathname}></Navigate>;

  }

  
  return children;
};

export default PRouter;
