"use client"
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { OutlinedInput, InputAdornment } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { SEND } from 'store';
// 
import logo from 'assets/images/logo.svg';
// 
export default () =>
{
    const local_api_list = useSelector((state) => state.apis);
    // 
    const dispatch = useDispatch();
    const location = useLocation();
    // 
    const [ search, setSearch ] = useState('');
    // 
    const socials = {
        'Find APIs': ()=>{},
        'Contact' : () => window.location.href = "mailto:publicapisteam@gmail.com"
    }
    // 
    const lc = {
        blog: 'Blog',
        'learn/introduction': 'Learn',
        favourite: <>My Favourites ({local_api_list&&local_api_list.api_favourties&&local_api_list.api_favourties.length || 0})</>
    }
    // 
    const goSearch = () =>
    {
        SEND('home/search', {
            keyword: search
        })
    }
    // 
    useEffect(()=>{
        if(!search) return;
        goSearch()
    },[search])
    // 
    if(location.pathname.split('/')[1]=='admin' || location.pathname.split('/')[1]=='login') return <></>
    // 
    return <header className='border-b'>
        <div className="xl:w-[1400px] m-auto">

            <div className="flex flex-col md:flex-row justify-between items-center py-2 px-2">
                <div className='text-sm'>
                    🚀 Power-up your application with these Public APIs
                </div>
                <div className="flex flex-col md:flex-row md:gap-5">
                    <div className='flex gap-3 justify-center'>
                        {Object.keys(socials).map(k=>(
                            <div key={k} className='cursor-pointer' onClick={socials[k]}>
                                {k}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white py-5">
            <div className="xl:w-[1400px] m-auto">

                <div className="grid grid-cols-1 grid-flow-row md:grid-cols-12 items-center px-2 lg:px-0 gap-2 xl:gap-0">
                    <div 
                        className="md:col-span-2 cursor-pointer"
                        onClick={()=>{dispatch.models.SET({showSubContent:'', onCategory:'home'})}}
                    >
                    <Link to='/'>
                        <div className='flex gap-1'>
                            <div>
                                <img src={logo} className="h-[35px] w-[60px]" />
                            </div>
                            <div>
                                <b className='text-2xl'>Public APIs</b>
                            </div>
                        </div>
                    </Link>
                    
                    </div>
                    <div className='md:col-span-6'>
                        <OutlinedInput
                            style={{paddingRight:0, background:'#eee', border:0}}
                            fullWidth
                            size="small"
                            startAdornment={
                                <InputAdornment className='mr-5' position="start">
                                    <SearchIcon className='cursor-pointer' />
                                </InputAdornment>
                            }
                            endAdornment={
                                <div 
                                    className='bg-black text-white h-full py-2 px-3 cursor-pointer'
                                    onClick={goSearch}
                                >
                                    Search
                                </div>
                            }
                            placeholder='Music, Movie, Games, Development, Currency, Marketing APIs'
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={(ev) => {
                                if (ev.key === 'Enter') {
                                    goSearch()
                                    ev.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className='md:col-span-4 flex justify-evenly text-lg'>
                        {Object.keys(lc).map(k=>(
                            <div key={k} className='cursor-pointer hover:underline'>
                                <Link to={'/'+k}>
                                    {lc[k]}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    </header>
}