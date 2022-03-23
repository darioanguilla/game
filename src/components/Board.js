import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {

    

  render() {
    return (
      <div>
        <div>{this.renderRow(1, [0, 1, 2])}</div>
        <div>{this.renderRow(2, [3, 4, 5])}</div>
        <div>{this.renderRow(3, [6, 7, 8])}</div>
      </div>
    );
  }

  renderRow(row_key, indexes) {
    return (
        <div>{indexes.map((index) => this.renderSquare(index))}</div>
    )
  }

  renderSquare(index) {
    return (
        <Square 
            key={index}
            value={this.props.squares[index]} 
            handleClick={() => this.props.handleClick(index)}
            isWinner={this.props.winningSquares.includes(index)}
        />
    )
  }
}
