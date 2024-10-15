import './style.css';
import logo from 'assets/images/logo.svg';
// 
export default () => 
{
    return <div className="loading-wrapper">
        <div className="loading-text">
            <img src={logo} width="100%" height="100%" /> 
        </div>
        <div className="loading-content"></div>
    </div>
}