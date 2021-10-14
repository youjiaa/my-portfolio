import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              <br />
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
              {data.aboutPara4}
              <br></br>
              <br></br>
              {data.aboutPara5}
              <br></br>
              <br></br>
              {data.aboutPara6}
              <br></br>
              <br></br>
              {data.aboutPara7}
              <br></br>
              <br></br>
              {data.aboutPara8}
              <br></br>
              <br></br>
              {data.aboutPara9}
              <br></br>
              <br></br>
              {data.aboutPara10}
              <br></br>
              <br></br>
              {data.aboutPara11}
              <br></br>
              <br></br>
              {data.aboutPara12}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
