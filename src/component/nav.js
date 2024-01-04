import { Link } from "react-router-dom";
import Logo from "./logo";
const Nav__ = () => {
  return (
    <div className="l d-flex carbg justify-content-between align-items-center flex-direction-row py-3 pb-3 px-2 box-shadow">
      <Logo />
      <div className="tohideclass">
        <Link to="login">
          {" "}
          <span className="ml-3 whitetext  robotomeduim btn-sm rounded d-flex justify-content-center align-items-center">
            <span class="material-symbols-outlined mr-1">login</span> <span>Login</span></span>
        </Link>
        <Link to="signup">
          <span className="ml-3 whitetext robotomeduim btn-sm rounded d-flex justify-content-center align-items-center">
            <span className="material-symbols-outlined mr-1">app_registration</span>
           <span>Sign-up</span>
          </span>
        </Link>
      </div>
       <div className="hamburger ml-3 hidd">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
    </div>
  );
};

export default Nav__;
