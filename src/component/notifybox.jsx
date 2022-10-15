import calendar from '../sources/assets/Calendar_Days.png';

const NotifyBox = ({title,date,desc}) => {
    return ( 
        <div className="container mt-5 mb-2 p-3 notifybox rounded">
    <div className="d-flex justify-content-between mb-3 bg-light rounded">

    <h6 className=" p-2">Title: {title}</h6>
    <div className='d-flex align-items-center'>
    <img src={calendar} alt="" />
    <span className="p-2">{date}</span>

    </div>
    </div>
    
    {desc}
    </div>
     );
}
 
export default NotifyBox;