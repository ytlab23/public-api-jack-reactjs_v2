'use client'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Select, MenuItem, InputLabel, Button, Divider, FormControl, OutlinedInput, Box, Chip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import { getStyles } from 'utils/styles';
import { useForm } from "react-hook-form";
import { Widget } from 'react-cloudinary-upload-widget'
import { SEND } from 'store'
// 
export default () =>
{
    const { _category, _type, _plan, _trial, _featured, _tag, apiAddLoading, image_uploaded, isUploaded, image_name, cld } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch();
    const theme = useTheme();
    // 
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm()
    // 
    useEffect(()=>{
        dispatch.models.SET({image_uploaded:''})
    },[])
    // 
    const onSubmit = (data) => 
    {
        dispatch.models.SET({
            apiAddLoading: true,
            isUploaded: false
        })
        SEND('api/add', { 
            ...data, 
            ...{image_name}
        })
    }
    // 
    const pre = {
        plan: ['Plan', _plan ],
        trial: ['Trial', _trial ],
        featured: ['Featured', _featured ]
    }
    // 
    const finance = {
        price: ['Price'],
        calls: ['Calls']
    }
    // 
    return <div className='relative w-[70vw] h-[70vh]'>
        <Divider className='pb-5'>Add New API</Divider> 

        <form onSubmit={handleSubmit(onSubmit)} id='form'>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-6 flex flex-col gap-3'>
                    <TextField
                        error={errors.title}
                        label="Title"
                        {...register('title', {required:true})}
                    />
                    <TextField
                        error={errors.title}
                        label="External Link"
                        {...register('external', {required:true})}
                    />

                    {Object.keys(pre).map(k=>(
                        <FormControl key={k} error={errors[k]}>
                            <InputLabel id={k}>{pre[k][0]}</InputLabel>
                            <Select 
                                id={k}
                                labelId={k}
                                {...register(k, {required:true})}
                                value={getValues(k) || ''}
                                label={pre[k][0]}
                                onChange={event=>setValue(k, event.target.value, { shouldValidate: true })}
                            >
                                <MenuItem value="">
                                    <em>-Select {pre[k][0]}-</em>
                                </MenuItem>
                                {pre[k][1]&&pre[k][1].map((vv,kk)=>(
                                    <MenuItem key={kk} value={vv[0]}>{vv[1]}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}

                    <FormControl fullWidth error={errors.tags}>
                        <InputLabel id="demo-multiple-chip-label-category">Category</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label-category"
                            id="demo-multiple-chip-category"
                            multiple
                            {...register('category', {required:true})}
                            value={getValues('category') || []}
                            onChange={event=>setValue('category', event.target.value, { shouldValidate: true })}
                            input={<OutlinedInput id="select-multiple-chip-category" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                        {_category&&_category.map((v,k) => (
                            <MenuItem
                                key={k}
                                value={v[1]}
                                style={getStyles(v[1], getValues('category')|| [], theme)}
                            >
                                {v[1]}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                     <FormControl fullWidth error={errors.type}>
                        <InputLabel id="demo-multiple-chip-label-type">Type</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label-type"
                            id="demo-multiple-chip-type"
                            multiple
                            {...register('type', {required:true})}
                            value={getValues('type') || []}
                            onChange={event=>setValue('type', event.target.value, { shouldValidate: true })}
                            input={<OutlinedInput id="select-multiple-chip-type" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                        {_type&&_type.map((v,k) => (
                            <MenuItem
                                key={k}
                                value={v[1]}
                                style={getStyles(v[1], getValues('type')|| [], theme)}
                            >
                                {v[1]}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    {Object.keys(finance).map(k=>(
                        <TextField
                            key={k}
                            placeholder={k=='calls' ? 'Default: Unlimited': ''}
                            label={finance[k][0]}
                            {...register(k, {required:false})}
                            error={errors[k]}
                        />
                    ))}

                </div>
                <div className='col-span-6 flex flex-col gap-2'>
                    <TextField
                        id="outlined-textarea"
                        label="Description"
                        fullWidth
                        multiline
                        rows={10}
                        error={errors['description']}
                        {...register('description', { required:true })}
                    />
                    <FormControl fullWidth error={errors.tags}>
                        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            {...register('tags', {required:true})}
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
                                style={getStyles(v[1], getValues('Tags')|| [], theme)}
                            >
                                {v[1]}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    
                    <div>
                        <Widget
                            uploadPreset='public_api'
                            sources= {['local', 'url']}
                            cloudName='ddv2aeipa'
                            cropping={false}
                            onSuccess={(result, { widget }) => 
                            {
                                if(result&&result.event=='success'){
                                    dispatch.models.SET({ 
                                        image_uploaded: result.event, 
                                        image_name: result.info.public_id + '.' + (result.info.original_extension || result.info.format),
                                        isUploaded: true
                                    })
                                widget.close();
                                }
                            }}
                        >
                            {({ open }) => {
                                return <LoadingButton 
                                    disabled={isUploaded}
                                    variant='contained' 
                                    onClick={()=> open()}
                                >
                                    Upload an Image
                                </LoadingButton>
                            }}
                        </Widget>
                    </div>
                    <div>
                        {image_uploaded&&image_uploaded=='success'&&<p>File uploaded successfully</p>}
                    </div>
                </div>
            </div>
            
            <div className='flex gap-2 absolute bottom-0 right-0'>
                <Button variant='outlined' onClick={()=>dispatch.models.SET({M:''})}>
                    Cancel
                </Button>
                <LoadingButton 
                    loading={apiAddLoading}
                    variant="contained" 
                    type="submit"
                >
                    Add
                </LoadingButton>
            </div>
        </form>

    </div>
}