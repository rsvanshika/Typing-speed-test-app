import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
        <div class="links">
            <a href="#"> <FontAwesomeIcon className='social' icon={faGithub} /> </a>
            <a href="#"> <FontAwesomeIcon className='social' icon={faLinkedin} />  </a>
            <a href="#"> <FontAwesomeIcon className='social'icon={faInstagram} /> </a>
            <a href="#"> <FontAwesomeIcon className='social' icon={faEnvelope} /> </a>
        </div>
        <div className='themeButton'>

        </div>
    </div>
  )
}

export default Footer