import twitter from "../sources/assets/twitter.png";
import facebook from "../sources/assets/facebook.png";
import linkedin from "../sources/assets/linkedin.png";

const Subscribe = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-center container-fluid pb-5"
      style={{ fontSize: "14px" }}
    >
      <div className="greentext mt-5 text-center ralewaymeduim">
        <div className="mb-3 image-container">
          Follow Us On:{" "}
          <a
            href="https://m.facebook.com/kelechukwu.cele"
            rel="noreferrer"
            className="ml-1"
            target="_blank"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/kingsley-okoronkwo-3256b5245"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} className="mx-1" alt="linkedin" />
          </a>{" "}
          <a
            rel="noreferrer"
            href="https://mobile.twitter.com/_DevMonk"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        {/* <p style={{marginBottom:"0"}}>
          Cargenie is popular in Nigeria for their quality service. <br /> We
          make a great rental experience by providing superior and satisfying
          services
        </p> */}
      </div>
      <div className="d-flex">
        <div className="p-3  d-flex align-items-center ">
          <span class="material-symbols-outlined  mr-1">language</span>
          <span>English</span>
        </div>
        <div className="p-3  d-flex align-items-center ">
          <span class="material-symbols-outlined mr-1">location_on</span>
          <span>Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
