'use client'
import { useSelector, useDispatch } from 'react-redux';
import logo from 'assets/images/logo.svg';
// 
export default () => 
{
  const { M } = useSelector((state) => state.models);
  const dispatch = useDispatch();
  // 
  if(!M) return <></>
  const { c } = M;
  // 
  return <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/50 size-full flex justify-center items-center'> 
    <div className='bg-white relative rounded-md' style={{boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'}}>
      <div className='absolute top-1 right-3 text-2xl cursor-pointer' onClick={()=>dispatch.models.SET({M:''})}>X</div>
      <div className='h-full flex flex-col items-center p-5'>
        <img src={logo} width="90" className='absolute -top-[45px] rounded-full bg-white p-3 overflow-visible z-50' />
        <div className='py-10 flex justify-center items-center'>{c&&c}</div>
      </div>
    </div>
  </div>
}