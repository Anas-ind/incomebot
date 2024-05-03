import React from 'react'
import icon1 from '../../assets/feature/ic1.svg';
import icon2 from '../../assets/feature/ic2.svg';
import icon3 from '../../assets/feature/ic3.svg';
import icon4 from '../../assets/feature/ic4.svg';
import './HowTo.css';
const HowTo = () => {
  return (
    <div className='howto'>
        <div className='title'>
            <p>How To Use : What You Need To Know</p>
        </div>
        <div className='box-container'>
            <div className='card-1'>
                <div className='icon-div'>
                    <img src={icon1} alt="SearchIcon"/>
                </div>
                <div className='heading-div'>
                    <p>Free Tokens</p>
                </div>
                <div className='content-div'>
                    <p>
                    Participate by following the instructions provided in the airdrop announcement. This usually involves joining the Telegram group, following on Twitter, and filling out an airdrop form with your details.
                    </p>
                </div>
            </div>

            <div className='card-1 c2'>
                <div className='icon-div'>
                    <img src={icon2} alt="SearchIcon"/>
                </div>
                <div className='heading-div'>
                    <p>Limited Time</p>
                </div>
                <div className='content-div'>
                    <p>A paragraph text that go more in depth aAct quickly as the airdrop is available for a limited period. Make sure to join and complete the requirements before the deadline.About how the feature can help the customer.
                     </p>
                </div>
            </div>

            <div className='card-1 c3'>
                <div className='icon-div'>
                    <img src={icon3} alt="SearchIcon"/>
                </div>
                <div className='heading-div'>
                    <p>Community Benefits</p>
                </div>
                <div className='content-div'>
                    <p>Upon joining our community, you'll gain access to exclusive airdrops, updates about upcoming projects, and notifications about special events such as token launches.
                     </p>
                </div>
            </div>
            <div className='card-1 c4'>
                <div className='icon-div'>
                    <img src={icon4} alt="SearchIcon"/>
                </div>
                <div className='heading-div'>
                    <p>Simple Steps</p>
                </div>
                <div className='content-div'>
                    <p>
                    Follow the step-by-step instructions outlined in the airdrop announcement to participate easily. This may include clicking on provided links, submitting your social media usernames, and verifying your email address.
                      </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowTo