import React from 'react';

export default class Tile extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:this.props.tile.style.backgroundColor, width:"50px",height:"20vh",borderRadius:5}} onClick={this.props.onClick.bind(null, this.props.tile.position)} ></div>
    );
  }
};
