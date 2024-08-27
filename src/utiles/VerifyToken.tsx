import { jwtDecode } from 'jwt-decode';
import React from 'react';

const VerifyToken = ({token}:{token:string}) => {
    return jwtDecode(token)
};

export default VerifyToken;