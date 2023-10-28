import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faKeyboard, faCircleUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className="header">
        <h1 className='logo'>TypeCat  <FontAwesomeIcon  className="keyboard" icon={faKeyboard}/> </h1>
       
        <p className="usericon"> <FontAwesomeIcon icon={faCircleUser}   className="user-icon" /></p>
    </div>
  )
}

export default Header