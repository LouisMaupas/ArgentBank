import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/argentBankLogo.png";
import { useLogged, useUserData } from "../../utils/hooks/customHooks";
import { userLogout } from "../../features/slices/auth";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const Header = () => {
  const logged = useLogged(),
    userData = useUserData(),
    dispatch = useDispatch(),
    navigate = useNavigate();

  /**
   * Logout
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
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {userData.firstName}
              </Link>
              <div className="main-nav-item" onClick={signOut}>
                <i className="fa fa-user-circle"></i>
                Sign Out
              </div>
            </>
          ) : (
            <>
              <Link className="main-nav-item" to="/sign-in">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
