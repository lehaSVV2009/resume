import React, {Component} from 'react'

import NavigationBar from '../components/NavigationBar'

export default class HeaderPage extends Component {
  // resume is added because of relative path in github pages
  handleOpenPdf = () => window.open('/resume/cv.pdf', '_blank')

  render() {
    return (
      <NavigationBar
        onPdfClick={this.handleOpenPdf}
        breadCrumb={this.props.breadCrumb}
      />
    )
  }
}