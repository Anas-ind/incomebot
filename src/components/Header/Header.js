import React from 'react';
import './Header.css';
import SignInButton from '../Buttons/SignIn';
import logo from '../../assets/head-iteams/logo.svg'
import logoImage from '../../assets/head-iteams/title_name.png'
import searchIcon from '../../assets/head-iteams/search-md.png'
import moonIcon from '../../assets/head-iteams/moon.svg'



const Header = () => {
  return (
   <header className='header'>
    <div className='logo-div'>
       <img src={logo} alt="Logo" />
       <img src={logoImage} alt="LogoImage" />
    </div>
    <div className='logo-items'>
        <div className='search-div'>
            <button>
                <img src={searchIcon} alt="SearchIcon" />
            </button>
            <input type='text' placeholder='Search' />
         </div>
        <div>
            <p>Latest Airdrops</p>
        </div>
        <div>
            <p>About Us</p>
        </div>
        <div>
            <img src={moonIcon} alt="SearchIcon" />
        </div>
        <div className='head-btn'>
            <SignInButton/>
        </div>    
    </div> 
    </header>
  )
}

export default Header