import React from 'react';
import Square from '../Square/Square.jsx';
import './Board.scss';
import _ from 'lodash'

class Board extends React.Component {

    constructor() {
        super();
        this.players = ['X', 'O'];
        this.lines = [
            //Horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //Vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //Across
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.state = {
            squares: new Array(9).fill(''),
            isX: null,
            winner: null
        };
    }

    componentWillMount = () => {
        this.selectFirstPlayer();
    }

    checkForWinners = () => {
        _.each(this.lines, (line) => {
            const [a, b, c] = line;

            if(this.state.squares[a] && this.state.squares[a] == this.state.squares[b] && this.state.squares[a] == this.state.squares[c]){
                this.setState({
                    winner: this.state.squares[a]
                });
            }
        });
    }

    onSquareClick = (index, value) => {
        if(!value && !this.state.winner) {
            const squares = this.state.squares;
            squares[index] = this.state.isX ? 'X' : 'O';
            this.setState({
                squares: squares,
                isX: !this.state.isX
            });
            this.checkForWinners();
        }
    }

    selectFirstPlayer = () => {
        let players = this.players,
            firstPlayer = players[Math.floor(Math.random() * players.length)];

        this.setState({
            isX: firstPlayer === 'X'
        });
    }

    resetGame = () => {
        this.setState({
            squares: new Array(9).fill(''),
            isX: this.selectFirstPlayer(),
            winner: null
        });
    }

    render() {
        return (
            <div className="board">
                <div className="current-player">Current player: <strong>{this.state.isX ? 'X' : 'O'}</strong></div>
                <div className="board-row">
                    <Square index="0" value={this.state.squares[0]} onClick={this.onSquareClick} />
                    <Square index="1" value={this.state.squares[1]} onClick={this.onSquareClick}  />
                    <Square index="2" value={this.state.squares[2]} onClick={this.onSquareClick}  />
                </div>
                <div className="board-row">
                    <Square index="3" value={this.state.squares[3]} onClick={this.onSquareClick}  />
                    <Square index="4" value={this.state.squares[4]} onClick={this.onSquareClick}  />
                    <Square index="5" value={this.state.squares[5]} onClick={this.onSquareClick}  />
                </div>
                <div className="board-row">
                    <Square index="6" value={this.state.squares[6]} onClick={this.onSquareClick}  />
                    <Square index="7" value={this.state.squares[7]} onClick={this.onSquareClick}  />
                    <Square index="8" value={this.state.squares[8]} onClick={this.onSquareClick}  />
                </div>
                <div className="winner">And the winner is: <strong>{this.state.winner}</strong></div>
                <div className="reset">
                    <button onClick={this.resetGame} disabled={this.state.winner ? '' : 'disabled'}>Reset!</button>
                </div>
            </div>
        )
    }
}

export default Board;