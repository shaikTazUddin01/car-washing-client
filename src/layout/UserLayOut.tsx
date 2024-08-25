
import Footer from '../component/shared/Footer';
import Navbar from '../component/shared/Navbar';
import { Outlet } from 'react-router-dom';

const UserLayOut = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserLayOut;