import React from 'react'
import './HeadBelow.css';
import starIcon from '../../assets/Main-iteams/stars-01.svg';
import greenTickIcon from '../../assets/Main-iteams/Green-Tick-Icon.svg'
import wallet from '../../assets/Main-iteams/wallet-02.svg';
import solana from '../../assets/Main-iteams/solana-sol-logo 2.png';
const HeadBelow = () => {
    return (
        <div className='headBelow'>
            <div className='star_box'>
                <img src={starIcon} alt="SearchIcon"/>
                <p>Complete simple tasks on twitter</p>
            </div>
            <div className='color_box'>
            </div>
            <div className='text_box'>            
                <div className='text-box-container first_box'>
                    <div className='first-item'>
                        <div className='first-item-p'>
                            <p>+50</p>
                        </div>
                        <div>
                            <p className='p-content'>
                            Follow @mobiloitte on Twitter
                            </p>
                        </div>
                    </div>
                    <div className='second-item'>
                        <img src={greenTickIcon} alt="green tick arrow" />
                    </div>
                </div>
                <div className='text-box-container second_box'>
                    <div className='first-item'>
                        <div className='first-item-p'>
                            <p>+50</p>
                        </div>
                        <div>
                            <p className='p-content'>
                            Follow @mobiloitte on Twitter
                            </p>
                        </div>
                    </div>
                    <div className='second-item'>
                        <img src={greenTickIcon} alt="green tick arrow" />
                    </div>
                </div>
                <div className='text-box-container third_box'>
                    <div className='first-item'>
                        <div className='first-item-p'>
                            <p>+50</p>
                        </div>
                        <div>
                            <p className='p-content'>
                            Follow @mobiloitte on Twitter
                            </p>
                        </div>
                    </div>
                    <div className='second-item'>
                        <img src={greenTickIcon} alt="green tick arrow" />
                    </div>
                </div>
            </div>
            <div className='arrow_div'>
            </div>
            <div className='card_box'>
                <div className='cardContainer'>
                    <div className='left-box'>
                        <img src={wallet} alt="SearchIcon"/>
                        <div>
                        <p id='p1'>BALANCE</p>
                        <p>100 SOL</p>
                        <p>+150 SOL</p>
                        </div>
                        <p>Ex492......w23kp009</p>
                    </div>
                    <div className='right-box'>
                    <img src={solana} alt="solana"/>
                    </div>
                </div>
            </div>
            <div className='color_box_2'>
            </div>
            <div className='star_box_2'>
            </div>
        </div>
      
      
    )
};

export default HeadBelow;