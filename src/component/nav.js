import Logo from './logo';
import bell from '../sources/assets/notificationbell.png';
import message from '../sources/assets/messageicon.png';
import list from '../sources/assets/Vector-1.png';
import { Link } from 'react-router-dom';


const Nav__ = () => {
    return ( 
        <div className="l greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-3 mb-3 px-2">
         
        <Logo/>
        <div className='tohideclass'>

        <Link to="login"> <button className='ml-3  btn btn-sm btn-light'>Login</button></Link>
        <Link to="signup"><button className='ml-3  btn btn-sm btn-success'>Sign up</button></Link>

</div>
          
          
         
            
            <button className='ml-3 hidd btn btn-sm btn-info'>Menu</button>

           
           </div>
        
     );
}
 
export default Nav__;