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

    const t1 = gsap.timeline();


    
  }

  
  

  return(
    <div>

      <div className="hello-world">
      </div>

      <div className="hello-world2">
      </div>

      
      

      {/* THE DIV DOING THE PINNING EFFECT AND THE ORANGE BACKGROUND COMING IN */}
      <div id="pinnedElementContainer">

          {/* div containing the writing and the white background */}
          <div className="white-box">
              <div className="white-text">
                Hello world
              </div>
          </div>


          {/* the div that will come in  */}
          <div className="orange-box">

          </div>


      </div>



      <div className="hello-world">
      </div>

      {/*  */}



    </div>
  );

    
}

export default App
