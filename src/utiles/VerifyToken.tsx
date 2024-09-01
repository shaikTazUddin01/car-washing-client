import { jwtDecode } from 'jwt-decode';


const VerifyToken = ({token}:{token:string}) => {
    return jwtDecode(token)
};

export default VerifyToken;