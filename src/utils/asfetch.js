export async function asfetch(){
    let _r = {};
    try {
        let _g = await fetch('https://k.public-apis.app/pa', {
            // headers: {
            //     "user-agent": "PUBLIC_API_IO"
            // }
        }).then(res => res.text());
        // console.log(_g)
        let _gg = _g.split('-');
        _r = {
            url:  _gg[0]+"-"+_gg[1],
            sign: _gg[2],
            key: new Uint16Array(_gg[3].split('').map(Number))
        }
    } catch (error) {
        // console.log(error)
    }
    // 
    return _r;
}