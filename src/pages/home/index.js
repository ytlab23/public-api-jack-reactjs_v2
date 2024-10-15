import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@mui/material';
import { SEND } from 'store';
//  
const Content = lazy(() => import('components/home/content'));
const SubContent = lazy(() => import('components/home/subcontent'));
const Blog = lazy(() => import('components/home/blog'));
const Category = lazy(() => import('components/home/category'))
// 
export default () =>
{
    const { onCategory, apiListFeatured, apiListRecent, showSubContent, meta } = useSelector((state) => state.models);
    const dispatch = useDispatch()
    // 
    useEffect(()=>{
        try {
            if(onCategory=='home') {
                SEND('home/index')
                dispatch.models.SET({meta:'Public APIs — A Directory of Free Public &amp; Open Rest APIs'})
                return;
            }
            SEND('home/list', {category: onCategory})
        } catch (error) {
            
        }
    },[onCategory])
    // 
    document.title = meta || 'Public APIs — A Directory of Free Public &amp; Open Rest APIs';
    // 
    return <div className='xl:w-[1400px] m-auto py-5'>
        <div>
            <Category />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-[70%_30%] gap-16'>
            <div>
                <Content 
                    header='Featured API' 
                    // apis={onCategory!='home'&&apiListFeatured.filter(v=> v.category.toLowerCase() == onCategory.toLowerCase()) || apiListFeatured } 
                    apis={apiListFeatured } 
                />
                <Content 
                    header='Recently added' 
                    // apis={onCategory!='home'&&(apiListRecent&&apiListRecent[1]).filter(v=> v.category[0].toLowerCase() == onCategory.toLowerCase()) || apiListRecent&&apiListRecent[1] }  
                    apis={apiListRecent&&apiListRecent[1] }  
                />
                {!showSubContent&&apiListRecent&&<Pagination 
                    className='flex justify-center'
                    current={apiListRecent&&apiListRecent[0][0] || 1} 
                    count={apiListRecent&&apiListRecent[0][2]} 
                    onChange={(event, value) =>{ 
                    if((apiListRecent&&apiListRecent[0][0] ||1)==value) return
                        SEND('home/list', {page: value})
                    }}
                />}
                <SubContent />            
            </div>
            <div>
                <Blog />
            </div>
        </div>
    </div>
}