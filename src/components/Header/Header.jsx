import { Routes, Route, Link } from "react-router-dom";

import logo from "../../img/argentBankLogo.png";

const Header = () => {
  return (
    <header>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
