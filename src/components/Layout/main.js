import { lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from "react-router-dom";
// 
const Header = lazy(() => import('./header'));
const Footer = lazy(() => import('./footer'));
// 
export default () => 
{
    const { } = useSelector((state) => state.models);
    const Auth = useSelector((state) => state.auths);
    // 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 
    return <>
        <div className="content">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </>
}