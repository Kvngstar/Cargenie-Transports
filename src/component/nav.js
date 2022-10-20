import Logo from './logo';
import { Link } from 'react-router-dom';

import jwt from '../services/userService'
const Nav__ = () => {
    return ( 
        <div className="l greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-3 mb-3 px-2">
         
        <Logo/>
        <div className='tohideclass'>

        <Link to="login"> <span className='ml-3 whitetext '>Login</span></Link>
        <Link to="signup"><span className='ml-3 whitetext '>Sign up</span></Link>

</div>
          
          
         
            
          
          <div className="hamburger ml-3 hidd"><div className="div1"></div><div className="div2"></div><div className="div3"></div></div>
    
           
           </div>
        
     );
}
 
export default Nav__;