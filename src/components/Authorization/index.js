import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// 
import { useSelector } from 'react-redux';
// 
export default ({ children }) => 
{
    const Auth = useSelector((state) => state.auths);
    const navigate = useNavigate();
    // 
    if (!Object.keys(Auth).length == 0) return children; 
    // 
    useEffect(()=>{
        navigate('/');
    },[]);
    //
    return <></>
};