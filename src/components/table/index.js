import { Pagination } from '@mui/material';
// 
export default props => 
{
    const { children, columns, data, pageChange } = props;
    // 
    const current = data&&data[0]&&data[0][0];
    const total = data&&data[0]&&data[0][1];
    const pages = data&&data[0]&&data[0][2];
    const list = data&&data[1]||[];
    // 
    return <div className='border'> 
        <table className='w-full'>
            <thead>
                <tr>
                    {columns&&columns.map((v,k)=>(
                        <th key={k}>{v[0]}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {list&&list.map((vv,kk)=>(
                    <tr key={kk}>
                        {columns&&columns.map((v,k)=>(
                            <td key={k}>
                                {v[1]&&v[1](vv,kk)||vv[k]+''}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {pageChange?
            <div className="flex justify-center p-5 border-t">
                <Pagination 
                    page={current&&current[0] || 1} 
                    count={pages&&pages || 1} 
                    onChange={(event, value) => {
                        if((current&&current[0] ||1)==value) return
                        pageChange({page:value})
                    }}
                    variant="outlined" shape="rounded"
                />
            </div>
        :<></>}
        {children}
    </div>
}