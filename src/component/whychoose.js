// import Box from "./box";
import speed from "../sources/assets/icon_speed.png"
import manylocation from "../sources/assets/a.png"
import protection from "../sources/assets/Vector.png"

const Whychoose = () => {
    return ( 
        <div className="third-section container-fluid d-flex justify-content-center align-items-center my-auto pt-4 pb-5">
        <div>
        <h2 className="text-center whitetext poppinsmeduim mb-5">Our Services</h2>
           <div className="e whitetext ralewaymeduim">
            {/* <Box Image=""  text="" /> */}
               <div>
                   <img src={speed} alt="" />
                   <div>Taxi Services</div>
               </div>
               <div>
                   <img src={manylocation} alt="" />
                   <div>Car Hire Agency</div>
               </div>
               <div>
                   <img src={protection} alt="" />
                   <div>Partner With Us</div>
               </div>
              
           </div>
           <div className="mt-5">
        <h2 className="text-center whitetext poppinsmeduim mb-4">Why Choose Cargenie?</h2>
           <div className="e whitetext ralewaymeduim">
            {/* <Box Image=""  text="" /> */}
               <div>
                   <img src={speed} alt="" />
                   <div>Fast and Easy to Book</div>
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
          
       </div>
     );
}
 
export default Whychoose;