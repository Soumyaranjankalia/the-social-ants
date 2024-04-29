import React from 'react'
import { Header } from '../components/header/Header'
import { LetterDiv } from '../components/header/LetterDiv'
import { Hero } from '../components/header/Hero'
import { Namskar } from '../components/header/Namskar'
import { AboutUs } from '../components/header/AboutUs'
import { Footer } from '../components/header/Footer'
import { TalkToUs } from '../components/header/TalkToUs'
import { Feedback } from '../components/header/Feedback'
import { Brands } from '../components/header/Brands'
import { Boost } from '../components/header/Boost'
import { Reason } from '../components/header/Reason'
import Services from '../components/Services'

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <LetterDiv/>
      <Hero/>
      <Namskar/>
      <AboutUs/>
      <Services/>
      <Reason/>
      <Boost/>
      <Brands/>
      <Feedback/>
      <TalkToUs/>
      <Footer/>
    </div>
  )
}
