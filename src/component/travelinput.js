import location from "../sources/assets/location.png"

const Travelinput = () => {
    return ( 

      <form>
        <div className="py-3 text-center px-2 second-section-child d-flex flex-wrap rounded mb-5 g">
        <div>
          <div>Pickup Location</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text bg-transparent" id="addon-wrapping">
                <img src={location} /> 
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Ajah, Lagos"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div>
          <div>to</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <div className="input-group-prepend ">
                <span className="input-group-text bg-transparent" id="addon-wrapping">
                  <img src={location} />                   </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Airport, Ikeja"
              />
            </div>
          </div>
        </div>
        <div>
          <div>Pickup Date</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <input
                type="date"
                className="form-control"
                placeholder="22/9/2022"
              />
            </div>
          </div>
        </div>
        <div>
          <div>Time</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <input
                type="date"
                className="form-control"
                placeholder="30/9/2022"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group d-flex flex-wrap justify-content-center align-items-center">
       <div className="input-group-prepend w-50">

      <input className="mt-2 p-2 form-control bg-transparent "  type="text"  placeholder=" Price: N4000" disabled/>
       </div>
      <select className="custom-select mt-2 p-2"  type="text" placeholder="Car type">
        <option value="">Choose a car</option>
        <option value="">Exquisite</option>
        <option value="">Sienna</option>
        <option value="">18 Seaters Bus</option>
      </select>
      <div className="input-group-append">

      <input type="submit" className="btn btn-success mt-2" value="Book"/>

      </div>
      </div>
      
      </form>
     );
}
 
export default Travelinput;