import React from 'react'
import './Boost.css';

export const Boost = () => {
  return (
    <div className='boostContainer'>
        <div className='boostPic'>
            <img src="./boost.png" alt="boost" />
        </div>
        <div className='boostData'>
            <p className='boostHeader'>Boost Your Brand Presence</p>
            <p className='boostText'>The Social Ants, where our mission is to transform your brand's journey into an incredible narrative much like the intricate pathways of an ant colony. Like our tiny namesakes, we're a dedicated team, each with a role crucial to the success of your brand's story. Just as ants work collectively to build their colonies, we collaborate seamlessly to craft a digital landscape that echoes your brand's unique essence.</p>
            <a className='boostButton'>
                Get Started
            </a>
        </div>
    </div>
  )
}
