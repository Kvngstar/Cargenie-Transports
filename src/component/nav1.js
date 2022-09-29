import Logo from './logo';
import bell from '../sources/assets/notificationbell.png';
import message from '../sources/assets/messageicon.png';
import list from '../sources/assets/Vector-1.png';


const Nav_ = () => {
    return ( 
        <div className="l greenerbackground d-flex justify-content-between align-items-center flex-direction-row py-3 mb-3 px-2">
         
        <Logo/>
           <div className="notification mr-4">
            <span className='noticon-wrap'>
             <img src={bell} />
                <span className='noticon'>
                    <p className='notp'>1</p>
                </span>
                
            </span>
            <span className='noticon-wrap'>
             <img src={list} className="ml-3"/>
             <span className='noticon'>
                    <p className='notp'>3</p>
                </span>
            </span>
            <span className='noticon-wrap'>
             <img src={message} className=" ml-3"/>
             <span className='noticon'>
                    <p className='notp'>0</p>
                </span>
            </span>
         
            
            <button className='ml-3 btn btn-sm btn-info kk' id="kk">Menu</button>

           
           </div>
         </div>
     );
}
 
export default Nav_;