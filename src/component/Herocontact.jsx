import { Link } from 'react-router-dom';
import './Hcontact.css'
const Hero = () => {
  return (
    <div >
      <div className='cult2'>
            <div className='soft'>
      <h1>Contact <br /> Queenie Hotel</h1>
      <h4> Your Trusted Partner in Comfort and Hospitality.</h4>
      {/* <p>We make your stay simple, secure, and satisfying. <br />Whether you’re here for business, leisure, or a longer visit,<br /> we offer personalized hospitality that meets your needs and exceeds your expectations.</p> */}
      </div>
      <div className='top'>
        <button> <Link to='/Contact' className='link'> Book an Appointment</Link></button>
        </div> 

      </div>
      
      

      </div>
  )
}

export default Hero
