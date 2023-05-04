import React from "react";

import './Skills.css'

const Skills = () => {
    return (
        <div className="skills-container">
            <h1> <span className="skills-title">hard skills set</span> <span className="introduction-main-text-02"></span></h1>
            <p className="skills-sub-title">My current hard skills ranges from  </p>
            <div className="skills-cards-container">
                <div className="skills-card">
                    <div className="skills-card-info">
                        <h1>Programming languages</h1>
                        <li><p>Java</p></li>
                        <li><p>Javascript</p></li>
                        <li><p>Python</p></li>
                        <li><p>C</p></li>
                    </div>
                </div>
                <div className="skills-card">
                    <div className="skills-card-info">
                        <h1>Frameworks || libraries</h1>
                        <li><p>Express</p></li>
                        <li><p>React</p></li>
                        <li><p>Sequelize</p></li>
                    </div>
                </div>
                <div className="skills-card">
                    <div className="skills-card-info">
                        <h1><p>Databases</p></h1>
                        <li><p>Firebase</p></li>
                        <li><p>MySQL</p></li>
                    </div>
                </div>
                <div className="skills-card">
                    <div className="skills-card-info">
                        <h1>Code versioning</h1>
                        <li><p>Git</p></li>
                        <li><p>GitHub</p></li>
                    </div>
                </div>
                <div className="skills-card">
                    <div className="skills-card-info">
                        <h1><p>Automation</p></h1>
                        <li><p>Bash</p></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;