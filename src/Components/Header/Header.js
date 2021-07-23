import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js';
import './header.css'


const Header = () => {
    return (
        <div className="header-wraper" id="header">
            <Particles
              className="partical-canvas"
                params={{
                  particles: {
                    number:{
                      value: 30,
                      density: {
                        enable: true,
                        value_area: 900
                      }
                    },
                    shape:{
                      type:"circle",
                      stroke: {
                        width:6,
                        color: "#f9ab00"
                      }
                    }
                  }
                }} 
              />
            <div className="main-info">
                <h1>I am Abdullah Ejaz</h1>
                <Typed 
                className="typed-text"
                strings={["Full Stack Developer", "Web Developer" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#contact" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
