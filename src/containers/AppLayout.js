import React, {Component} from 'react'
import PropTypes from 'prop-types'

import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Interests from './Interests'
import Page from '../components/Page'
import Projects from './Projects'
import ResumeNotFound from '../components/ResumeNotFound'
import Skills from './Skills'

class AppLayout extends Component {
  render() {
    const { resume } = this.props

    if (!resume) {
      return (<ResumeNotFound/>)
    }

    return (
      <div>
        <Header/>
        <Page color='#473a56'>
          <Home/>
        </Page>
        <Page color='#F7F5E6'>
          <About/>
        </Page>
        <Page>
          <Experience/>
        </Page>
        <Page color='#473a56'>
          <Projects/>
        </Page>
        <Page color='#F7F5E6'>
          <Skills/>
        </Page>
        <Page>
          <Education/>
        </Page>
        <Page color='#473a56'>
          <Interests/>
        </Page>
        <Page color='#F7F5E6'>
          <Contact/>
        </Page>
        <Footer/>
      </div>
    )
  }
}

AppLayout.propTypes = {
  resume: PropTypes.object.isRequired,
}

export default AppLayout