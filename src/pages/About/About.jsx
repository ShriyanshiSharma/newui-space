import React from 'react'
import "./About.css"
import line from "../../assets/Line 8.png"
import plane from "../../assets/Space Shuttle.png"
import Team from '../../components/Team/Team'
import img1 from "../../assets/1.png" 
import img2 from "../../assets/2.png" 
import img3 from "../../assets/3.png" 
import img4 from "../../assets/4.png" 
import img5 from "../../assets/5.png" 
import img6 from "../../assets/6.png" 
import { useState } from 'react'


function About() {
    const [show,setShow] = useState(false);
    const [buttondis,setbutton] = useState(true);

    const handleChange = () =>{
        setShow(true);
        setbutton(false);
    }
  return (
    <div className='about'>
        <div className="about__heading">
            <h1>ABOUT</h1>
            <div className="underline">
                <img src={line} alt=""  className='line__about'/>
                <img src={plane} alt=""  className='about__plane'/>
            </div>
            <div className="about__data">
                <h2>AstroGenix Space</h2>
                <p>We at AstroGenix Space believe that the benefits of space technology should be accessible to everyone. That's why we are developing cost-effective solutions for space transportation and exploration, which will ultimately reduce the barriers to entry for aspiring space explorers, researchers, and entrepreneurs.</p>
                <p>Our team consists of passionate individuals who are experts in their fields, including rocket scientists, aerospace engineers, and technology innovators. Together, we are pushing the boundaries of what is possible in the field of space exploration, designing and building state-of-the-art rockets and spacecraft.</p>
                <p>We are proud to be contributing to the advancement of human knowledge and pushing the limits of human potential. Through our work, we hope to inspire the next generation of space explorers and to create a better future for all of us.</p>
            </div>
        </div>
        <div className="about__team">
            <Team 
            img={img1}
            name="Dr.Ajnali Singh"
            post="CEO , AstroGenix Space"
            des = "Our space entrepreneur, with over ten years of experience in the Space Launch Vehicle industry, started out as a rocket engineer. They graduated from MIT with a degree in Aerospace Engineering."/>
            <Team 
            img={img2}
            name="Ravi Shankar Menon"
            post="CTO , AstroGenix Space"
            des = "A seasoned technology executive with over 25 years of experience in the industry. He has worked with leading companies in India and abroad, and is renowned for his expertise in emerging technologies such as AI and satellite communication."/>
            
            <Team 
            img={img3}
            name=""
            post="CFO , AstroGenix Space"
            des = "Our financial expert brings over 14 years of experience in the sector as a Certified Public Accountant. They have worked with reputable organizations such as SpaceX, Blue Origin, Virgin Galactic, Boeing, and Lockheed Martin."/>
            
            <Team 
            img={img4}
            name="Amit Kumar Sharma"
            post="Solid Propulsion"
            des = "This expert is a leader in solid propulsion technology, with extensive experience as project director of one of the world's largest solid fuel rocket stages."/>
            
            <Team 
            img={img5}
            name="Dr.Ajnali Singh"
            post="CEO , AstroGenix Space"
            des = "Our space entrepreneur, with over ten years of experience in the Space Launch Vehicle industry, started out as a rocket engineer. They graduated from MIT with a degree in Aerospace Engineering."/>
            
            <Team 
            img={img6}
            name="Rohan Gupta"
            post="Strategy & Investments"
            des = "Having previously served as the head of an economic think tank at the state government, this individual is an alumnus of the Indian Institute of Management (IIM), known for its rigorous management education programs."/>

            {show ? <>
            <Team 
            img={img1}
            name="Dr.Ajnali Singh"
            post="CEO , AstroGenix Space"
            des = "Our space entrepreneur, with over ten years of experience in the Space Launch Vehicle industry, started out as a rocket engineer. They graduated from MIT with a degree in Aerospace Engineering."/>
            <Team 
            img={img2}
            name="Ravi Shankar Menon"
            post="CTO , AstroGenix Space"
            des = "A seasoned technology executive with over 25 years of experience in the industry. He has worked with leading companies in India and abroad, and is renowned for his expertise in emerging technologies such as AI and satellite communication."/>
            
            <Team 
            img={img3}
            name=""
            post="CFO , AstroGenix Space"
            des = "Our financial expert brings over 14 years of experience in the sector as a Certified Public Accountant. They have worked with reputable organizations such as SpaceX, Blue Origin, Virgin Galactic, Boeing, and Lockheed Martin."/>
            
            <Team 
            img={img4}
            name="Amit Kumar Sharma"
            post="Solid Propulsion"
            des = "This expert is a leader in solid propulsion technology, with extensive experience as project director of one of the world's largest solid fuel rocket stages."/>
            
            <Team 
            img={img5}
            name="Dr.Ajnali Singh"
            post="CEO , AstroGenix Space"
            des = "Our space entrepreneur, with over ten years of experience in the Space Launch Vehicle industry, started out as a rocket engineer. They graduated from MIT with a degree in Aerospace Engineering."/>
            
            <Team 
            img={img6}
            name="Rohan Gupta"
            post="Strategy & Investments"
            des = "Having previously served as the head of an economic think tank at the state government, this individual is an alumnus of the Indian Institute of Management (IIM), known for its rigorous management education programs."/>
            </>:""}
        </div>
        <div className="about__learn">
           {buttondis? <button onClick={handleChange}>Load More</button>:""}
        </div>
    </div>
  )
}

export default About