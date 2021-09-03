import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className="about" id="about">
            <br />
            <h1 style={{textAlign: "center", fontWeight: 500, fontSize: 42,color: "black",marginTop: -10}}>About Me</h1>
            <hr style={{width: 150, marginTop: "-25px",height: 3, backgroundColor: "#18d26e", border: "none"}}/>
            <div className="aboutMain">
                <div className="aboutLeft">
                    <img src="animation1.gif" alt="" />
                </div>
                <div className="aboutRight">
                    <br />
                    <h1 style={{ fontWeight: 500, fontSize: 30}}>I'm Abhishek, a <span style={{ color: "#18d26e"}}>Full Stack Web Developer</span></h1>
                    <p>A passionate Developer, with strong administrative and communication skills, good attention to detail and with the ability to write efficient code using MERN Stack.</p>

                    <p>I have been developing Web Apps for over 6 months now. Well versed in coding using Javascript and its frameworks.</p>

                    <p>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</p>
                </div>
            </div>
        </div>
    )
}

export default About
