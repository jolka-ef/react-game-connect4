import React from 'react';
import PropTypes from "prop-types";
import styles from './Status.module.css'
import {playersColors} from "./playersColors";
import {Circle} from './Circle'


export const Status = (props) => {
  const {
    firstPlayer,
    isWinner,
    maxStepNumber,
    stepNumber
  } = props;

  let fill;
  let status;

  if (isWinner) {
    status = "Winner";
    fill = playersColors[isWinner.symbol]
  } else if (stepNumber === maxStepNumber) {
    status = "It's a draw !!!"
  } else {
    status = "Up next";
    fill = firstPlayer ? playersColors["A"] :  playersColors["B"];
  }

  return (
    <div className={styles.Container}>
      <span className={styles.Text}>{status}</span>
        <Circle className={styles.Tile} x={50} y={50} radius={40} fill={fill}/>
    </div>
  )
}

Status.propTypes = {
  firstPlayer : PropTypes.bool,
  isWinner : PropTypes.bool,
  maxStepNumber : PropTypes.number,
  stepNumber : PropTypes.number
}
