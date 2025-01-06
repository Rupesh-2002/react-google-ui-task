import React from 'react'
import chromeLogo from '../assets/chromeLogo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <a href="/">
           <img src={chromeLogo} alt="chrome logo" />
        <span>
          Chrome
        </span>
        </a>
      </div>
      <nav>
       <ul>
        <li>
            <a href="/">
                Home
            </a>
        </li>
        <li>
            <a href="https://www.google.com/intl/en_in/chrome/browser-tools/">The Browser By Google</a>
        </li>
        <li>
            <a href="https://www.google.com/intl/en_in/chrome/safety/">
                Safety
            </a>
        </li>
        <li>
            <a href="https://www.google.com/intl/en_in/chrome/safety/">Support</a>
        </li>
       </ul>
      </nav>
    </header>
  )
}

export default Header
