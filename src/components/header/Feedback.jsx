import React from 'react';
import './Feedback.css';

export const Feedback = () => {
  return (
    <div className='feedBack-container'>
        <div className='customer'>
            <div className='customerDiv'>
            <h2>Our customers feedback!</h2>
            <p>
            Business is the activity of making one living or making money producing or buying and selling products. Simply put it is any activity or enterprise entered into for profit.
            </p>
            </div>
        </div>
        <div className='feedback'>
            <div className='feedBackDiv'>
            <div className='pink'>
                <div>
                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/quote-right.png" alt="quote-right"/>
                </div>
                <div>
                    <p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast</p>
                </div>
            </div>
            <div className='profile'>
                <div className='profileImg'>
                    <img src="https://thesocialants.com/wp-content/uploads/2023/11/team_6.jpg" alt="" />
                    <h2>Shams W.Pawel</h2>
                    <p>Founder & CEO of XpeedStudio</p>
                </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}
