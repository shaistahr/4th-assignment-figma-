import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Brands from './Component/brand'
import NewArrival from './Component/NewArrival'
import Topselling from './Component/Topselling'
import DressStyle from './Component/dressStyle'
import Happyrate from './Component/Happyrate'
import Footer from './Component/Footer'


const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <Brands/>
      <NewArrival/>
      <Topselling/>
      <DressStyle/>
      <Happyrate/>
      <Footer/>
    </div>
  )
}

export default Home
