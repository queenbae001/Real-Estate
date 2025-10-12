
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
          <li> <Link to='/'className="link">Home</Link> </li>
          <li> <Link to='/About' className="link">About</Link> </li>
          <li> <Link to='/Contact' className="link">Contact</Link>  </li>
        </ul>
        <button><Link to='/About'className='link'>Click To Book</Link></button>
      </div>
    </div>
    </>
  )
    
  
      
  
}


export default Nav
