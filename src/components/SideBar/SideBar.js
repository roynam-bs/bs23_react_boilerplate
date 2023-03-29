import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SideBar() {
    return(
        <div className="side-bar">
            <div className="menu-item">
                <div className="menu-list-item">
                    <FontAwesomeIcon icon="fa fa-house" />
                    <span>Home</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-list-item">Settings</div>
            </div>
        </div>
    );
}

export default SideBar;
