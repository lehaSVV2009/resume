import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconPdf from 'material-ui/svg-icons/image/picture-as-pdf'

import BreadCrumb from './BreadCrumb'
import Desktop from './Desktop'
import Mobile from './Mobile'

const appBarStyle = {
  backgroundColor: '#473a56',
  position: 'fixed',
  zIndex: 1,
}

const pdfButton = <IconButton><IconPdf color='white'/></IconButton>

export default class NavigationBar extends Component {
  handlePdfClick = () => this.props.onPdfClick()

  render() {
    return (
      <div>
        <Mobile>
          <AppBar
            style={appBarStyle}
            iconElementLeft={pdfButton}
            onLeftIconButtonTouchTap={this.handlePdfClick}
            iconElementRight={<BreadCrumb items={this.props.breadCrumb}/>}
          />
        </Mobile>
        <Desktop>
          <AppBar
            style={appBarStyle}
            iconElementLeft={pdfButton}
            onLeftIconButtonTouchTap={this.handlePdfClick}
            title={<BreadCrumb items={this.props.breadCrumb}/>}
          />
        </Desktop>
      </div>
    )
  }
}
