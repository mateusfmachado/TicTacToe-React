import React from 'react';
import Tile from './Tile.js';

var style={
  width: 160,
};

export default class Tiles extends React.Component {
  render (){
    var _this = this;
    return (
      <div className="tiles" style={style}>
      {this.props.tiles.map(function(tile){
          return (<Tile tile={tile} onClick={_this.props.onClick} key={tile.position-1}/>);
        })}
      </div>
    );
  }
};
