import './TopBar.css';
import logo from "../../assets/logo.svg";

function TopBar () {
    return (
        <div className="top-bar">
            <div className="logo-div">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
            <div className="search-bar"></div>
            <div className="user-div pull-right">
                <button className="sign-in-button">Sign in</button>
            </div>
        </div>
    )
}

export default TopBar;
