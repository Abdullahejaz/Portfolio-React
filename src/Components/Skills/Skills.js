import React from 'react'
import './skills.css'
import skillsIcon from '../../Images/skillIcon2.png';
import layerIcon from '../../Images/layer.png';
import educationIcon from '../../Images/educHat2.png';

const Skills = () => {
    return (
        <div className="div-skills" id="skills">
            <div className="div-covers"></div>
                <div className="parallax vertical-center">
                    <div className="container paddingTop">
                        <div className="row">
                        <div className="col-lg-3 col-sm-6">
                                <div className="Skills-tech">
                                    <img className="icon-edu" src={educationIcon} alt="Skills Icon"></img>
                                    <h5 className="title">Education</h5>
                                    <div className="listItem">
                                        <h6>Texas Tech University</h6>
                                        <p>Master of Science</p>
                                    </div>
                                    <div className="listItem">
                                        <h6>DR APJ Abdul Kalam University</h6>
                                        <p>Bachelor Of Science</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="Skills-tech">
                                    <img className="icon" src={skillsIcon} alt="Skills Icon"></img>
                                    <h5 className="title">My Skills</h5>
                                    <div className="listItem">
                                        <h6>Programming Languages</h6>
                                        <p>C#, Java, JavaScript, TypeScript</p>
                                    </div>
                                    <div className="listItem">
                                        <h6>Technologies</h6>
                                        <p>MVC 5, .NET Core, Web API, AWS, PostgreSQL</p>
                                    </div>
                                    <div className="listItem">
                                        <h6>Front-end Framework & Tools</h6>
                                        <p>React, Angular, HTML5, Bootstrap, CSS, PowerApps</p>
                                    </div>
                                    {/* <div className="listItem">
                                        <h6>DBMS</h6>
                                        <p>MySQL, MS SQL Server</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <div className="skills-dev">
                                <img className="icon" src={layerIcon} alt="Layer Icon"></img>
                                    <h5 className="title">Development Skills</h5>

                                    <div className="skill">
                                        <h6>Full Stack Development <span>85%</span></h6>
                                        <div className="skills-progress"><span className="sk1" data-value='90%'></span></div>
                                    </div>
                                    <div className="skill">
                                        <h6>Web Development <span>75%</span></h6>
                                        <div className="skills-progress"><span className="sk2" data-value='80%'></span></div>
                                    </div>
                                    <div className="skill">
                                        <h6>Cloud <span>50%</span></h6>
                                        <div class="skills-progress"><span className="sk3" data-value='65%'></span></div>
                                    </div>
                                    <div className="skill">
                                        <h6>Requirements & Design <span>75%</span></h6>
                                        <div className="skills-progress"><span className="sk4" data-value='75%'></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills
