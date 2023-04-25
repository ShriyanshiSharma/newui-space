import React from 'react'
import "./Application.css"
import logo from "../../assets/logo-no-background 4.png"

function Application() {
  return (
    <div className='application'>
        <div className="app__container">
          
            <div className="app_input">
            <img src={logo} alt="" />
            </div>

            <div className="app_input">
            <input type="text" placeholder='name' />
            </div>

            <div className="app_input">
            <input type="text" placeholder='e-mail' />
            </div>

            <div className="app_input">
            <input type="text" placeholder='phone number' />
            </div>

            <div className="app_input">
            <input type="text" placeholder='department' />
            </div>

            <div className="app_input">
            <input type="text" placeholder='position' />
            </div>
            <div className="app__resume">
                <p>resume</p>
            <input type="file" placeholder='resume' className='resume'/>
            </div>
            <button>SUBMIT</button>
        </div>
    </div>
  )
}

export default Application