import React from 'react'
import Navbar from './Navbar'
import Slider from './components/Slider'
import Recentgallery from './components/Recentgallery'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Recentgallery/>
    </div>
  )
}

export default Home