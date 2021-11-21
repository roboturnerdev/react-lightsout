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
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }

  render() {
    let tblBoard = [];
    for(let y = 0; y < this.props.nRows; y++ ) {
      let row = [];
      for(let x = 0; x < this.props.nCols; x++) {
        let coord = `${y}-${x}`;  // set each cell to have its coord as the unique key
        row.push(<Cell key={coord} isLit={this.state.board[y][x]}/>); // loops over the rows, then columns
      }                                                   // and draws a cell passing down whether it is on or not as prop
      tblBoard.push(<tr key={y}>{row}</tr>);    // push the whole row element
    }
    return (
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
