import calendar from '../sources/assets/Calendar_Days.png';

const NotifyBox = ({title,date,desc}) => {
    return ( 
        <div className="container mt-5 mb-2 p-3 notifybox rounded">
    <div className="d-flex justify-content-between mb-3 bg-light rounded align-items-center">

    <p className=" poppinsmeduim fontsize14 p-2">{title}</p>
    <div className='d-flex align-items-center fontsize12'>
    <img src={calendar} alt="" /> 
    <span className="p-2">{date}</span>

    </div>
    </div>
    <div className='fontsize14'>
        
    {desc}
    </div>
    </div>
     );
}
 
export default NotifyBox;