import React from 'react'
import './slides.css';
import cardOneImage from '../../assets/slides/cardpg.png'
import cardTwoImage from '../../assets/slides/Card-2.png'
import cardThreeImage from '../../assets/slides/Card-3.png'
import logoImage from '../../assets/slides/user_logo.svg'
import chevronleft from '../../assets/slides/chevron-left.svg'
import chevronright from '../../assets/slides/chevron-right.svg'
import clock from '../../assets/slides/clock.svg'
import Save from '../../assets/slides/Save.svg'

const Slider_one = (props) => {
  return (
    <div className='slideContainer'>
        <div className='card_one c1'>
            <div className='slide-img-div'>
            <img className='zoomed' src={cardOneImage} alt="SearchIcon"/>
            <img id='logoImage' src={logoImage} />
            <img id='logoSave' src={Save} />
            

            </div>
            <div className='text-content'>
                <p>
                    First ZK - Roll up CEX
                    
                </p>
            </div>
            <div className='slide-btn'>
                <div className='slide-task sm'>
                    <p>1 Task</p>
                </div>
                <div className='slide-task smd'>
                <p>500 SOL </p>
                </div>
                <div className='slide-task'>
                <p>10/20 Slots</p>
                </div>
            </div>
        </div>

        <div className='card_one c2'>
            <div className='slide-img-div'>
            <img className='zoomed' src={cardTwoImage} alt="SearchIcon"/>
            <img id='logoImage' src={clock} alt="SearchIcon"/>
            <img id='logoSave' src={Save} />

            </div>
            <div className='text-content'>
                <p>
                    First ZK - Roll up CEX
                </p>
            </div>
            <div className='slide-btn'>
                <div className='slide-task sm'>
                    <p>1 Task</p>
                </div>
                <div className='slide-task smd'>
                <p>500 SOL</p>
                </div>
                <div className='slide-task md'>
                <p>10/20 Slots</p>
                </div>
            </div>
        </div>

        <div className='card_one c3'>
            <div className='slide-img-div'>
            <img className='zoomed' src={cardThreeImage} alt="SearchIcon"/>
            <img id='logoImage' src={logoImage} alt="SearchIcon"/>
            <img id='logoSave' src={Save} />

            </div>
            <div className='text-content'>
                <p>
                    First ZK - Roll up CEX
                </p>
            </div>
            <div className='slide-btn'>
                <div className='slide-task sm'>
                    <p>1 Task</p>
                </div>
                <div className='slide-task smd'>
                <p>500 SOL</p>
                </div>
                <div className='slide-task'>
                <p>10/20 Slots</p>
                </div>
            </div>
        </div>

        <div className='card_one c4'>
            <div className='slide-img-div'>
            <img className='zoomed' src={cardOneImage} alt="SearchIcon"/>
            <img id='logoImage' src={clock} alt="SearchIcon"/>
            <img id='logoSave' src={Save} />

            </div>
            <div className='text-content'>
                <p>
                    First ZK - Roll up CEX
                </p>
            </div>
            <div className='slide-btn'>
                <div className='slide-task sm'>
                    <p>1 Task</p>
                </div>
                <div className='slide-task smd'>
                <p>500 SOL</p>
                </div>
                <div className='slide-task md'>
                <p>10/20 Slots</p>
                </div>
            </div>
        </div>

        <div className='chevron-left'>
        <img src={chevronleft} alt="SearchIcon"/>
        </div>

        <div className='chevron-right'>
        <img src={chevronright} alt="SearchIcon"/>
        </div>


    </div>
  )
}

export default Slider_one;