import React from 'react'
import { About } from './About'
import { Login } from './Login'
import { Track } from './Track'
import HeroCarousel from '../assets/CustComponentes/HeroCarousel'

export const Home = () => {
  return (
    <div>
        <div className="home">
            <HeroCarousel />
            <p className="text-bg-secondary text-primary">Hello coders</p>
        </div>
        <About />
        <Track />
        <Login />
    </div>
  )
}
