'use client'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Skeleton } from '@mui/material';
// 
export default () =>
{
    const { blogList, cld } = useSelector((state) => state.models);
    // 
    return <div className='px-2'>
        <div className='mb-2 text-sm'>
            <span className='bg-[#f2f2f2] px-2 py-1 shadow border-l-2 mb-2 border-black'>Recent Blogs</span>
        </div>
        <div className="grid grid-cols-1 gap-5">
            {!blogList ?
                <div className='flex xl:flex-col gap-3'>
                    {Array.from(new Array(3)).map((item, index) => (
                        <Skeleton key={index} variant="rectangular" width={"100%"} height={118} />
                    ))}
                </div> 
            :
             blogList&&blogList[1]&&blogList[1].length==0&&<>No Blogs Found</>}
            {blogList&&blogList[1].map((v,k)=>(
                <Link key={k} to={'/blog'}>
                    <div className="grid grid-cols-12 cursor-pointer rounded shadow overflow-hidden">
                        <div className="col-span-5 bg-black min-h-18 max-h-24">
                            <AdvancedImage sizes="100vw" className='size-full' cldImg={cld.image(v[2])}  />
                        </div>
                        <div className="col-span-7 pl-2 p-1 bg-white">
                            <h3 className="font-bold text-sm">{v[1]}</h3>
                            <div className='flex flex-wrap gap-1 mt-3'>
                                {JSON.parse(v[3]).map((v,k)=>(
                                    <div key={k} className='text-xs'>
                                        <span className='text-slate-600 rounded shadow px-3 py-1 cursor-pointer'>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
}