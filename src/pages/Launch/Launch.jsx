import React from 'react'
import "./Launch.css"
import line from "../../assets/Line 8.png"
import plane from "../../assets/Space Shuttle.png"
import ship from "../../assets/space-removebg-preview 2.png"
import sun from "../../assets/png-transparent-animated-sun-caricature-drawing-sun-photography-orange-computer-wallpaper-thumbnail-removebg-preview 2.png"

function Launch() {
  return (
    <div className='launch'>
        <div className="launch__heading">
            <h1>SERVICES</h1>
            <div className="underline">
                <img src={line} alt=""  className='line__about'/>
                <img src={plane} alt=""  className='about__plane'/>
            </div>
            <div className="launch__paragraph">
                <img src={sun} alt="" />
                <p>SURYA SERIES</p>
            </div>
            <div className="launch__detail">
                <p>The SURYA series space shuttle is expected to revolutionize the way small satellites are launched into space, with its unprecedented mass producibility and affordability. The unique technology architecture of the SURYA shuttle offers unparalleled capabilities such as multi-orbit insertion, interplanetary missions, and customized ride-share options, making it the go-to choice for small satellite customers. With SURYA, launching satellites to space will soon be as simple as ordering a taxi - fast, precise, and affordable. As India's private space industry continues to grow, the SURYA series space shuttle is poised to play a crucial role in enabling the country to become a major player in the global space race.</p>
            </div>
        </div>
        <div className="launch__table">
            <tr>
                <th style={{borderLeft:"none"}}></th>
                <th className='ship__img_change'>
                    <img src={ship} alt="" />
                </th>
                <th className='ship__img_change'>
                    <img src={ship} alt="" />
                </th>
                <th className='ship__img_change'>
                    <img src={ship} alt=""/>
                </th>
            </tr>

            <tr>
                <td style={{borderLeft:"none"}}><p>NAME</p></td>
                <td><p>SURYA-12</p></td>
                <td><p>SURYA-12</p></td>
                <td><p>SURYA-12</p></td>   
            </tr>
            <tr>
                <td style={{borderLeft:"none"}}><p>PAYLOAD</p></td>
                <td><p>485kg to 500Km</p></td>
                <td><p>595kg to 500Km</p></td>
                <td><p>800kg to 500Km</p></td>   
            </tr>
            <tr>
                <td style={{borderLeft:"none"}}><p>ARCHITECTURE</p></td>
                <td><p>A modular space shuttle designed for the small satellite market, with leading technology architecture offering multi-orbit insertion and interplanetary missions.</p></td>
                <td><p>A re-usable space shuttle designed to transport astronauts and payloads to and from Low Earth Orbit (LEO) with a maximum capacity of 7 crew members.</p></td>
                <td><p>An advanced air-launched space shuttle designed for rapid deployment of small satellites into orbit, capable of carrying up to 800 kg of payload.</p></td>   
            </tr>
            <tr>
                <td style={{borderLeft:"none"}}><p>ECONOMIC</p></td>
                <td><p>Lowest cost in the payload segment</p></td>
                <td><p>Medium cost in the payload segment</p></td>
                <td><p>Highest cost in the payload segment</p></td>   
            </tr>

        </div>
        
    </div>
  )
}

export default Launch