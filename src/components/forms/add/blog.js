'use client'
import { TextField, Select, MenuItem, InputLabel, Divider, FormControl, OutlinedInput, Box, Chip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import { getStyles } from 'utils/styles';
import { useForm } from "react-hook-form";
import { useTheme } from '@mui/material/styles';
import { Widget } from 'react-cloudinary-upload-widget'
import { SEND } from 'store'
// 
export default () => 
{
    const { _tag, isUploaded, image_name, blogAddLoading } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch();
    const theme = useTheme();
    //
	const [content, setContent] = useState('');
    // 
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();
    // 
    const onSubmit = (data) => 
    {
        dispatch.models.SET({
            blogAddLoading: true,
            isUploaded:false
        })
        SEND('blog/add', { 
             ...data,
            content: content,
            image_name: image_name
        })
    }
    // 
	return <div className='w-[70vw] h-[70vh] overflow-hidden overflow-y-auto no-scrollbar'> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <Divider className='pb-5'>Add New BLOG</Divider> 

            <div className='grid grid-cols-12 gap-3 items-center pb-2'>
                <div className='col-span-4'>
                    <TextField
                        label="Title"
                        fullWidth
                        {...register('title', {required:true})}
                        error={errors['title'] ? true : false}
                    />
                </div>
                <div className='col-span-5'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            {...register('tags')}
                            value={getValues('tags') || []}
                            onChange={event=>setValue('tags', event.target.value, { shouldValidate: true })}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            {_tag&&_tag.map((v,k) => (
                                <MenuItem
                                    key={k}
                                    value={v[1]}
                                    style={getStyles(v[1], getValues('tags')|| [], theme)}
                                >
                                    {v[1]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='col-span-2'>
                    <Widget
                            uploadPreset='public_api'
                            cloudName='ddv2aeipa'
                            cropping={false}
                            sources={['local', 'url'] }
                            onSuccess={(result) => 
                            {
                                if(result&&result.event=='success'){
                                    dispatch.models.SET({ 
                                        image_uploaded: result.url, 
                                        image_name: result.info.public_id + '.' + (result.info.original_extension || result.info.format),
                                        isUploaded: true
                                    })
                                }
                            }}
                        >
                    </Widget>
                </div>
                <div className='col-span-1 col-start-12'>
                    <LoadingButton 
                        disabled={!isUploaded}
                        type='submit'
                        loading={blogAddLoading}
                        fullWidth
                        variant='contained'
                    >
                        Create
                    </LoadingButton>
                </div>
            </div>

            <JoditEditor
                value={content}
                config={{
                    height: 500
                }}
                onBlur={newContent => setContent(newContent)}
            />
            
        </form>
    </div>
};