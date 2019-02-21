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
    this.winStatus = false;

    this.state = {
      cells: this.fillTable(),
      crossStatus: [],
      circleStatus: [],
    }
  }
  putValueToArray = (cell) => {
    console.log(cell);
    if(cell.isEmpty) {
      let id = +cell.id;   
      let newCells = [...this.state.cells];
      let crossStatus = [...this.state.crossStatus ];
      let circleStatus = [...this.state.circleStatus];

      newCells[id].isEmpty = null;
      if(this.counter++ % 2 === 0) {
        newCells[id].status = 'cross'
        crossStatus.push(id);
      } else {
        newCells[id].status = 'circle'
        circleStatus.push(id);
      }

      this.setState({
        cells: newCells,
        circleStatus: circleStatus.sort((a,b) => a < b ? -1 : 1),
        crossStatus: crossStatus.sort((a,b) => a < b ? -1 : 1),
      },() => {
        this.checkWinCombination();
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

  checkWinCombination = () => {
    this.winCombination.map(combination => {
      let crossStatus = this.state.crossStatus.filter(item => ~combination.indexOf(item));
      let circleStatus = this.state.circleStatus.filter(item => ~combination.indexOf(item));

        if (JSON.stringify(combination) === JSON.stringify(crossStatus)) {
          this.winStatus = 'X';
          alert(`WIN: ${this.winStatus}`);
          this.restartGame();
          return;
        } else if (JSON.stringify(combination) === JSON.stringify(circleStatus)) {
            this.winStatus = 'O';
            alert(`WIN: ${this.winStatus}`);
            this.restartGame();
            return;
        }
    })
    if(!this.winStatus && this.counter >= 9) {
      this.winStatus = 'Draw';
      alert(this.winStatus);
      this.restartGame();;
      return;
    }
  }

  restartGame = () => {
    this.setState({
        cells: this.fillTable(),
        crossStatus: [],
        circleStatus: [] 
    },() => {
      this.counter = 0;
      this.winStatus = false;
    })
  }

  render() {
    return(
    <div>
      <div className="Game">
        {this.state.cells.map((cell, index) => {
          return (
            <div 
            key={index}
            className={`Game__cell ${cell.status ? `Game__cell-${cell.status}` : ''}`}
            onClick={() => {
              this.putValueToArray(cell)
            }}
            >
            </div>)
        })}
      </div>
      <div className="Game__restart-btn" onClick={this.restartGame}>RESTART GAME</div>
    </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById('app'));