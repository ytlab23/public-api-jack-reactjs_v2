import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// 
import 'App.scss';
//
import Routes from 'config/routes';
import PageLoading from 'components/Loading';
import Modal from 'components/Modal';
// 
import { asfetch } from 'utils/asfetch';
import { Cloudinary } from "@cloudinary/url-gen";
//  
export default () =>
{
  const { Auth, AuthDel, A } = useSelector((state) => state.models);
  // 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'ddv2aeipa'
    }
  });
  // 
  useEffect(()=>{

    const getData = async() =>
    {
      let {url, sign, key} = await asfetch();
      // 
      let wss = new WebSocket('wss://'+url+'/w'+sign);
      wss.binaryType = 'arraybuffer';
      wss.ikey = key;
      // 
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: 'ddv2aeipa',
          uploadPreset: 'public_api',
          sources: ['local', 'url'],
          cropping: false,
          multiple: false
        },
        (error, result) => {
          if(!error && result&&result.event=='success'){
            dispatch.models.SET({ 
                image_uploaded: result.event, 
                image_name: result.info.public_id + '.' + (result.info.original_extension || result.info.format),
                isUploaded: true
            })
          widget.close();
          }
        }
      );
      // 
      dispatch.models.SET({
        wss: wss,
        cld,
        widget
      })
    }
    getData()
  },[])
  // 
  useEffect(() => {
    if(!Auth) return;
    dispatch.auths.SET({ ...Auth });
  }, [Auth]);
  //
  useEffect(() => {
      if(!AuthDel) return;
      dispatch.auths.DEL();
      window.location.assign(`/`);
  }, [AuthDel]);
  // 
  useEffect(() => {
      if(!A||!A.u) return;
      navigate('/'+A.u);
      dispatch.models.SET({A:''})
  }, [A]);
  // 
  return <>
    <Suspense fallback={<PageLoading />}>
      <Routes />
    </Suspense>
    <Modal />
  </>
}