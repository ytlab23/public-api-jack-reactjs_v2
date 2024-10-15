'use client'
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItemButton, Collapse, ListItemText } from '@mui/material';
import { useLocation, Link, Outlet } from 'react-router-dom'
// 
import HomeIcon from '@mui/icons-material/Home';
import ApiIcon from '@mui/icons-material/Api';
import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/Category';
import TagIcon from '@mui/icons-material/Tag';
// 
const Authorization = lazy(() => import('components/Authorization'));
import logo from 'assets/images/logo.svg';
// 
export default ({ children }) => 
{ 
    const { onMenu } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch()
    const location = useLocation()
    // 
    useEffect(()=>{
        dispatch.models.SET({
            onMenu: location.pathname.split('/')[2] || 'api'
        })
    },[])
    // 
    const menu = {
        // Home: [
        //     <HomeIcon />
        // ],
        API: [
            <ApiIcon />
        ],
        Blog: [
            <BookIcon />
        ],
        Category: [
            <CategoryIcon />
        ],
        Tags: [
            <TagIcon />
        ]
    };
    // 
    const onMenuClick = (v) =>{
        dispatch.models.SET({onMenu:v.toLocaleLowerCase()})
    }
    // 
    return <Authorization>
        <div className="h-dvh grid grid-cols-[12%_87.5%] xl:grid-cols-[10%_89.5%] gap-2 p-2">
            <div className="bg-white shadow h-full w-full rounded relative">
                <div className='flex flex-col gap-2 items-center py-2'>
                    <img src={logo} className="h-[65px]" />
                    <h2 className='font-bold'>Public API</h2>
                </div>
                <List disablePadding>
                    {Object.keys(menu).map(v=>(  
                        <div key={v} className={v.toLocaleLowerCase()==onMenu? 'bg-slate-200':''}>
                            <Link to={'/admin/'+v.toLocaleLowerCase()} shallow>
                                <ListItemButton onClick={()=>onMenuClick(v)}>
                                    <div className='flex flex-col'>
                                        <div className='flex gap-2'>
                                            <div>{menu[v][0]}</div>
                                            <div><ListItemText primary={v} /></div>
                                        </div>
                                    </div>
                                </ListItemButton>
                            </Link>
                            {/* <Collapse in={onMenu == v ? true : false} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    {menu[v][1].map((vv,kk)=>(
                                        <Link key={kk} href={'/admin/'+v.toLocaleLowerCase()} shallow={true}>
                                            <div>
                                                <ListItemButton 
                                                    onClick={()=>{onSubClick(v,vv)}}
                                                >
                                                    <ListItemText
                                                        primary={vv} 
                                                        // onClick={()=>nav(v,vv)}
                                                    />
                                                </ListItemButton>
                                            </div>
                                        </Link>
                                    ))}
                                </List>
                            </Collapse>  */}
                        </div>
                    ))}
                </List>
                <div 
                    className='absolute bottom-0 flex justify-center w-full border py-3 cursor-pointer'
                    onClick={()=>{
                        dispatch.auths.DEL();
                        window.location.assign(`/`);
                    }}
                >
                    Logout
                </div>
            </div>
            <div className="bg-white shadow h-full w-full rounded p-3">
                <Outlet />
            </div>
        </div>
    
    </Authorization> 
}