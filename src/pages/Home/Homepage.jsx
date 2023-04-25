import React from 'react'
import Home from "../../components/Home/Home"
import Rocket from "../../components/Rocket/Rocket"
import Stats from "../../components/Stats/Stats"


function Homepage() {
  return (
    <div className='homepage'>
      <Home/> 
      <Rocket/>
      <Stats/>
    </div>
  )
}

export default Homepage;