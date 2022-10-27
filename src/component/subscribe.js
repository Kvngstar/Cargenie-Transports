import message from "../sources/assets/message.png"
import twitter from "../sources/assets/twitter.png"
import facebook from "../sources/assets/facebook.png"
import linkedin from "../sources/assets/linkedin.png"

const Subscribe = () => {
  return (
    <div className="fourth-section container-fluid pb-5">
      <div className="pt-5 greentext d-flex justify-content-center align-items-center flex-column text-center ralewaymeduim">
        <h4 className="poppinsmeduim">Subscribe to Our NewsLetter</h4>
        <p>
          Subcribe to our Newsletter to get the latest update and Promtional
          offer
        </p>
      </div>
      <div className="p-3 w-100 mx-auto box-shadow f greenerbackground">
        <div className="input-group ">
          <div className="input-group-prepend outline-light">
            <span className="input-group-text bg-transparent">
              <img src={message} alt="" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""  
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-light"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="greentext mt-5 text-center ralewaymeduim">
        <div className="mb-3">Follow Us On: <a href="https://m.facebook.com/kelechukwu.cele" rel="noreferrer" className="ml-1" target="_blank" ><img src={facebook}  alt="facebook"/></a><a href="https://www.linkedin.com/in/kingsley-okoronkwo-3256b5245" rel="noreferrer" target="_blank" ><img src={linkedin} className="mx-1" alt="linkedin"/></a> <a rel="noreferrer" href="https://mobile.twitter.com/_DevMonk" target="_blank" ><img src={twitter}  alt="twitter"/></a></div>
        <p style={{marginBottom:"0"}}>
          Cargenie is popular in Nigeria for their quality service. <br /> We
          make a great rental experience by providing superior and satisfying
          services
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
