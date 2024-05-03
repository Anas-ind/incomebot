import React from 'react'
import './Footer.css'
import logo from '../../assets/head-iteams/logo.svg'
import logoImage from '../../assets/head-iteams/title_name.png'
import x from '../../assets/Footer/x.svg'
import yt from '../../assets/Footer/yt.svg'
import insta from '../../assets/Footer/insta.svg'
import linkedin from '../../assets/Footer/linkedin.svg'
import fb from '../../assets/Footer/fb.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot-container'>
            <div className='logobox rightpart'>
            <img src={logo} alt="Logo" />
            <img src={logoImage} alt="LogoImage" />
            </div>
            <div className='leftpart'>
            <div className='aboutus'> 
                <p className='title'>Airdrops</p>
                <p id='p2'>Trending Airdrops</p>
                <p>Latest Airdrops</p>
            </div>
            <div className='social'> 
                <p className='title'>Company</p>
                <div className='t-con po'> 
                <p>About Us </p>
                <p>Terms & Conditions</p>
                </div>
                <div className='t-con'>
                <p>Privacy Policy</p>
                <p>FAQs</p>
                </div>
            </div>
            <div className='social-btn'>
                <div className='social-icons'>
                  <img src={fb} alt="SearchIcon" />
                  <img src={x} alt="SearchIcon" />
                  <img src={insta} alt="SearchIcon" />
                  <img src={yt} alt="SearchIcon" />
                  <img src={linkedin} alt="SearchIcon" />
                </div>
                <div className='contact-btn'>
                    <button>
                        Contact Us
                    </button>
                </div>
            </div>
            </div>
        </div>
        <div className='copyright'>
            <p>All trademarks are the property of their respective owners. All rights reserved © 2024 IncomeBot</p>
        </div>
    </div>
  )
}

export default Footer