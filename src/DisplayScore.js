import React from 'react';

var style = {
  displayScore: {
    color: "#989",
    fontSize: 15,
  }
};

export default class DisplayScore extends React.Component {
  render (){
    return (
      <div className='display-score' style={{textAlign:'center'}}>
        <h4 style={style.displayScore}>SCORE</h4>
        <h5 style={style.displayScore}>
        PLAYER 1: <span style={{color: this.props.scorePlayer1>this.props.scorePlayer2 ? "blue" : "red"}}>{this.props.scorePlayer1}</span>
        ||
        PLAYER 2: <span style={{color: this.props.scorePlayer2>this.props.scorePlayer2 ? "blue" : "red"}}>{this.props.scorePlayer2}</span>
        </h5>
      </div>
    );
  }
};
