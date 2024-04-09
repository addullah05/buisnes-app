import React from 'react'
import Logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const Bar = <FontAwesomeIcon icon={faBars} />
  return (
     <header id='site_header'>
        <div className="container">
          <nav className="navbar" id='Navbar'>
            <div className="navbar_brand">
              <a href='/'>
                <img src={Logo} alt='logo'/>
              </a>
            </div>
            <div className="navbar_toggler">
              {
                Bar
              }
            </div>
          </nav>
        </div>
     </header>
  )
}

export default Navbar