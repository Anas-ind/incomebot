import React from 'react'
import './Faq.css'
import Up from '../../assets/Faq/Up-arrow.svg'
import down from '../../assets/Faq/down-arrow.svg'

const Faq = () => {
  return (
    <div className='faq'>
        <div className='heading'>
            <p>Frequently Asked Questions</p>
        </div>
        <div className='faq-container'>
            <div className='box1'>
                <div className='ques'>
                    <p>What is an airdrop ?</p>
                    <button>
                    <img src={Up} alt="SearchIcon"/>

                    </button>
                </div>
                <div className='ans'>
                    <p>An airdrop is a distribution of tokens or cryptocurrencies to a specific group of individuals, often as a promotional or reward mechanism.</p>
                </div>
            </div>
            <div className='box1 b2 b1'>
                <div className='ques'>
                    <p>Who is eligible to participate in the airdrop?</p>
                    <button>
                    <img src={down} alt="SearchIcon"/>

                    </button>
                </div>
                
            </div>
            <div className='box1 b3 b1'>
                <div className='ques'>
                    <p>How do I join the airdrop?</p>
                    <button>
                    <img src={down} alt="SearchIcon"/>

                    </button>
                </div>
               
            </div>
            <div className='box1 b4 b1'>
                <div className='ques'>
                    <p>Is there a deadline to participate?</p>
                    <button>
                    <img src={down} alt="SearchIcon"/>

                    </button>
                </div>
              
            </div>
        </div>
        <div className='view-more'>
            <p>View More</p>
        </div>
    </div>
  )
}

export default Faq