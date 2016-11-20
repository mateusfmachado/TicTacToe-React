import React from 'react';

var style = {
  restar: {
    color: "#989",
    fontSize: 30,
  }
};

export default class Restart extends React.Component {
  handleClick() {
    this.props.onClick();
  }

  render () {
    return (
      <h5 style={style.restart}>
        <a href="#" onClick={this.handleClick.bind(this)}>RESTART</a>
      </h5>
    );
  }
};
