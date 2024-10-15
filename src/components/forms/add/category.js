'use client'
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Divider } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from "react-hook-form";
import { SEND } from 'store'
// 
export default () =>
{
    const { categoryAddLoading } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch();
    // 
    const { register, handleSubmit, formState: { errors } } = useForm()
    // 
    const onSubmit = (data) => 
    {
        dispatch.models.SET({
            categoryAddLoading: true,
        })
        SEND('category/add', data)
    }
    // 
    return <div className='relative w-[30vw] h-[25vh]'>
        <Divider className='pb-5'>Add New CATEGORY</Divider> 

        <form onSubmit={handleSubmit(onSubmit)} id='form'>
            <div className='flex flex-col gap-3'>
                <TextField
                    error={errors.name}
                    label="Name"
                    fullWidth
                    {...register('name', {required:true})}
                />
                <TextField
                    error={errors.unicode}
                    label="Unicode"
                    fullWidth
                    {...register('unicode', {required:true})}
                />
            </div>
            
            
            <div className='flex gap-2 absolute bottom-0 right-0'>
                <Button variant='outlined' onClick={()=>dispatch.models.SET({M:''})}>
                    Cancel
                </Button>
                <LoadingButton 
                    loading={categoryAddLoading}
                    variant="contained" 
                    type="submit"
                >
                    CREATE
                </LoadingButton>
            </div>
        </form>

    </div>
}