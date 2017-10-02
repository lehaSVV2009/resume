import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import FooterPage from './components/FooterPage'
import Fragment from './components/Fragment'
import HomePage from './components/HomePage'
import InterestsPage from './components/InterestsPage'
import ProjectsPage from './components/ProjectsPage'
import SkillsPage from './components/SkillsPage'

import resume from './resume.json'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Fragment color='black' header>
            <HomePage
              fullName={resume.basics.name}
              description={resume.basics.label}
            />
          </Fragment>
          <Fragment color='aquamarine'>
            <AboutPage about={resume.basics.summary}/>
          </Fragment>
          <Fragment>
            <ProjectsPage work={resume.work}/>
          </Fragment>
          <Fragment color='lightskyblue'>
            <SkillsPage skills={resume.skills}/>
          </Fragment>
          <Fragment color='aquamarine'>
            <InterestsPage interests={resume.interests}/>
          </Fragment>
          <Fragment>
            <ContactPage email={resume.basics.email}/>
          </Fragment>
         <Fragment color='black' footer>
            <FooterPage links={resume.basics.profiles}/>
          </Fragment>
        </div>
      </MuiThemeProvider>
    )
  }
}