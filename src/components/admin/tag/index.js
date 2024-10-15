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
import AddTag from 'components/forms/add/tag';
import EditTag from 'components/forms/edit/tag';
// 
export default () =>
{
    const { tagList, tagReloadList, tagListLoading } = useSelector((state) => state.models);
    const dispatch = useDispatch()
    // 
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors } } = useForm()
    const onSubmit = (data) =>{
        dispatch.models.SET({
            tagListLoading: true
        })
        SEND('tag/list', data)
    }
    //
    const columns = [
        [ 'ID' ],
        [ 'Name' ],
        [ 'Unicode'],
        [ 'Icon', v=> <i className='fa fa-xs'>{String.fromCharCode(parseInt(v[2],16))}</i>],
        [ 'Edit', v=> <FontAwesomeIcon icon={faPenToSquare} className='cursor-pointer' onClick={()=>dispatch.models.SET({M:{c:<EditTag data={v} />}})} /> ]
    ];
    // 
    const getD = (v) => 
    {
        dispatch.models.SET({
            tagListLoading: true
        })
        SEND('tag/list', v)
    }
    useEffect(() => getD(), []);
    // 
    useEffect(() => 
    {
        if(!tagReloadList) return;
        getD()
        dispatch.models.SET({ tagReloadList: '' });
    }, [tagReloadList]);
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
                        <LoadingButton fullWidth loading={tagListLoading} variant="contained" type="submit">
                            Search
                        </LoadingButton>
                    </div>
                    <div>
                        <LoadingButton fullWidth loading={tagListLoading} variant="outlined" 
                            onClick={()=> {
                                SEND('tag/list');
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
                        loading={tagListLoading}
                        variant="contained" 
                        onClick={()=>dispatch.models.SET({M:{c:<AddTag />}})}
                    >
                        Create
                    </LoadingButton>
                </div>
            </div>
            
            <Table 
                columns={columns} 
                data={ tagList&&[
                    [tagList[0]||1, 500, tagList[0][2]], 
                    tagList[1]
                ]||[] }
                pageChange={getD}
            />
        </div>
    </form>
}