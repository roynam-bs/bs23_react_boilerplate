import './SideBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return <div className="side-bar">
            <div className="menu-list">
                <Link className="menu-list-item" to="/">
                    <FontAwesomeIcon className="item-icon" icon={faHouse} />
                    <span>Home</span>
                </Link>
            </div>
            <div className="menu-list">
                <Link className="menu-list-item" to="/settings">
                    <FontAwesomeIcon className="item-icon" icon={faGear} />
                    <span>Settings</span>
                </Link>
            </div>
        </div>
}

export default SideBar;
