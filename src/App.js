import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AboutPage from './containers/AboutPage'
import ContactPage from './containers/ContactPage'
import FooterPage from './containers/FooterPage'
import Fragment from './components/Fragment'
import HomePage from './containers/HomePage'
import InterestsPage from './containers/InterestsPage'
import ProjectsPage from './containers/ProjectsPage'
import SkillsPage from './containers/SkillsPage'

import resume from './resume.json'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Fragment color='#333A56' header>
            <HomePage 
              fullName={resume.basics.name}
              description={resume.basics.label}
            />
          </Fragment>
          <Fragment color='#F7F5E6'>
            <AboutPage about={resume.basics.summary}/>
          </Fragment>
          <Fragment>
            <ProjectsPage work={resume.work}/>
          </Fragment>
          <Fragment color='#F7F5E6'>
            <SkillsPage skills={resume.skills}/>
          </Fragment>
          <Fragment color='#333A56'>
            <InterestsPage interests={resume.interests}/>
          </Fragment>
          <Fragment>
            <ContactPage email={resume.basics.email}/>
          </Fragment>
         <Fragment color='#333A56' footer>
            <FooterPage links={resume.basics.profiles}/>
          </Fragment>
        </div>
      </MuiThemeProvider>
    )
  }
}