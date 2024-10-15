'use client'
import { lazy } from 'react';
import { useLocation } from "react-router-dom";
// 
const Category = lazy(() => import('components/home/category'));
// 
export default () =>
{
    const location = useLocation();
    if(location.pathname.split('/')[1]=='admin' || location.pathname.split('/')[1]=='login') return <></>
    // 
    const year = new Date().getFullYear()
    //
    return <footer className="border-t-2 py-5 bg-[#fafbfc] px-2">
        <div className="xl:w-[1400px] m-auto flex flex-col gap-10">
            <Category />
            <div>
                © Copyright 2014-{year}. All Rights Reserved.
            </div>
        </div>
    </footer>
}