import React, {Component} from 'react'
import Grid from 'material-ui/Grid'

class Page extends Component {
  render() {
    return (
      <Grid container justify='center' style={{ backgroundColor: this.props.color || 'white' }}>
        <Grid item xs={12} sm={10} md={8}>
          { this.props.children }
        </Grid>
      </Grid>
    )
  }
}

export default Page