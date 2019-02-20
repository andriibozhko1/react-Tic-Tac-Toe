import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';


class Game extends Component{
  constructor(props) {
    super(props);

    this.counter = 0;
    this.winCombination = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    this.state = {
      cells: this.fillTable(),
    }
  }
  checkWinCombination = (event) => {
    if(event.target.dataset.isEmpty) {
      let id = +event.target.dataset.id;   
      let newCells = [... this.state.cells];
      newCells[id].isEmpty = null;
      this.counter++ % 2 === 0 ? newCells[id].status = 'X' : newCells[id].status = '0';

      this.setState({
        cells: newCells,
      })
    }
  }

  fillTable = () => {
    let cells = [];
    for(let i = 0; i < 9; i++) {
      let cell = {
        isEmpty: true,
        status: false,
        id: i,
      }
      cells.push(cell);
    }
    return cells;
  }

  render() {
    return(
      <div className="Game">
        {this.state.cells.map((cell, index) => {
          return (
            <div 
            key={index}
            className="Game__cell"
            data-status={cell.status}
            data-id={cell.id}
            data-is-empty={cell.isEmpty}
            onClick={this.checkWinCombination}
            >
            {cell.status}
            </div>)
          
        })}
      </div>
    )
  }
}


ReactDOM.render(<Game />, document.getElementById('app'));