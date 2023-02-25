import {Player} from "@lottiefiles/react-lottie-player"


const NotFound = () => {
  return (
    <div className="container-fluid whitetext d-flex justify-content-center align-items-center notfound">
  
      <div className="d-flex flex-column justify-content-center align-items-center">
      <Player
                autoplay
                loop
        
                src=" https://lottie.host/95851997-a8a9-417d-883d-d6feac0711bc/g6rtf3R3Zn.json"
                
                style={{ height: '300px', width: '300px' }}
             
              >
              </Player>

     
      </div>
    </div>
  );
};

export default NotFound;
