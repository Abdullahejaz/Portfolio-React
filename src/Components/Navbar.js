import React from 'react'
import logo from '../Images/transparen2.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo...." /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="collapse navbar-collapse abcd" id="navbarScroll">
                <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#header">Header</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar