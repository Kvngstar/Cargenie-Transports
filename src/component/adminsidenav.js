import { Link } from 'react-router-dom';
import cloudicon from '../sources/assets/Cloud_Download.png';
import calendar from '../sources/assets/Calendar_Days.png';
import users from '../sources/assets/Users.png';
import user from '../sources/assets/User1.png';
import logout from '../sources/assets/logout.png';
import settings from '../sources/assets/settings_icon.png';
import help from '../sources/assets/help_icon.png';
import Logout from "../sources/route/homepage/logout"

const AdminMenuhalf = () => {
    return ( 
        <div className="light j">
        <div className='d-flex whitetext w-100 py-2 greenerbackground justify-content-around align-items-center'>
          <img src={cloudicon} style={{height: "25px"}} className='mx-2' alt="" />  <h5>DashBoard</h5>  <span className='btn btn-sm mx-2' style={{backgroundColor: "#7BB66D", color: "#f2f2f2"}}>New</span>
        </div>
        <div className='g lightback mt-3 poppinsmeduim fontsize14'>
            <div className="d-flex align-items-center ">
              
                
                 <img   src={user} alt="" />
            
                  <span><Link to="/admin/carbooking" >Rental transaction</Link></span>
            </div>
            <div className='d-flex  align-items-center'>
                <img src={calendar} alt="" /> <span><Link to="carlisting" >Car Listing</Link></span>
            </div>
            <div className='d-flex align-items-center'>
                <img src={users} alt="" /> <span><Link to="notification" >Notification</Link> </span> 
            </div>

            <div className='d-flex align-items-center'>
                <img src={users} alt="" /> <span><Link to="carowner">Car Owners</Link></span> 
            </div>
            <div className='d-flex align-items-center'>
                <img src={users} alt="" /> <span><Link to="users" >Users</Link></span> 
            </div>
            <div className='d-flex align-items-center'>
                <img src={users} alt="" /> <span><Link to="processing">Processing Unit</Link></span> 
            </div>
        
       
        <div className='mt-5 d-flex align-items-center align-items-center'>
                <img src={settings} alt="" /> <span>Settings</span>
            </div>
        <div className=' d-flex align-items-center align-items-center'>
                <img src={help} alt="" /> <span>Help</span>
            </div>
        <div className='d-flex align-items-center align-items-center'>
                <img src={logout} alt="" /><Link onClick={Logout}><span>Logout</span></Link>  
            </div>

        </div>
    </div>
     );
}
 
export default AdminMenuhalf;