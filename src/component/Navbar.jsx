
import { Link, Links } from "react-router-dom"
import Image from '../assets/love.jpeg'
import './Navbar.css'

const Nav = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <img src={Image} alt="" />
      </div>
      <div className="navlinks">
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/About'>About</Link> </li>
          <li> <Link to='/Contact'>Contact</Link>  </li>
        </ul>
        <button>Click to Rent</button>
      </div>
    </div>
    </>
  )
    
  
      
  
}


export default Nav
