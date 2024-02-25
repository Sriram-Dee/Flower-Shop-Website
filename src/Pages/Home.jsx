import React from 'react'
import { About } from './About'
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
    </div>
  )
}
