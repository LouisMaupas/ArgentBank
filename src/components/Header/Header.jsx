import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/argentBankLogo.png";
import { useLogged, useUserData } from "../../utils/hooks/customHooks";
import { userLogout } from "../../features/slices/auth";
import { useDispatch } from "react-redux";
import "./Header.css";
import loginIcon from "../../img/login.svg";
import logoutIcon from "../../img/logout.svg";
import profileIcon from "../../img/profile.svg";

const Header = () => {
  const logged = useLogged(),
    userData = useUserData(),
    dispatch = useDispatch(),
    navigate = useNavigate();

  /**
   * Disconnects the user and close session
   */
  const signOut = () => {
    dispatch(userLogout());
    localStorage.clear();
    navigate("/");
  };

  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {logged ? (
            <>
              <div className="header__buttons">
                <Link className="main-nav-item d-flex" to="/user">
                  <i className="fa fa-user-circle"></i>
                  <img className="header-buttons__icon" src={profileIcon}></img>
                  <div>{userData.firstName}</div>
                </Link>
                <div className="main-nav-item d-flex" onClick={signOut}>
                  <i className="fa fa-user-circle"></i>
                  <img className="header-buttons__icon" src={logoutIcon}></img>
                  <div>Sign Out</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link className="main-nav-item d-flex" to="/sign-in">
                <i className="fa fa-user-circle"></i>
                <img className="header-buttons__icon" src={loginIcon}></img>
                <div>Sign In</div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
