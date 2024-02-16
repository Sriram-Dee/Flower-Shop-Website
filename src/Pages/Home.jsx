import React from 'react'
import { About } from './About'
import { Login } from './Login'
import { Track } from './Track'
import HeroCarousel from '../assets/CustComponentes/HeroCarousel'
import { Products } from './Products'

export const Home = () => {
  return (
    <div>
        <div className="home">
            <HeroCarousel />
        </div>
        <Products />
        <About />
        <Track />
        <Login />
    </div>
  )
}
