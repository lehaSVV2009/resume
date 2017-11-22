import React, {Component} from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'typeface-roboto'

import AppLayout from './containers/AppLayout'
import resume from './resume.json'

const theme = createMuiTheme()

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppLayout resume={resume}/>
      </MuiThemeProvider>
    )
  }
}