"use client"
import { _category, _type } from 'utils/data'
import { useSelector, useDispatch } from 'react-redux';
import {AdvancedImage} from '@cloudinary/react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
// 
export default ({ header, apis }) =>
{
    const { onCategory, showSubContent, cld } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch();
    const router = useNavigate()
    // 
    if(showSubContent) return <></>
    // if(!apis) return <div className='w-full m-auto'><CircularProgress /></div> 
    // if(!apis) return <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
    //     {Array.from(new Array(6)).map((item, index) => (
    //         <Skeleton key={index} variant="rectangular" width={"100%"} height={80} />
    //     ))}
    // </div>
    // 
    return <div className='py-10 px-2'>
        <div className='mb-2 text-sm'>
            <span className='bg-[#f2f2f2] px-2 py-1 shadow border-l-2 mb-2 border-black'>{header}</span>
        </div>
       {!apis ? 
        <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {Array.from(new Array(6)).map((item, index) => (
                <Skeleton key={index} variant="rectangular" width={"100%"} height={180} />
            ))}
        </div> 
        : 
        apis&&apis.length==0? <>{onCategory} data not found.</> :
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'> 
            {Object.keys(apis).map(k=>(
                <div 
                    key={apis[k]['id']} 
                    className='flex flex-col rounded bg-white p-4 border cursor-pointer'
                    // onClick={()=>dispatch.models.SET({showSubContent:apis[k]})}
                >
                    <div className='grid grid-cols-12 items-center gap-3'>
                        <div className='col-span-3'>
                            <AdvancedImage cldImg={cld.image(apis[k]['img'])} />
                        </div>
                        <div className='col-span-9'>
                            <h3 
                                className='cursor-pointer text-2xl font-bold hover:underline'
                                onClick={()=>{
                                    dispatch.models.SET({showSubContent:apis[k]});
                                    router('/api/'+apis[k]['title'].replace(/ /g, "-"))
                                }}
                            >
                                {apis[k]['title']}
                            </h3>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-1'>
                                    {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(apis[k]['type'][1],16))}</i> */}
                                    {/* <p className='m-0'>{apis[k]['type'][0]}</p> */}
                                    {JSON.parse(apis[k]['type']).map((v,k)=>(
                                        <p key={k} className='m-0 border px-1 cursor-pointer rounded'>{v}</p>
                                    ))}
                                </div>
                                <div className='flex flex-wrap items-center gap-1'>
                                    {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(apis[k]['category'][1],16))}</i> */}
                                    {/* <p className='m-0'>{apis[k]['category'][0]}</p> */}
                                    {JSON.parse(apis[k]['category']).length> 4 ? 
                                        JSON.parse(apis[k]['category']).slice(0,3).map((v,k)=>(
                                            <p
                                                key={k} 
                                                className='m-0 border px-1 cursor-pointer'
                                                onClick={() => {
                                                    router('/'+v.toLowerCase().replace(/ /g, "_"));
                                                    dispatch.models.SET({onCategory:v})
                                                }}
                                            >{v}1</p>
                                        ))
                                        :  JSON.parse(apis[k]['category']).map((v,k)=>(
                                        <p 
                                            key={k} 
                                            className='m-0 border px-1 cursor-pointer rounded'
                                            onClick={() => {
                                                router('/'+v.toLowerCase().replace(/ /g, "_"));
                                                dispatch.models.SET({onCategory:v})
                                            }}    
                                        >{v}</p>
                                    ))}
                                    {JSON.parse(apis[k]['category']).length> 4 ?  <p key={k} className='m-0 border px-1 cursor-pointer'>Show More</p> :<></>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-sm'>
                        <p className='text-[#4e4e4e]'>
                            {apis[k]['description'].length>50 ? apis[k]['description'].substring(0,85) + '...' : apis[k]['description']}
                        </p>
                    </div>
                </div>
            ))}
        </div>}
    </div>
}