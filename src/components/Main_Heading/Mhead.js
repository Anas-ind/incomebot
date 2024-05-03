import React from 'react'
import './Mhead.css'
import SignInButton from '../Buttons/SignIn'
import arrowIcon from '../../assets/Main-iteams/arrow-up-right.svg'
import elipse1 from '../../assets/Main-iteams/Ellipse 1.png'
import elipse2 from '../../assets/Main-iteams/Ellipse 2.png'

const Mhead = () => {
  return (
    <div className='headText'>
      <div>
        <p className='headMainText'>Get Paid In Crypto With IncomeBot
         Earn From Twitter Tasks!</p>
      </div>
      <div>
      <p className='headSecondText'>A line text that tells about the platform</p>
      </div>
      <div className='jio'>
        <button className="sign-in-button getting-btn">
        Get Started
        <img src={arrowIcon} alt="Up Arrow" />
        </button>
      </div>
      <div className='elp1'>
      <img src={elipse1} />
      </div>
      <div className='elp2'>
      <img src={elipse2} />
      </div>
      
    </div>
    
  )
}

export default Mhead;