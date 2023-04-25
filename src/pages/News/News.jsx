import React from 'react'
import line from "../../assets/Line 8.png"
import plane from "../../assets/Space Shuttle.png"
import "./News.css"
import Newdata from '../../components/Newdata/Newdata'

function News() {
  return (
    <div className='news'>
        <div className="news__heading">
            <h1>NEWS</h1>
            <div className="underline">
                <img src={line} alt=""  className='line__about'/>
                <img src={plane} alt=""  className='about__plane'/>
            </div>
        </div>
        <div className="news__container">
        <Newdata
        key={1}
        id={1}
        serial = "1"
        paradata = "Astrogenix Space announces successful test flight of its reusable space shuttle prototype, bringing India one step closer to achieving its goal of developing advanced space transportation technology."
        pulish="The Hindu"
        />
        <Newdata
        id={2}
        key={2}
        serial = "2"
        paradata = "In a historic achievement, India's private space agency, Astrome, successfully launched its first space shuttle, SURYA, into orbit. The shuttle, carrying advanced imaging and communication technologies, is expected to revolutionize India's space exploration capabilities. Astrogenix's founder and CEO, Dr. Anjali Singh, hailed the launch as a major milestone for the country's burgeoning private space industry. The launch was a collaborative effort with the Indian Space Research Organisation (ISRO), which provided crucial technical support. With SURYA's successful launch, India has joined a select group of nations with their own private space programs."
        pulish="The Times Of India"
        />
        
        <Newdata
        key={3}
        id={3}
        serial = "3"
        paradata = "Astrogenix, the private Indian space agency, has announced plans to send a team of astronauts into space aboard the SURYA-14 shuttle. The mission, which is expected to take place in the next two years, will be the first manned spaceflight launched by a private Indian company. The astronauts will undergo rigorous training in preparation for the mission, which will see them spend several weeks in orbit conducting experiments and gathering data."
        pulish="The  Economics Times "
        />
        
        <div className="news__button">
            <button>Read More</button>
        </div>
        </div>
        
    </div>
  )
}

export default News