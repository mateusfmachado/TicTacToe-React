import React from 'react';
import './Tictactoe.css';

//import children classes and functions
import DisplayScore from './DisplayScore';
import Restart from './Restart';
import Tiles from './Tiles';

export default class Tictactoe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
      tiles: this.resetBoard(),
      player: 1,
      tilesClicked: 0
    };
    this.checkGame = this.checkGame.bind(this);
    this.findWinner = this.findWinner.bind(this);
  }

  resetBoard() {
    return [
      {position:1,style:{backgroundColor:"#989"},clicked: false},
      {position:2,style:{backgroundColor:"#989"},clicked: false},
      {position:3,style:{backgroundColor:"#989"},clicked: false},
      {position:4,style:{backgroundColor:"#989"},clicked: false},
      {position:5,style:{backgroundColor:"#989"},clicked: false},
      {position:6,style:{backgroundColor:"#989"},clicked: false},
      {position:7,style:{backgroundColor:"#989"},clicked: false},
      {position:8,style:{backgroundColor:"#989"},clicked: false},
      {position:9,style:{backgroundColor:"#989"},clicked: false},
    ];
  }

  restartGame () {
    this.setState({scorePlayer1: 0,scorePlayer2:0,tiles:this.resetBoard(),tilesClicked:0,player: this.state.player === 1 ?2 : 1});
  }

  clickTile (tileId) {
    if(this.state.tiles[tileId-1].clicked){
      return;
    }

    var player = this.state.player;

    const auxTiles = this.state.tiles.slice();
    if(this.state.player === 1){
      auxTiles[tileId-1].style.backgroundColor = "#1ab";
    } else {
      auxTiles[tileId-1].style.backgroundColor = "#cb3";
    }
    auxTiles[tileId-1].clicked = this.state.player;
    
    let _this = this;
    this.setState({
      tiles: auxTiles,
      player: this.state.player === 1 ? 2 : 1,
      tilesClicked : this.state.tilesClicked+1
    }, function(){
      if(_this.state.tilesClicked>=5){
        _this.checkGame();
      }
    });
  }

  checkGame(){
    for(var i=1;i<=2;i++){
      if((this.state.tiles[0].clicked ===i && this.state.tiles[1].clicked ===i && this.state.tiles[2].clicked ===i) ||
         (this.state.tiles[3].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[5].clicked ===i) ||
         (this.state.tiles[6].clicked ===i && this.state.tiles[7].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[0].clicked ===i && this.state.tiles[3].clicked ===i && this.state.tiles[6].clicked ===i) ||
         (this.state.tiles[1].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[7].clicked ===i) ||
         (this.state.tiles[2].clicked ===i && this.state.tiles[5].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[0].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[0].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[2].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[6].clicked ===i)){
          alert("player "+i+" won!");
          return this.findWinner(i);
      }
    }

    if(this.state.tilesClicked ===9){
      alert("DRAW");
      return this.findWinner(false);
    }
  }

  findWinner(winner){
    if(winner){
      this.setState({
        tilesClicked: 0,
        tiles: this.resetBoard(),
        player: winner === 1 ? 2 : 1,
        scorePlayer1: winner === 1 ? this.state.scorePlayer1+1 : this.state.scorePlayer1,
        scorePlayer2: winner === 2 ? this.state.scorePlayer2+1 : this.state.scorePlayer2,
      });
    } else {
      this.setState({
        tilesClicked: 0,
        tiles: this.resetBoard(),
        player: this.state.player === 1 ? 2 : 1
      });
    }
    return alert("Player "+this.state.player+ " start!");
  }

  render() {
    return (
      <div className="tictactoe">
        <h1>TIC TAC TOE</h1>
        <div className="options">
          <DisplayScore scorePlayer1={this.state.scorePlayer1} scorePlayer2={this.state.scorePlayer2} />
          <Restart onClick={this.restartGame.bind(this)}/>
        </div>
        <div className='tiles'>
          <Tiles tiles={this.state.tiles} onClick={this.clickTile.bind(this)}/>
        </div>
      </div>
    );
  }
};
