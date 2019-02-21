import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AboutPage from "./containers/AboutPage";
import ContactPage from "./containers/ContactPage";
import FooterPage from "./containers/FooterPage";
import Fragment from "./components/Fragment";
import HeaderPage from "./containers/HeaderPage";
import HomePage from "./containers/HomePage";
import InterestsPage from "./containers/InterestsPage";
import ProjectsPage from "./containers/ProjectsPage";
import SkillsPage from "./containers/SkillsPage";

import resume from "./resume.json";

const breadCrumb = [
  {
    name: "Home",
    anchor: "home-page"
  },
  {
    name: "About",
    anchor: "about-page"
  },
  {
    name: "Projects",
    anchor: "projects-page"
  },
  {
    name: "Skills",
    anchor: "skills-page"
  },
  {
    name: "Interests",
    anchor: "interests-page"
  },
  {
    name: "Contact",
    anchor: "contact-page"
  }
];

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeaderPage breadCrumb={breadCrumb} />
          <Fragment color="#473a56" tag={breadCrumb[0].anchor} home>
            <HomePage
              fullName={resume.basics.name}
              description={resume.basics.label}
            />
          </Fragment>
          <Fragment color="#F7F5E6" tag={breadCrumb[1].anchor}>
            <AboutPage
              picture={resume.basics.picture}
              about={resume.basics.summary}
            />
          </Fragment>
          <Fragment tag={breadCrumb[2].anchor}>
            <ProjectsPage work={resume.work} />
          </Fragment>
          <Fragment color="#F7F5E6" tag={breadCrumb[3].anchor}>
            <SkillsPage skills={resume.skills} />
          </Fragment>
          <Fragment color="#473a56" tag={breadCrumb[4].anchor}>
            <InterestsPage interests={resume.interests} />
          </Fragment>
          <Fragment tag={breadCrumb[5].anchor}>
            <ContactPage email={resume.basics.email} />
          </Fragment>
          <Fragment color="#473a56" footer>
            <FooterPage links={resume.basics.profiles} />
          </Fragment>
        </div>
      </MuiThemeProvider>
    );
  }
}
