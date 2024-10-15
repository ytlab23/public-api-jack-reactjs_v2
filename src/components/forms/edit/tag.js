'use client'
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Divider } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from "react-hook-form";
import { SEND } from 'store'
// 
export default props =>
{
    const { tagEditLoading } = useSelector((state) => state.models);
    const [ id, name, unicode ] = props.data;
    // 
    const dispatch = useDispatch();
    // 
    const { register, handleSubmit, getValues, formState: { errors } } = useForm()
    const onSubmit = (data) => 
    {
        dispatch.models.SET({
            tagEditLoading: true,
        })
        SEND('tag/edit', { 
            tag_id: id,
            ...data, 
        })
    }
    // 
    return <div className='relative w-[30vw] h-[25vh]'>
        <Divider className='pb-5'>Edit TAG</Divider> 

        <form onSubmit={handleSubmit(onSubmit)} id='form'>
            <div className='flex flex-col gap-3'>
                    <TextField
                        error={errors['name']}
                        label="Name"
                        defaultValue={getValues('name') || name}
                        {...register('name', { required:true })}
                    />
                    <TextField
                        error={errors.unicode}
                        label="Unicode"
                        defaultValue={getValues('unicode') || unicode}
                        {...register('unicode', {required:true})}
                    />
            </div>
            
            <div className='flex gap-2 absolute bottom-0 right-0'>
                <Button variant='outlined' onClick={()=>dispatch.models.SET({M:''})}>
                    Cancel
                </Button>
                <LoadingButton 
                    loading={tagEditLoading}
                    variant="contained" 
                    type="submit"
                >
                    Save
                </LoadingButton>
            </div>
        </form>

    </div>
}