import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import IconMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import BreadCrumbItem from './BreadCrumbItem'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default class BreadCrumb extends Component {

  createBreadCrumbItems = (items) => {
    return Array.isArray(items) && items.filter(item => !!item).map(item => (
      <BreadCrumbItem 
        key={item.anchor}
        name={item.name}
        anchor={item.anchor}
      />
    ))
  }

  render() {
    const { items } = this.props
    return (
      <div>
        <Mobile>
          <IconMenu
            iconButtonElement={
              <IconButton><IconMoreVert color='white'/></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {this.createBreadCrumbItems(items)}
          </IconMenu>
        </Mobile>
        <Desktop>
          <div style={{ float: 'right' }}>
            {this.createBreadCrumbItems(items)}
          </div>
        </Desktop>
      </div>
    )
  }
}