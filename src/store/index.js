import { aTb, bTa } from "utils/wss";
import { store, persistor } from './data';
import { asfetch } from 'utils/asfetch';
// 
const SEND = async(path, _data) => 
{
  // console.log('path', path)
  const Auth = store.getState().auths || '';
  const wss = store.getState().models.wss || '';
  // 
  if(!wss){
    let { url, sign, key } = await asfetch();
    let wss = new WebSocket('wss://'+url+'/w'+sign);
    wss.ikey = key;
    wss.binaryType = 'arraybuffer';
    store.dispatch.models.SET({
      wss:wss
    })
    // 
    wss.onopen = async() => {
      if(wss&&wss.readyState===1) wss.send(await aTb(__data, wss.ikey));
    };
    wss.onmessage = async(d) => {
      store.dispatch.models.SET({...await bTa(d.data, wss.ikey)});
    };
  }
  // 
  if(wss) {
    wss.onmessage = async(d) => {
      store.dispatch.models.SET({...await bTa(d.data, wss.ikey)});
    };
  }
  // 
  let __data = {..._data, path };
  const __tk = (Auth && Auth.__tk) || '';
  if(__tk) __data = {...__data, __tk };
  // 
  if(wss&&wss.readyState==1) wss.send(await aTb(__data, wss.ikey));
}
// 
store.subscribe(() => {
  // console.log(store.getState());
});
// 
export {
  store,
  persistor,
  SEND
}