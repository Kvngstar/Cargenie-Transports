import message from "../sources/assets/message.png"

const Subscribe = () => {
  return (
    <div className="fourth-section container mb-5">
      <div className="mt-5 whitetext d-flex justify-content-center align-items-center flex-column text-center">
        <h3>Subscribe to Our NewsLetter</h3>
        <p>
          Subcribe to our Newsletter to get the latest update and Promtional
          offer
        </p>
      </div>
      <div className="p-3 w-100 mx-auto f greenerbackground">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
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
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="whitetext mt-5 text-center">
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
