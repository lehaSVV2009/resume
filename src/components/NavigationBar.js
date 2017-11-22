import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconPdf from 'material-ui/svg-icons/image/picture-as-pdf'

export default class NavigationBar extends Component {
  // resume is added because of relative path in github pages
  handleOpenPdf = () => window.open('/resume/cv.pdf', '_blank')

  render() {
    return (
      <AppBar
        style={{ backgroundColor: '#473a56', position: 'fixed', zIndex: 1 }}
        showMenuIconButton={false}
        iconElementRight={<IconButton><IconPdf color={'white'}/></IconButton>}
        onRightIconButtonTouchTap={this.handleOpenPdf}
      />
    )
  }
}