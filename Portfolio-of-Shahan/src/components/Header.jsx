import {Link} from "react-router-dom"
import "./Header.css"
import headshot from "./ShahanUpdatedlinkedIn.jpg"
function Header(){
  return(
    

  <div className="div-flex">
    <div className="header-info">
<img id="image" src={headshot} alt="Shahan professionalpic" />
<h4 className="main-name">
  Shahan Ameen
</h4>
<h4 className="main-name">
  Junior Developer 
</h4>
   </div>

<ul>
  
  <Link to="/"><li>About</li></Link>
  <Link to="/portfolio"><li>Portfolio</li></Link>
  <Link to="/contact"><li>Contact</li></Link>
  <Link to="/resume"><li>Resume</li></Link>

</ul>

    </div>
  )
}
export default Header