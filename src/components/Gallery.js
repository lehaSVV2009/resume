import React, {Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

export default class Gallery extends Component {
  render() {
    const { tiles } = this.props;

    if (!Array.isArray(tiles)) {
      return (<span/>)
    }

    return (
      <GridList>
        {tiles.map((tile, index) => (
          <GridTile
            key={index}
            title={tile.title}
            actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
          >
            <img src={tile.image} alt={tile.title}/>
          </GridTile>
        ))}
      </GridList>
    )
  }
}