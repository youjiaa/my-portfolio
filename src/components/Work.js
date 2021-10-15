import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>
          <br />
          {/* <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div> */}
          <div className="myCard">
            <div className="flexDesign">
              <div>
                <h2>Client: ThreatConnect</h2>
                <h2>Project: ThreatConnect SOAR Platform</h2>
              </div>
              <div>
                <h4>March, 2020 to Present</h4>
                <h4>Arlington, VA</h4>
              </div>
            </div>
            <h3 className="myLeft">Responsibilities:</h3>
            <p className="workP">
              - Involved in designing, developing, and testing the web
              application by using the HTML5, CSS3, Bootstrap, and React <br />
              <br />
              - Involved in using React components, Forms, Events, Keys, Router,
              Animations, and Flux concepts. <br />
              <br />- Implemented Flux pattern architecture for the project
              using React and Redux. Developed drag and drop document editing
              module without any dnd library dependency. <br />
              <br />
              - Implemented Higher Order Component(HOC) to make loading and page
              shifting animation components reusable. <br />
              <br />- Managed state within the app using Redux and persisted
              certain parts of the state to the device via Redux Persist. <br />
              <br />- Used Middleware like Redux-thunk in application to
              retrieve data from the back end and to also perform RESTFUL
              services.
              <br />
              <br />- Implemented HTTP REST API using NodeJS/Express and
              extensively tested RESTful services using Postman. <br />
              <br />- Worked with React Component Lifecycle in updating the
              Virtual DOM. Developed, tested, and deployed Business feature set
              in Node.js with Express and MongoDB backend. <br />
              <br />- Worked with Passport and JSON web tokens for
              authentication and authorization security configurations using
              NodeJs. <br />
              <br />- Designed Responsive Web pages using media queries and
              Bootstrap. <br />
              <br />- Built custom UI Widgets and Application logic using UI and
              MVVM architecture. <br />
              <br />- Extensively used Git version control system and built
              HTML5/CSS3 based page layouts that are cross-browser compatible
              and standards-compliant.
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="myCard">
            <div className="flexDesign">
              <div>
                <h2>Client: Mercury Analytics</h2>
                <h2>Project: Mercury Portal</h2>
              </div>
              <div>
                <h4>March, 2019 to March, 2020</h4>
                <h4>Washington D.C.</h4>
              </div>
            </div>
            <h3 className="myLeft">Responsibilities:</h3>
            <p className="workP">
              - Worked on the state, specs, props, and events to create
              interactive React JS components. <br />
              <br />- Used React JS for templating for faster compilation and
              developing reusable components. <br />
              <br />- Developed RESTful Web services for backends using NodeJS,
              ExpressJS, and MongoDB (NoSQL) for database services, handling
              HTTP requests by using Axios. <br />
              <br />- Heavily involved in UI development to support
              cross-browser compatibility. <br />
              <br />- Responsive design with Ant design, Tailwind, and Argon
              Dashboard (based on Bootstrap 4) <br />
              <br />- Worked with clients at every stage of implementation of
              the integration, for instance, to gather requirements, review
              completed implementation. <br />
              <br />- Used Mongoose to write CRUD operations for retrieving and
              updating data. <br />
              <br />- Used GIT for version control for project management.
              <br />
              <br />- Responsive design with Ant design, Tailwind, and Argon
              Dashboard (based on Bootstrap 4) <br />
              <br />- Worked in an Agile environment with active scrum
              participation
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="myCard">
            <div className="flexDesign">
              <div>
                <h2>Client: VetStreet</h2>
                <h2>Project: Trade Sales Campaign</h2>
              </div>
              <div>
                <h4>March, 2017 to March, 2019</h4>
                <h4>Washington D.C.</h4>
              </div>
            </div>
            <h3 className="myLeft">Responsibilities:</h3>
            <p className="workP">
              - Worked on server-side web applications using NodeJs and involved
              in the Construction of UI using HTML5, CSS3, JavaScript, Ext JS,
              and Bootstrap. <br />
              <br />- Designed CSS templates for all pages of the website by
              utilizing CSS Background, positioning, text border, margin,
              padding, and table. <br />
              <br />- Designed the front-end applications, user interactive UI
              web pages using web technologies like HTML, CSS, jQuery,
              JavaScript, JSON, XML. <br />
              <br />- Utilized jQuery UI to create various UI components like
              the accordion menu, Calendar, Progress bar, tooltips, and various
              other animations. <br />
              <br />- Designed Responsive Web pages using media queries and
              Bootstrap. <br />
              <br />- Built custom UI Widgets and Application logic using UI and
              MVC architecture. Created nested forms for users to customize the
              templates and order a print preview. <br />
              <br />- Converted the mock-ups into hand-written HTML, CSS 2/3,
              JavaScript, JQuery, AJAX, XML and JSON. Developed user
              authentication and order processing modules for customer-facing
              applications. <br />
              <br />- Organized and facilitated Agile and Scrum meetings, which
              included Sprint Planning, Daily Scrums or Stand- ups, Sprint
              Review, and Retrospective
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
