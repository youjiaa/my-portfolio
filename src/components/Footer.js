import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import githubIcon from "../images/github.svg"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <br /> <br />
          </Fade>
          <a className="email-link">
            {/* {data.contactEmail} */}
            Email: alicewang194@gmail.com <br />
            <br />
            Phone: +1 (872) 221-5589
          </a>
          <div className="social-icons">
            <a href="https://github.com/youjiaa">
              <img src={githubIcon} alt="icons"></img>
            </a>
          </div>

          <Fade bottom cascade>
            <br />
            <h2>{data.contactSubHeading}</h2>
            <br />
          </Fade>
          {/* <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
