import React from 'react'
import {Card} from '../../'

const styles = {
  'board-lane': {
    margin: "1%",
    backgroundColor: 'rgb(120, 147, 115)',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  'board-header': {
    padding: "5%",
    color: "white",
    border: '2px solid black',
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  'board-header-background': {
    'Backlog': "#555555",
    'Todo': "rgb(114, 146, 140)",
    'Doing': "rgb(146, 114, 120)",
    'Done': "rgb(140, 114, 146)"
  }
}

const Board = (props) => {
  let boardStyles = {
    ...styles['board-header'],
    "backgroundColor": styles['board-header-background'][props.name]
  }
  return (
    <div className="column is-centered" style={styles['board-lane']}>
      <p style={ boardStyles }>{props.name}</p>
      { typeof props.cards !== 'undefined' && props.cards.map((card, i) => (<Card data={card} key={i}/>)) }
    </div>
  )
}

export default Board