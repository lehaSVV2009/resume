import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import FooterPage from './components/FooterPage'
import Fragment from './components/Fragment'
import HomePage from './components/HomePage'
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
              fullName={resume.fullName}
              description={resume.description}
            />
          </Fragment>
          <Fragment color='aquamarine'>
            <AboutPage about={resume.about}/>
          </Fragment>
          <Fragment>
            <ProjectsPage projects={resume.projects}/>
          </Fragment>
          <Fragment color='lightskyblue'>
            <SkillsPage skills={resume.skills}/>
          </Fragment>
          <Fragment>
            <ContactPage email={resume.email}/>
          </Fragment>
         <Fragment color='black' footer>
            <FooterPage links={resume.links}/>
          </Fragment>
        </div>
      </MuiThemeProvider>
    )
  }
}