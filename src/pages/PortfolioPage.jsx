
import image2 from "./petSpace.png"
import image3 from "./weatherForecast.png"
import image4 from "./flashcardDatabase.png"

import "./portfolio.css"
function Portfolio() {
  return (
    <div>
      <h2>
        This is the Portfolio
      </h2>

      
      <a href="https://nestibry.github.io/pet-space/"> <img id="prework" src={image2} alt="pet-space" /></a>
      <a href=" https://shahanameen.github.io/Weather-API/"> <img id="seo" src={image3} alt="Weather-API"/></a>
      <a href="https://flash-card-database-b48354848dbb.herokuapp.com/ " ><img id="image2" src={image4} alt="Flash-Card" /></a>
   
    
    </div>
  )
}
export default Portfolio