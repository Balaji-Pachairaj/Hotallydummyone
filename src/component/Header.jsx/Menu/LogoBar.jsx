import React from 'react'
import "./LogoBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays , faHotel} from '@fortawesome/free-solid-svg-icons'
const LogoBar = () => {
  return (
    <div className='logoBox'>
      <div className="calenderBox">
        <FontAwesomeIcon  icon={faCalendarDays} />
      </div>
      <div className="hotelBox">
        <FontAwesomeIcon icon={faHotel} />
      </div>
    </div>
  )
}

export default LogoBar
