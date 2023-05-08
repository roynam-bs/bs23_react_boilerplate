import './SignIn.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const SignIn = () => {
  return <div>
      <div className="back">
          <Link className="back-link" to="/">
              <FontAwesomeIcon className="back-icon" icon={faCircleArrowLeft} />
              <span>Back</span>
          </Link>
      </div>
      <div className="sign-in-block">
          <div className="panel-header">
              <span>Sign In</span>
          </div>
          <div className="panel">
              <form name="signInForm">
                  <div className="credential-block">
                      <div className="credential-label">
                          <label>Username</label>
                      </div>
                      <input type="text" className="credential-input" placeholder="Enter username"/>
                  </div>
                  <div className="credential-block">
                      <div className="credential-label">
                          <label>Password</label>
                      </div>
                      <input type="password" className="credential-input" placeholder="Enter username"/>
                  </div>
                  <div>
                      <button type="submit" className="sign-in-button">Sign In</button>
                  </div>
              </form>
              <div className="sign-up-block">
                  <a className="sign-up-link">Create new account</a>
              </div>
          </div>
      </div>
  </div>
};

export default SignIn;
