import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js';
import './header.css'
import Resume from './Abdullah_ejaz_Resume.pdf'


const Home = () => {
    return (
        <div className="header-wraper" id="home">
            <Particles
              className="partical-canvas"
                params={{
                  particles: {
                    number:{
                      value: 30,
                      density: {
                        enable: true,
                        value_area: 700
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
                strings={["Full Stack Developer", "Software Engineer", "Web Developer" ]}
                typeSpeed={40}
                backSpeed={35}
                loop
                />
                <a className="btn-main-offer" href={Resume} download="Abdullah_Resume" >Download CV</a>
            </div>
        </div>
    )
}

export default Home
