import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
// 
export default () =>
{
  const { onLearn } = useSelector((state) => state.models);
  // 
  const dispatch = useDispatch()
  // 
  const apis = {
      introduction: 'Introduction',
      what: 'What is API',
      prerequisite: 'Prerequisite & Terminologies',
      methods: 'API Methods',
      setup: 'Setup API Environment',
      coding: 'Coding API',
      third: 'Use third-party API',
      webhook: 'APIs vs Webhooks',
      http: 'HTTP status codes',
      dynamic: 'Dynamic Routes',
      // glitch: 'Glitch for hosting',
      // mongo: 'Use MongoDB for database.',
      // redis: 'Caching with redis',
      // rate: 'API Rate limit',
      // logs: 'APIs logs system',
      // proxy: 'API Proxy'
  }
  // 
  return <div className='py-5 px-2'>
    <div className='xl:w-[1000px] m-auto'>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
            <div className="xl:col-span-4 flex flex-wrap flex-row md:flex-col md:flex-nowrap gap-3">
                {Object.keys(apis).map(k=>(
                  <Link to={k} key={k} shallow className={(onLearn==k ? 'underline': '' ) + ' hover:underline text-xl'} onClick={()=>dispatch.models.SET({onLearn:k})}>
                    {apis[k]}
                  </Link>
                ))}
            </div>
            <div className='xl:col-span-8'>
               <Outlet />
            </div>
        </div>
    </div>
  </div>
}