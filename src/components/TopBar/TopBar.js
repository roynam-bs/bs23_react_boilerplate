import './TopBar.css';
import logo from "../../assets/logo.svg";
import {useNavigate} from "react-router-dom";


const TopBar = () => {
    const navigate = useNavigate();
    function navigationHandler() {
        navigate('/sign-in')
    }
    return <div className="top-bar">
            <div className="logo-div">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
            <div className="search-bar">
                <form name="searchForm">
                    <div className="search">
                        <input type="text" className="search-bar" placeholder="Enter search key word"/>
                    </div>
                </form>
            </div>
            <div className="user-div pull-right">
                <button className="button-sign-in" onClick={navigationHandler}>Sign in</button>
            </div>
        </div>
}

export default TopBar;
