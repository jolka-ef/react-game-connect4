import React from 'react';
import PropTypes from "prop-types";
import styles from './Board.module.css'
import {Square} from "./Square"
import {ordinalNumbers} from "./utils/ordinalNumbers";

export const Board = (props) => {
  const {
    boardSize,
    handleChange,
    handleClick,
    selected,
    winnerLine
  } = props;

  let {rows} = props;

  const cols = [...Array(boardSize)].map((el, colNr) => {
      let className = styles.TableCol;
        if (selected == colNr) {
         className += ` ${styles.TableColHighlight}`;
       }
      return (
        <col
          className={className}
          data-index={colNr}
          key={colNr*colNr}
        />
      )
    }
  );

  const headers = [...Array(boardSize)].map((el, colNr) =>
    <th
      className={styles.Headers}
      key={colNr*colNr}
      scope="col"
    >
      {`${ordinalNumbers[colNr+1]} column`}
    </th>);

  const isInWinnerLine = (key) => {
    return winnerLine.includes(key)
  };

  rows = rows.map((row, rowNr) => (
    row.map((value, colNr) =>
      (<td className={styles.TableCell}
            key={rowNr+colNr}>
          <Square
            handleChange={handleChange}
            handleClick={handleClick}
            colNr={colNr}
            key={`${rowNr}_${colNr}`}
            player={value}
            winner={isInWinnerLine(`${rowNr}_${colNr}`)}
          />
      </td>)
    )
  ));


  return (
    <div className={styles.TableContainer}>
      <table className={styles.Table}>
        <colgroup>
          {cols}
        </colgroup>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody className={styles.TableContent}>
          {rows.map((row, index) => <tr key={index*index}>{row}</tr>)}
        </tbody>
      </table>
    </div>
  )
};

Board.propTypes = {
  boardSize : PropTypes.number,
  handleChange : PropTypes.func,
  handleClick : PropTypes.func,
  rows : PropTypes.array,
  selected : PropTypes.string,
  winnerLine : PropTypes.array
}
