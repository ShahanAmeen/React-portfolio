import image1 from "./cravingswinebarimg.jpg"
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

      <a href="https://nestibry.github.io/pet-space/   " ><img id="image2" src={image1} alt="Cravings"/></a>
      <a href="https://shahanameen.github.io/prework-study-guide2/"> <img id="prework" src={image2} alt="Preworkstudyguide" /></a>
      <a href=" https://shahanameen.github.io/hw-01/"> <img id="seo" src={image3} alt="website correction"/></a>
      <a href="https://nestibry.github.io/pet-space/   " ><img id="image2" src={image4} alt="Cravings" /></a>
      <a href="https://shahanameen.github.io/prework-study-guide2/"> <img id="prework" src={image2} alt="Preworkstudyguide" /></a>
      <a href=" https://shahanameen.github.io/hw-01/"> <img id="seo" src={image2} alt="website correction" /></a>
    
    </div>
  )
}
export default Portfolio