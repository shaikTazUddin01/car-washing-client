import React, { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { Navigate } from "react-router-dom";
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
  // console.log(auth);
  const token = useAppSelector((state) => state.auth.token);

  let decoded ;

  if (token) {
    decoded  = jwtDecode<JwtPayload>(token) as TUser;
  }

  if (decoded?.role !==role) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
