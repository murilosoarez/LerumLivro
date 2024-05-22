import { useContext } from 'react';
import { AccountContext } from './Account';
import { Outlet } from 'react-router';
import Login from './pages/login';

const useAuth = () => {
    const user = useContext(AccountContext);
    return user;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Login/>;
}

export default ProtectedRoutes;