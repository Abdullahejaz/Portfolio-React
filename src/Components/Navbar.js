import React from 'react'
import logo from '../Images/transparent3.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light dark-theme">
        <div className="container-fluid">
            <a className="navbar-brand" href="#header"><img className="logo" src={logo} alt="logo...." />Abdullah</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="collapse navbar-collapse abcd" id="navbarScroll">
                <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#header">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
