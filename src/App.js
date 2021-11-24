import React from 'react';
import styles from './App.module.css'
import {Board} from "./Board"
import {Status} from "./Status";
import {cloneArray} from './utils/cloneArray';
import {create2DArray} from "./utils/create2DArray";
import {calculateWinner} from "./calculateWinner";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.boardSize = 7;
        this.maxStepNumber = this.boardSize * this.boardSize;

        const moves = create2DArray(this.boardSize, 0);
        const rows = create2DArray(this.boardSize, this.boardSize, null);

        this.state = {
            firstPlayer: true,
            isWinner: false,
            moves: moves,
            rows: rows,
            selectedCol: null,
            stepNumber: 0,
        }
    }

    /**
     * Creates board rows.
     * @param {Array} moves Players moves stored for each column.
     */
    createRows = (moves) => {
        const rows = [...Array(this.boardSize)].map(() => moves.map((column) => column.pop()));
        return rows.reverse();
    };

    /**
     * Highlights selected column.
     * @param {!Event} event The event associated with the on mouse enter.
     */
    handleChange = (event) => {
        const isWinner = calculateWinner(this.state.rows, this.boardSize);
        const isGameEnd = this.state.stepNumber === this.maxStepNumber;
        if (isWinner || isGameEnd) {
            this.setState({
                selectedCol: null,
            });
            return
        }

        const colNr = event.target.dataset.col;
        this.setState({
            selectedCol: colNr,
        });
    };

    /**
     *  Places tile on the board.
     * @param {!Event} event The event associated with the click.
     */
    handleClick = (event) => {
        const colNr = event.target.dataset.col;
        const isWinner = calculateWinner(this.state.rows, this.boardSize);
        const isColFull = this.state.moves[colNr].length === this.boardSize;
        if (isWinner || isColFull) {
            return;
        }

        this.setState(state => {
            const moves = cloneArray(state.moves);
            const column = moves[colNr];
            column.unshift(state.firstPlayer ? "A" : "B");
            return {
                firstPlayer: !state.firstPlayer,
                moves: moves,
                stepNumber: state.stepNumber + 1
            }
        });

        this.setState(state => {
            const moves = cloneArray(state.moves);
            const rows = this.createRows(moves);
            return {
                rows: rows
            }
        })

    };

    render() {
        const isWinner = calculateWinner(this.state.rows, this.boardSize);
        const winnerLine = isWinner ? isWinner.keys : [];

        return (
          <main>
              <section>
                  <h1 className={styles.GameTitle}>Connect 4</h1>

                  <div className={styles.Game}>

                      <Status
                        firstPlayer={this.state.firstPlayer}
                        isWinner={isWinner}
                        maxStepNumber={this.maxStepNumber}
                        stepNumber={this.state.stepNumber}
                      />

                      <Board
                        boardSize={this.boardSize}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                        isWinner={isWinner}
                        rows = {cloneArray(this.state.rows)}
                        selected={this.state.selectedCol}
                        winnerLine = {winnerLine}
                      />

                  </div>

              </section>
          </main>
        )
    }

};
