'use client'
import { TextField, Select, MenuItem, InputLabel, Divider, FormControl, OutlinedInput, Box, Chip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import JoditEditor from 'jodit-react';
import { getStyles } from 'utils/styles';
import { useForm } from "react-hook-form";
import { useTheme } from '@mui/material/styles';
import CloudinaryUploadWidget from "utils/uploadWidget.js";
import { AdvancedImage } from '@cloudinary/react';
import { SEND } from 'store'
// 
export default props => 
{
    const { _tag, blogEditLoading, blogContent, image_name, cld } = useSelector((state) => state.models);
    const [ id, title, _image_name, tag ] = props.data;
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
            blogEditLoading: true,
            image_name:''
        })
        SEND('blog/edit', { 
            blog_id: id,
            ...data,
            ...{content: content},
            ...{image_name: image_name||_image_name}
        })
    }
    // 
    useEffect(()=>{
        setValue('tags', JSON.parse(tag))
        SEND('blog/blog_content', {
            blog_id: id
        })
    },[])
    // 
    useEffect(()=>{
        if(!blogContent) return
        setContent(blogContent)
    },[blogContent])
    // 
	return <div className='w-[70vw] h-[70vh] overflow-hidden overflow-y-auto no-scrollbar'> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <Divider className='pb-5'>Edit BLOG {title}</Divider> 

            <div className='grid grid-cols-12 gap-3 items-center pb-2'>
                <div className='col-span-5 flex flex-col gap-3'>
                    <TextField
                        label="Title"
                        fullWidth
                        {...register('title', {required:true})}
                        defaultValue={getValues('title') || title}
                        error={errors['title']}
                    />
                    <FormControl fullWidth error={errors.tags}>
                        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            {...register('tags', {required:true})}
                            value={getValues('tags') || JSON.parse(tag) || []}
                            onChange={event=>setValue('tags', event.target.value, { shouldValidate: true })}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={selected => (
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
                                    style={getStyles(v[1], getValues('tags') || JSON.parse(tag), theme)}
                                >
                                    {v[1]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='col-span-2'>
                   <div>
                        <CloudinaryUploadWidget />
                    </div>
                    <div>
                        <AdvancedImage 
                            width="0" 
                            height="0" 
                            cldImg={cld.image(image_name || _image_name)}
                            sizes="100vw" 
                            alt={image_name||_image_name} 
                            className='h-auto w-28' 
                        /> 
                    </div>
                </div>
                <div className='col-span-2 col-start-11'>
                    <LoadingButton 
                        type='submit'
                        loading={blogEditLoading}
                        fullWidth
                        variant='contained'
                    >
                        Save
                    </LoadingButton>
                </div>
            </div>

            <JoditEditor
                value={content }
                config={{
                    height: 500
                }}
                onBlur={newContent => setContent(newContent)}
            />
            
        </form>
    </div>
};