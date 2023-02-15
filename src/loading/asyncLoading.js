import { Player } from "@lottiefiles/react-lottie-player";


const AsyncLoading = (element,loading) => {
    return ( 
        <button
          type="submit"
          className="btn  mx-auto w-100"
          disabled
        >
        
        <Player
                autoplay
                loop
                src="https://lottie.host/42dc5709-db75-43e2-89b9-7e7d87d256fa/O5R1VPRMsb.json"
                style={{ height: '100px', width: '100px' }}
             
              >
              </Player></button>
     );
}
 
export default AsyncLoading;