import Travelinput from '../../../component/travelinput';

const CustomerBook = (props) => {

    console.log(props)
    return ( 
        <div className='px-2 mt-4'>
        <h4 >DashBoard</h4>
        <h6 className='pl-4 mt-3'>Welcome, Kingsley</h6>

        <div className='h mx-auto mt-5'>
            <h4 className='text-center mb-3'>Book your Ticket Here</h4>
            <Travelinput/>

        </div>
        <div className='my-5'>
        <h4>Recent Car Bookings</h4>
        <div className='table-control '>

        <table className='table table-sm '>
           
           <thead>
            <tr className='table-success'>
            <th>Bookings</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
            </tr>
            </thead>
            
            
            <tbody>
            <tr>
                <td>3b2345e</td>
                <td>Bus</td>
                <td>Done</td>
                <td>26/11/22</td>
                <td>4000</td>
            </tr>
            <tr>
                <td>3b2345e</td>
                <td>Sienna</td>
                <td>failed</td>
                <td>26/11/22</td>
                <td>4000</td>
            </tr>
            <tr>
                <td>3b2345e</td>
                <td>Bus</td>
                <td>progress</td>
                <td>26/11/22</td>
                <td>4000</td>
            </tr>


            </tbody>
           
        </table>


        </div>

        
        </div>
    </div>
     );
}
 
export default CustomerBook;