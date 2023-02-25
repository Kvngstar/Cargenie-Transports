import {Player} from "@lottiefiles/react-lottie-player"
const Loading = () => {
  return (
    <div id="preloadcont">

         <Player
                autoplay
                loop
        
                src="https://lottie.host/8e41b596-52d8-4047-ade1-af18e5a106ad/fGHblZH1rI.json"
                style={{ height: '200px', width: '200px' }}
              >
              </Player>
    </div>
  );
};

export default Loading;
