import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  createBoard() {
    let board = [];
    for(let y = 0; y < this.props.nRows; y++) {
      let row = [];
      for(let x = 0; x < this.props.nCols; x++){
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }

  flipCellsAround(coord) {
    // console.log('flipping', coord);
    let {nCols, nRows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);  // splitting the coord into two numbers y and x

    function flipCell(y, x) {
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }
    // flip intial cell
    flipCell(y, x);
    // then flip the updownleftright
    flipCell(y, x-1);
    flipCell(y, x+1);
    flipCell(y-1, x);
    flipCell(y+1, x);

    // check every row to see if every cell in the row is false
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({board, hasWon});
  }

  render() {
    if(this.state.hasWon) {
      return <h1>Winner!</h1>
    }
    let tblBoard = [];
    for(let y = 0; y < this.props.nRows; y++ ) {
      let row = [];
      for(let x = 0; x < this.props.nCols; x++) {
        let coord = `${y}-${x}`; 
        row.push(<Cell key={coord} isLit={this.state.board[y][x]} 
          flipCellsAroundMe={() => this.flipCellsAround(coord)} />);  // bind and pass argument
      }                                                  
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }
}


export default Board;
