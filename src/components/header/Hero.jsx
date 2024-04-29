import React from 'react'
import './Hero.css';

export const Hero = () => {
  return (
    <div className='heroContainer'>
        <div className='heroFirst'>
            <img src="https://thesocialants.com/wp-content/uploads/2023/11/stars.png" alt="" />
        </div>
        <div className="heroLogo">
            <img src="https://thesocialants.com/wp-content/uploads/2023/11/socialants_glow-2.png" alt="" />
        </div>
        <div className='heroSec'>
            <img src="https://thesocialants.com/wp-content/uploads/2023/11/mountains_behind.png" alt="" />
        </div>
        <div className='heroThird'>
            <img src="https://thesocialants.com/wp-content/uploads/2023/11/mountains_front.png" alt="" />
        </div>
    </div>
  )
}
