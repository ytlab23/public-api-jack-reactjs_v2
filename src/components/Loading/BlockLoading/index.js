import { SyncOutlined } from '@ant-design/icons';
// 
export default props => 
{
    const { children, loading, m } = props;
    // 
    if(loading) return <div style={{padding:m||30}}>
        <center>
            <SyncOutlined spin style={{color:"#df4133",fontSize:35,opacity:.7}} /> 
        </center>
    </div>;
    // 
    return <>{ children }</>;
}