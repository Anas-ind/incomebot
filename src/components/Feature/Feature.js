import React from 'react'
import './Feature.css'
import rightImage from '../../assets/feature/f2.png'
const Feature = () => {
  return (
    <div className='feature-section'>
        <div className='leftbox'>
            <div className='head-box'>
                <p>New Feature</p>
            </div>
            <div className='heading-box'>
            <p>Exclusive Airdrop Opportunities</p>
            </div>
            <div className='text-box'>
                <p>
                Are you ready to elevate your crypto journey? Don't miss out on this limited-time opportunity to participate in our exclusive airdrop event! As a valued member of our community, we're offering you a chance to claim your share of tokens and join us on our exciting blockchain journey
                </p>
            </div>
        </div>
        <div className='rightbox'>
        <img src={rightImage}  />
        </div>
    </div>
  )
}

export default Feature