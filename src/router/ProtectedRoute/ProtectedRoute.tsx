import React, { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { Navigate, useLocation } from "react-router-dom";
import VerifyToken from "../../utiles/VerifyToken";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { TUser } from "../../Types";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const location=useLocation()
  // console.log(auth);
  const token = useAppSelector((state) => state.auth.token);

  let decoded ;

  if (token) {
    decoded  = jwtDecode<JwtPayload>(token) as TUser;
  }

  if (decoded?.role !==role) {
    return <Navigate to="/login" state={location?.pathname}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
