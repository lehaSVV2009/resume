import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconPdf from 'material-ui/svg-icons/image/picture-as-pdf'

export default class NavigationBar extends Component {
  handleOpenPdf = () => window.open('/cv.pdf', '_blank')

  render() {
    return (
      <AppBar 
        style={{ backgroundColor: '#473a56', position: 'fixed', height: '8%', zIndex: 1 }}
        showMenuIconButton={false}
      >
        <IconButton onTouchTap={this.handleOpenPdf}>
          <IconPdf color={'white'} />
        </IconButton>
      </AppBar>
    )
  }
}
