import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="startup-projects-main">
            <div className="project-inline">
              <div className="project-card" onClick={() => openProjectInNewWindow()}>
                <img style={{marginTop: "50px", height: "90px", width: "350px"}} alt="no image" src={require("../../assets/icons/eduhive.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow()}>
                <img style={{marginTop: "18px", height: "75px", width: "250px"}} alt="no image" src={require("../../assets/icons/eduhive.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow()}>
                <img style={{marginTop: "18px", height: "145px", width: "200px"}} alt="no image" src={require("../../assets/icons/scholars.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow()}>
                <img style={{marginTop: "45px",height: "110px", width: "350px"}} alt="no image" src={require("../../assets/icons/texthive.png")}></img>
              </div>
            </div>
            {/* <div className="starup-project-image"></div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
