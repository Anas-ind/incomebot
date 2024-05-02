import React from 'react'
import './slides.css';
import cardOneImage from '../../assets/slides/cardpg.png'

const Slider_one = () => {
  return (
    <div className='slideContainer'>
        <div className='card_one'>
            <div className='slide-img-div'>
            <img src={cardOneImage} alt="SearchIcon"/>
        
            </div>
            <div className='text-content'>
                <p>
                    First ZK - Roll up CEX
                </p>
            </div>
            <div className='slide-btn'>
                <div className='slide-task'>
                    <p>1 Task</p>
                </div>
                <div className='slide-task'>
                <p>500 SOL</p>
                </div>
                <div className='slide-task'>
                <p>10/20 Slots</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Slider_one