import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconPdf from 'material-ui/svg-icons/image/picture-as-pdf'

import BreadCrumb from './BreadCrumb'

export default class NavigationBar extends Component {
  handlePdfClick = () => this.props.onPdfClick()

  render() {
    return (
      <AppBar
        style={{ backgroundColor: '#473a56', position: 'fixed', zIndex: 1 }}
        iconElementLeft={<IconButton><IconPdf color='white'/></IconButton>}
        onLeftIconButtonTouchTap={this.handlePdfClick}
        iconElementRight={<BreadCrumb items={this.props.breadCrumb}/>}
      />
    )
  }
}
