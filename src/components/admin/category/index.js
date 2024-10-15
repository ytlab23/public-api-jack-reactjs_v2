'use client'
import { lazy, useEffect } from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { SEND } from 'store'
// 
const Table = lazy(() => import('components/table'))
import AddCategory from 'components/forms/add/category'
import EditCategory from 'components/forms/edit/category'
// 
export default () =>
{
    const { categoryList, categoryReloadList, categoryListLoading } = useSelector((state) => state.models);
    const dispatch = useDispatch()
    // 
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) =>{
        dispatch.models.SET({
            categoryListLoading: true
        })
        SEND('category/list', data)
    }
    //
    const columns = [
        [ 'ID' ],
        [ 'Name' ],
        [ 'Unicode'],
        [ 'Icon', v=> <i className='fa fa-xs'>{String.fromCharCode(parseInt(v[2],16))}</i>],
        [ 'Edit', v=> <FontAwesomeIcon icon={faPenToSquare} className='cursor-pointer' onClick={()=>dispatch.models.SET({M:{c:<EditCategory data={v} />}})} /> ]
    ];
    // 
    const getD = (v) => 
    {
        dispatch.models.SET({
            categoryListLoading: true
        })
        SEND('category/list', v)
    }
    useEffect(() => getD(), []);
    // 
    useEffect(() => 
    {
        if(!categoryReloadList) return;
        getD()
        dispatch.models.SET({ categoryReloadList: '' });
    }, [categoryReloadList]);
    // 
    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <div className='grid grid-cols-12 gap-3 items-center'>
                    <TextField
                        label="Name" 
                        size="small"
                        className='col-span-2'
                        {...register('name')}
                    />
                    <div>
                        <LoadingButton fullWidth loading={categoryListLoading} variant="contained" type="submit">
                            Search
                        </LoadingButton>
                    </div>
                    <div>
                        <LoadingButton fullWidth loading={categoryListLoading} variant="outlined" 
                            onClick={()=> {
                                SEND('category/list');
                                reset()
                            }}
                        >
                            Clear
                        </LoadingButton>
                    </div>
                </div>

                <div className='justify-end flex'>
                    <LoadingButton 
                        fullWidth
                        loading={categoryListLoading}
                        variant="contained" 
                        onClick={()=>dispatch.models.SET({M:{c:<AddCategory />}})}
                    >
                        Create
                    </LoadingButton>
                </div>
            </div>
            
            <Table 
                columns={columns} 
                data={ categoryList&&[
                    [categoryList[0]||1, 500, categoryList[0][2]], 
                    categoryList[1]
                ]||[] }
                pageChange={getD}
            />
        </div>
    </form>
}