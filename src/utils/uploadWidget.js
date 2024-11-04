import { createContext, useEffect } from "react";
import { useSelector } from 'react-redux';
// 
const CloudinaryScriptContext = createContext();
// 
export default () => 
{
    const { widget } = useSelector((state) => state.models);
    useEffect(()=>{
        document.getElementById("upload_widget").addEventListener(
            "click",
            (e) => {
                e.preventDefault();
                widget.open()
            },
            false
        );
    },[])
    // 
    return <CloudinaryScriptContext.Provider>
        <button id="upload_widget" className="cloudinary-button">Upload Logo</button>
    </CloudinaryScriptContext.Provider>
}

export { CloudinaryScriptContext };