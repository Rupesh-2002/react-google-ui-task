import React from 'react'
import chromeLogo from '../assets/chromeLogo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <a href="/intl/en_in/chrome/">
           <img src={chromeLogo} alt="chrome logo" />
        <span>
          Chrome
        </span>
        </a>
      </div>
      <nav>
       <ul>
        <li>
            <a href="">
                Home
            </a>
        </li>
        <li>
            <a href="/intl/en_in/chrome/">The Browser By Google</a>
        </li>
        <li>
            <a href="">
                Safety
            </a>
        </li>
        <li>
            <a href="">Support</a>
        </li>
       </ul>
      </nav>
    </header>
  )
}

export default Header
