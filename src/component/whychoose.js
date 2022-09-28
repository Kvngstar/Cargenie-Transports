import speed from "../sources/assets/icon_speed.png"
import manylocation from "../sources/assets/a.png"
import protection from "../sources/assets/Vector.png"

const Whychoose = () => {
    return ( 
        <div className="third-section container-fluid d-flex justify-content-center align-items-center my-auto pt-4 pb-5">
        <div>
        <h2 className="text-center whitetext mb-5">Why Choose Cargenie?</h2>
           <div className="d-flex flex-wrap  justify-content-around e whitetext">
               <div>
                   <img src={speed} alt="" />
                   <div>Fast and Easy a Book</div>
               </div>
               <div>
                   <img src={manylocation} alt="" />
                   <div>Many Pickup location</div>
               </div>
               <div>
                   <img src={protection} alt="" />
                   <div> Satisfied Customer</div>
               </div>
           </div>

        </div>
          
       </div>
     );
}
 
export default Whychoose;