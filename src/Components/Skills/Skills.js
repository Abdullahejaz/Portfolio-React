import React from 'react'
import { Container } from 'tsparticles'
import './skills.css'

const Skills = () => {
    return (
        <div className="div-skills" id="skills">
            <div className="div-covers"></div>
                <div className="parallax vertical-center">
                    <div className="container paddingTop">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="Skills-tech">
                                    <span class="icon icon-pencil"></span>
                                    <h5 class="title">Education</h5>
                                    <ul>
                                        <li>
                                            <h6>Programming Languages</h6>
                                            <p>C#, Java</p>
                                        </li>
                                        <li>
                                            <h6>Technologies</h6>
                                            <p>MVC 5, .NET Core, .NET Core Web API</p>
                                        </li>
                                        <li>
                                            <h6>Client And Browser Tools</h6>
                                            <p>AJAX, React, HTML5, Bootstrap, CSS, JQuery, JavaScript</p>
                                        </li>
                                        <li>
                                            <h6>DBMS</h6>
                                            <p>MySQL, MS SQL Server</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div class="skills-dev">
                                    <span class="icon icon-layers"></span>
                                    <h5 class="title">My Skills</h5>

                                    <div class="skill">
                                        <h6>Web Design <span>90%</span></h6>
                                        <div class="skills-progress"><span data-value='90%'></span></div>
                                    </div>
                                    <div class="skill">
                                        <h6>Development <span>80%</span></h6>
                                        <div class="skills-progress"><span data-value='80%'></span></div>
                                    </div>
                                    <div class="skill">
                                        <h6>Branding <span>85%</span></h6>
                                        <div class="skills-progress"><span data-value='85%'></span></div>
                                    </div>
                                    <div class="skill">
                                        <h6>Marketing <span>75%</span></h6>
                                        <div class="skills-progress"><span data-value='75%'></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           <div className="div-covers"></div>
        </div>
    )
}

export default Skills
