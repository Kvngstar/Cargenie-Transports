import { Link } from 'react-router-dom';
import Logo from './logo';
import login from "../sources/assets/login.png"
import signup from "../sources/assets/signup.png"
const Nav__ = () => {
    return ( 
        <div className="l d-flex carbg justify-content-between align-items-center flex-direction-row py-3 pb-3 px-2 box-shadow">
         
        <Logo/>
        <div className='tohideclass'>

        <Link to="login">  <span className='ml-3 whitetext  robotomeduim btn'><img src={login} alt="login"/> Login</span></Link>
        <Link to="signup"><span className='ml-3 whitetext robotomeduim btn'> <img src={signup} alt="signup"/> Sign-up</span></Link>

</div>
  <div className="hamburger ml-3 hidd"><div className="div1"></div><div className="div2"></div><div className="div3"></div></div>
     </div>
 );
}
 
export default Nav__;