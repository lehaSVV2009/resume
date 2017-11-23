import React, {Component} from 'react'
import { Link } from 'react-scroll'
import MenuItem from 'material-ui/MenuItem'

export default class BreadCrumbItem extends Component {
  render() {
    const { anchor, name } = this.props

    if (!anchor || !name) {
      return <span/>
    }

    return (
      <Link 
        to={this.props.anchor}
        offset={-150}
        duration={1000}
        smooth
       >
        <MenuItem 
          primaryText={name}
        />
      </Link>
    )
  }
}