import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 
import { TypeAnimation } from 'react-type-animation';
import './header.css';
import Resume from './Abdullah_ejaz_Resume.pdf';

const Home = () => {
    // Standard initialization for v2
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="header-wraper" id="home">
            <Particles
                id="tsparticles"
                className="partical-canvas"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 30,
                            density: { enable: true, area: 700 }
                        },
                        shape: { type: "circle" },
                        stroke: {
                            width: 6,
                            color: "#f9ab00"
                        },
                        move: { enable: true, speed: 2 }
                    }
                }}
            />
            
            <div className="main-info">
                <h1>I am XYZ</h1>
                <TypeAnimation
                    className="typed-text"
                    sequence={[
                        "Full Stack Developer", 1000,
                        "Software Engineer", 1000,
                        "Web Developer", 1000,
                    ]}
                    speed={40}
                    deletionSpeed={35}
                    repeat={Infinity}
                />
                <a className="btn-main-offer" href={Resume} download="Abdullah_Resume">Download CV</a>
            </div>
        </div>
    );
};

export default Home;
