import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import IconMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import BreadCrumbItem from './BreadCrumbItem'

export default class BreadCrumb extends Component {
  render() {
    const { items } = this.props
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><IconMoreVert color='white'/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        {
          Array.isArray(items) && items.filter(item => !!item).map(item => (
            <BreadCrumbItem 
              key={item.anchor}
              name={item.name}
              anchor={item.anchor}
            />
          ))
        }
      </IconMenu>
    )
  }
}