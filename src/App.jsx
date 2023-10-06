import { useEffect } from "react"
import "./index.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"



function App() {

  gsap.registerPlugin(ScrollTrigger);
  

  //  THE USE EFFECT HOOK IS BEING CALLED HERE
  useEffect(() => {

    ParallaxAnimation()
  },[]);



  // ALL THE ANIMATION RELATED STUFF WILL HAPPEN IN THIS FUNCTION
  function ParallaxAnimation() {


    gsap.registerPlugin( ScrollTrigger);

    
   


    
  }

  
  

  return(
    <div>

    
    {/* FIRST IMAGE CONTAINING DIV */}
      <div className="parallaxContainer Pcontainer1">
        <div id="parallaxImage1" className="parallaxImage">
          <h1 className=" text-8xl font-black">Image One</h1>   
        </div>
      </div>


    {/* SECOND IMAGE CONTAINING DIV */}
    <div className="parallaxContainer Pcontainer2">
        <div id="parallaxImage2" className="parallaxImage3">
          <h1 className=" text-8xl font-black">Image Two</h1>   
        </div>
      </div>



    {/* THIRD IMAGE CONTAINING DIV */}
    <div className="parallaxContainer">
        <div id="parallaxImage3" className="parallaxImage3">
          <h1 className=" text-8xl font-black">Image Three</h1>   
        </div>
      </div>



    {/* FOURTH IMAGE CONTAINING DIV */}
    <div className="parallaxContainer">
        <div id="parallaxImage4" className="parallaxImage3">
          <h1 className=" text-8xl font-black">Image Four</h1>   
        </div>
      </div>






    </div>
  );

    
}

export default App
