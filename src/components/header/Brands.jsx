import React from 'react'
import './Brands.css';
import Slider from "react-slick";



export const Brands = () => {
  return (
    <div className='brand-container'>
        <div className='brandText'>
            <h2>Brands We Elevate</h2>
            <div className='brandH3'>
                <div></div>
                <h3>A Symphony of Innovation and Identity</h3>
                <div></div>
            </div>
            
        </div>
        <div className='brandScroll'>
            <div className='brandImg'>
                <div className='lumberJacks'>
                    <img src="https://thesocialants.com/wp-content/uploads/2023/11/client_5_black.png" alt="" />
                </div>
                <div className='lumberJacks'>
                    <img src="https://thesocialants.com/wp-content/uploads/2023/11/client_6_black.png" alt="" />
                </div><div className='lumberJacks'>
                    <img src="https://thesocialants.com/wp-content/uploads/2023/11/client_3_black.png" alt="" />
                </div><div className='lumberJacks'>
                    <img src="https://thesocialants.com/wp-content/uploads/2023/11/client_2_black.png" alt="" />
                </div><div className='lumberJacks'>
                    <img src="https://thesocialants.com/wp-content/uploads/2023/11/client_8_black.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
