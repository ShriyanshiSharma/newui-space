import React from 'react'
import line from "../../assets/Line 8.png"
import plane from "../../assets/Space Shuttle.png"
import { useParams } from 'react-router-dom'
import FullNews from '../../components/Newdata/FullNews'
import { Link } from 'react-router-dom'

function Newsdisplay() {
  const {pid} = useParams()
  return (
    <div className='news'>
      <div className="news__heading">
        <h1>ABOUT</h1>
        <div className="underline">
            <img src={line} alt=""  className='line__about'/>
            <img src={plane} alt=""  className='about__plane'/>
        </div>
      </div>
      <div className="full__news">
        {pid == 1 && <FullNews 
        p1 = "Astrogenix Space, an Indian private space agency, announced a significant milestone in the development of advanced space transportation technology. The company successfully conducted a test flight of its reusable space shuttle prototype, bringing India one step closer to achieving its goal of becoming a key player in the global space industry."
        p2 = "The prototype space shuttle, designed to be reusable and more cost-effective than traditional space vehicles, was launched from a facility in southern India. The successful test flight demonstrated the viability of the shuttle's innovative design and capabilities, including its ability to reach high altitudes and maneuver in space."
        p3 = "'This is a historic moment for Astrogenix Space and India's space program,' said Isha Gupta, Director of Marketing at Astrogenix Space. 'Our team has been working tirelessly to develop cutting-edge technology that will help India establish itself as a leader in the global space industry. This successful test flight is a testament to our team's hard work and dedication.'"
        p4 = "The successful test flight is a significant step forward for India's space program, which has been making strides in recent years in the development of advanced space technology. Astrogenix Space's reusable space shuttle prototype is a key part of India's efforts to develop more cost-effective and sustainable space transportation solutions."
        p5 = '"We are proud to be at the forefront of this exciting new era in space exploration," said Dr. Anjali Singh, CEO of Astrogenix Space. "Our reusable space shuttle prototype represents a major breakthrough in space transportation technology, and we are confident that it will play a significant role in shaping the future of the global space industry."'
        p6 = "With the successful test flight of its reusable space shuttle prototype, Astrogenix Space has demonstrated its commitment to advancing the field of space exploration and bringing innovative space transportation solutions to the global market. The company's continued efforts are sure to play a vital role in India's pursuit of its ambitious space exploration goals."
        />}
        
        {pid == 2 && <FullNews 
        p1 ="India's private space agency, Astrome, made history with the successful launch of its first space shuttle, SURYA, into orbit. The shuttle, carrying advanced imaging and communication technologies, is expected to revolutionize India's space exploration capabilities and position the country as a major player in the global space industry."
        p2 = "The launch took place at the Satish Dhawan Space Centre in Sriharikota, Andhra Pradesh, and was witnessed by top officials from the Indian Space Research Organisation (ISRO), as well as representatives from Astrogenix. The shuttle's advanced imaging and communication technologies will enable it to capture high-resolution images of Earth and other celestial bodies, and provide real-time data and communications capabilities for various applications. "
        p3 = "Dr. Anjali Singh, founder and CEO of Astrogenix, hailed the launch as a major milestone for the country's burgeoning private space industry. 'This is a proud moment for Astrogenix and for India's space program,' she said. 'We have been working towards this goal for many years, and we are excited to finally see our vision become a reality. The launch of SURYA is a testament to our team's hard work, dedication, and commitment to advancing the field of space exploration.'"
        p4 = "The launch was a collaborative effort between Astrogenix and ISRO, with the latter providing crucial technical support. ISRO Chairman, Dr. K. Sivan, congratulated Astrogenix on the successful launch and said that the collaboration between the two organizations marked a new era in India's space program.'This is a proud moment for ISRO and for India as a whole,' he said. 'The successful launch of SURYA is a testament to the hard work and dedication of both Astrogenix and ISRO. This collaboration marks a new era in India's space program and opens up new avenues for space exploration and innovation.'        "
        p5 = "With the successful launch of SURYA, India has joined a select group of nations with their own private space programs. The country's private space industry is expected to grow rapidly in the coming years, driven by increased investment and a focus on innovation and technological advancement. The launch of SURYA is just the beginning of India's journey towards becoming a major player in the global space industry, and the country's private space agencies are poised to play a pivotal role in shaping the future of space exploration and innovation."
        p6 = ""
        />}
        {pid == 3 && <FullNews
        p1 = "Astrogenix, the private Indian space agency, has announced its plans to send a team of astronauts on its first manned spaceflight aboard the SURYA-14 shuttle. This historic mission is expected to take place within the next two years and marks a major milestone for India's burgeoning private space industry.        "
        p2 = "The team of astronauts, yet to be selected, will undergo rigorous training in preparation for the mission, which will see them spend several weeks in orbit conducting experiments and gathering data. This manned spaceflight will be the first launched by a private Indian company, putting the country on the global map of manned space exploration."
        p3 = 'Dr. Anjali Singh, founder and CEO of Astrogenix, said in a statement, "This mission is a testament to the hard work and dedication of our team at Astrogenix. We are excited to embark on this journey and make history by launching the first manned spaceflight by a private Indian company."'
        p4 = "The announcement comes at a time of increasing interest and investment in India's private space industry, with the country aiming to establish itself as a major player in the global space market. Astrogenix's success with the SURYA-1 launch last year has sparked a new wave of interest in private space initiatives and this manned spaceflight is expected to further drive innovation and progress in the field."
        p5 = "The mission is also expected to have far-reaching implications for India's scientific and technological development, with the astronauts conducting experiments and gathering data that could lead to new discoveries and advancements in a variety of fields. This will further solidify India's position as a major player in the global scientific community.        "
        p6 = "As India's private space industry continues to grow and evolve, this historic manned spaceflight by Astrogenix is poised to be a major milestone in the country's journey towards becoming a key player in the global space industry." />}

      </div>
      <div className="news__back">
      <Link to="/news" style={{textDecoration:"none" ,color:"white"}}>BACK</Link>
      </div>



    </div>
  )
}

export default Newsdisplay