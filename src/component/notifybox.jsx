import calendar from '../sources/assets/Calendar_Days.png';
import link from '../sources/assets/linkage.png';
import seenpic  from '../sources/assets/seen2.png';


const NotifyBox = ({title,date,desc,seen}) => {
    return ( 
        <div className="container mt-5 mb-2 p-3 notifybox rounded">
    <div  className="d-flex-between mb-3 bg-light rounded ">
      <div>

    <p className="mb-0 poppinsmeduim fontsize14 p-2"><img   src={link} style={{height:"18px",width: "auto"}} alt="" /> {title}</p>
      </div>
    <div className='d-flex align-items-center p-2 fontsize12'>
        <span className="mr-3"><img src={seenpic} style={{height:"22px",width: "auto"}}  alt="" /> {seen} </span>
    <img src={calendar} alt="" /> 
    <span className="ml-1"> {date} </span>  

    </div>
    </div>
    <div className='fontsize14'>
        
    {desc}
    </div>
    </div> 
     );
}
 
export default NotifyBox;