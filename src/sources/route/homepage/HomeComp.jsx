import Subscribe from "../../../component/subscribe";
import Whychoose from "../../../component/whychoose";
import Travelinput from "../../../component/travelinput";
import topdesign from "../../assets/topcar1.png";

const HomeComponent = () => {
    return ( 
        <div>
                <div className="first-section mb-5">

         
<div className="body1 d-flex justify-content-between mt-3 align-items-center">
  <div className="mx-auto">

  <div className="text-white mx-auto  b p-4">
    <h2>
      FAST AND EASY WAY TO RENT YOUR CAR
    </h2>

    <div className="d-block d-flex justify-content-center mt-4 align-items-center d">
      <span className="lightGreen rounded  w-75">
      <button className="btn btn-light w-100">
        Rent Your Car
      </button>
      </span>
    </div>
  </div>

<div className="second-section x mt-5">
  <h2 className="mb-3 text-center whitetext">OR <br /> <br /> Book a Ride </h2>
<Travelinput />
</div>

  </div>

  <div className="tohideclass">

  <img className="a" src={topdesign} alt="" />
  </div>
</div>
</div>

<Whychoose />
<Subscribe/>
            
        </div>
     );
}
 
export default HomeComponent;