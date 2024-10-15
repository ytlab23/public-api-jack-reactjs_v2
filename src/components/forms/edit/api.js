'use client'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Select, MenuItem, InputLabel, Button, Divider, FormControl, OutlinedInput, Box, Chip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { getStyles } from 'utils/styles';
import { Widget } from 'react-cloudinary-upload-widget'
import { AdvancedImage } from '@cloudinary/react';
import { SEND } from 'store'
// 
export default props =>
{
    const { _category, _type, _plan, _trial, _featured, _tag, image_name, apiEditLoading,image_uploaded, cld } = useSelector((state) => state.models);
    const [ id, title, category, type, description, plan, trial, price, calls, featured, tags, _image_name, external ] = props.data;
    // 
    const dispatch = useDispatch();
    const theme = useTheme();
    // 
    const { register, handleSubmit, getValues, setValue, control, formState: { errors } } = useForm()
    const onSubmit = (data) => 
    {
        dispatch.models.SET({
            apiEditLoading: true
        })
        SEND('api/edit', { 
            api_id: id,
            ...data, 
            ...{image_name: image_name||_image_name}
        })
    }
    // 
    const pre = {
        plan: ['Plan', _plan, plan ],
        trial: ['Trial', _trial, trial ],
        featured: ['Featured', _featured, featured ]
    }
    // 
    const finance = {
        price: ['Price', price],
        calls: ['Calls', calls],
    }
    // 
    useEffect(()=>{
        setValue('tags', JSON.parse(tags))
        setValue('category', JSON.parse(category))
        setValue('type', JSON.parse(type))
        dispatch.models.SET({
            image_name: ''
        })
    },[])
    // 
    return <div className='relative w-[70vw] h-[70vh]'>
        <Divider className='pb-5'>Edit API</Divider> 

        <form onSubmit={handleSubmit(onSubmit)} id='form'>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-6 flex flex-col gap-3'>
                    <TextField
                        error={errors['title']}
                        label="Title"
                        defaultValue={getValues('title') || title}
                        {...register('title', { required:true })}
                    />
                    <TextField
                        error={errors.title}
                        label="External Link"
                        defaultValue={getValues('external') || external}
                        {...register('external', {required:true})}
                    />

                    {Object.keys(pre).map(k=>(
                        <FormControl key={k} error={errors[k]}>
                            <InputLabel id={k}>{pre[k][0]}</InputLabel>
                            <Select  
                                id={k}
                                labelId={k}
                                {...register(k, { required:true })}
                                value={getValues(k) || pre[k][2][0] }
                                label={pre[k][0]}
                                onChange={event=>setValue(k, event.target.value, {shouldValidate: true})}
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

                    <FormControl fullWidth error={errors.category}>
                        <InputLabel id="demo-multiple-chip-label-category">Category</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label-category"
                            id="demo-multiple-chip-category"
                            multiple
                            {...register('category', {required:true})}
                            value={getValues('category') || JSON.parse(category) || []}
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
                                style={getStyles(v[1], getValues('category') || [], theme)}
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
                            value={getValues('type') || JSON.parse(type) || []}
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
                                style={getStyles(v[1], getValues('type') || [], theme)}
                            >
                                {v[1]}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    {Object.keys(finance).map(k=>(
                        <TextField
                            key={k}
                            InputProps={{ inputProps: { step: 'any' } }}
                            label={finance[k][0]}
                            {...register(k, {required:false})}
                            defaultValue={getValues(k) || finance[k][1]}
                            error={errors[k]}
                            type="number"
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
                        {...register('description', {required:true})}
                        defaultValue={getValues('description') || description}
                    />
                    <FormControl fullWidth error={errors.tags}>
                        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            {...register('tags', {required:true})}
                            value={ getValues('tags') || JSON.parse(tags) || []}
                            onChange={event=>setValue('tags', event.target.value, {shouldValidate: true})}
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
                                style={getStyles(v[1], getValues('tags') || [] , theme)}
                            >
                                {v[1]}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <div>
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
            </div>
            
            <div className='flex gap-2 absolute bottom-0 right-0'>
                <Button variant='outlined' onClick={()=>dispatch.models.SET({M:''})}>
                    Cancel
                </Button>
                <LoadingButton 
                    loading={apiEditLoading}
                    variant="contained" 
                    type="submit"
                >
                    Save
                </LoadingButton>
            </div>
        </form>

    </div>
}