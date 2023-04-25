import React from 'react'
import line from "../../assets/Line 8.png"
import plane from "../../assets/Space Shuttle.png"
import "./Join.css"
import data from "../../components/Data"
import { Link } from 'react-router-dom'

function Join() {
  return (
    <div className='join'>
        <div className="join__heading">
            <h1>JOIN US</h1>
            <div className="underline">
                <img src={line} alt=""  className='line__about'/>
                <img src={plane} alt=""  className='about__plane'/>
            </div>
            <div className="join__contain">
                <h3>Life at AstroGenix</h3>
                <p>“ As a member of Astrogenix for the past few years, I can say that it has been an exciting and rewarding experience. Working for a private Indian space agency has given me the opportunity to work on cutting-edge projects and be a part of India's growing space program.</p>
                <p>The team at Astrogenix is incredibly talented and passionate, and it's been a privilege to work alongside them. The work environment is fast-paced and challenging, but also supportive and collaborative.</p>
                <p>Being a part of Astrogenix has allowed me to develop new skills and knowledge, and I've been able to contribute to some amazing projects, including satellite launches and spacecraft development.</p>
                <p>It's been inspiring to see the progress we've made as a team, and I'm excited to see what the future holds for Astrogenix and India's space program. “</p>
                <div className='join__writer'>
                    <h5>-Dr. Anjali Singh ,CEO,AstorGenix Space</h5>
                </div>
            </div>

                {
                    data.map((items) => {
                        return(
                            <div className="join__cards">
                                <h2>{items.post}</h2>
                                <div className="join__card_detail">
                                    <div className="card_expe">
                                        <p>Experience</p>
                                        <h3>{items.expi}</h3>
                                    </div>
                                    <div className="card_expe card_location">
                                        <p>Location</p>
                                        <h3>{items.loc}</h3>
                                    </div>
                                    <div className="card_button">
                                        <Link to="/application">
                                           <button>APPLY NOW</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="join__response">
                                    <p>Responsibility</p>
                                    <h3>{items.respo}</h3>
                                </div>
                            </div>            
                        )
                    })
                }
        </div>
    </div>
  )
}
export default Join;