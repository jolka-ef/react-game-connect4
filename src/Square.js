import React from 'react';
import styles from './Square.module.css'
import {Circle} from "./Circle";
import {playersColors} from "./playersColors";
import PropTypes from "prop-types";


export const Square = (props) => {
  const {
    colNr,
    handleChange,
    handleClick,
    player,
    winner
  } = props;
  const fill = playersColors.hasOwnProperty(player) ? playersColors[player] : "currentColor";
  let className = styles.Button;
  if (winner) {
    className += ` ${styles.Winner}`;
  }

  return(
    <button
      onMouseEnter={handleChange}
      onFocus={handleChange}
      onClick={handleClick}
      className={className}
      data-col={colNr}
    >
      <Circle x={50} y={50} radius={40} fill={fill} className={styles.Circle}/>
    </button>
  )
}

Square.propTypes = {
  colNr: PropTypes.number,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  y: PropTypes.number,
  player: PropTypes.string,
  winner: PropTypes.bool,
};
