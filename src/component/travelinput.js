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
                <span className="input-group-text" id="addon-wrapping">
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
          <div>Return Location</div>
          <div>
            <div className="input-group input1 flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
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
          <div>Return Date</div>
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
      <div className="d-flex flex-wrap justify-content-center align-items-center">
 
      <input className="mt-2 p-2"  type="text" value="N4000" placeholder="price: N4000" disabled/>
      <select className="input mt-2 mx-2 p-2"  type="text" placeholder="Car type">
        <option value="">Choose a car</option>
        <option value="">Exquisite</option>
        <option value="">Sienna</option>
        <option value="">18 Seaters Bus</option>
      </select>
      <input type="submit" className="btn btn-success mt-2" value="Book"/>
      </div>
      
      </form>
     );
}
 
export default Travelinput;