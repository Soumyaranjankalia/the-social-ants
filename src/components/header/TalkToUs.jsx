import React from 'react'
import './TalkToUs.css';

export const TalkToUs = () => {
  return (
    <div className='talkToUs-container'>
        <div className='talkToUsDiv'>
            <div className='talkToUs-text'>
                <h2>Wanna Talk To Us ?</h2>
            </div>
            <div className='bar'>
                <div className='barOne'></div>
                <div className='barOne'></div>
                <div className='barOne'></div>
                <div className='barTwo'></div>
            </div>
        </div>
        <div className='callToUs'>
            <div className='startProject'>
                <h2>
                Call Us To Start Your 
                <span>
                    <span>Projects</span>
                </span>
                </h2>
                <div className='startProject-text'>
                <p>
                Innovate, Create, Elevate
                <br />
                Unleashing Solutions in the Digital Realm
                </p>
            </div>
            </div>
            <div className='tryForFree'>
                <div className='tryForFree-button'>
                    <a href="">
                        Try For Free! ➡
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
