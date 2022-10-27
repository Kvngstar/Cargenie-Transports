import Subscribe from "../../../component/subscribe";
import Whychoose from "../../../component/whychoose";
import Travelinput from "../../../component/travelinput";


const HomeComponent = () => {

    return ( 
        <div>
                <div className="first-section pb-5">

         
<div className="body1 d-flex justify-content-between pt-3 align-items-center">
  <div className="mx-auto mt-5">

  <div className=" mx-auto whitetext  b p-4 poppinsemibold">
    <h2 className="text-center">
      FAST AND EASY WAY TO RENT YOUR CAR
    </h2>

    <div className="d-block d-flex justify-content-center mt-4 align-items-center d">
      <span className="greenerbackground   rounded  w-75">
      <button className="btn robotoregular  w-100 bg-warning" >
        Rent Your Car
      </button>
      </span> 
    </div>
  </div>

<div className="second-section x mt-5">
  <h3 className="mb-3 poppinsemibold text-center whitetext">OR <br /> <br /> Book a Ride </h3>
<Travelinput checkShadow="second-section-child" textcolor="whitetext" />
</div> 

  </div>
</div>
</div>

<Whychoose />
<Subscribe/>
            
        </div>
     );
}
 
export default HomeComponent;