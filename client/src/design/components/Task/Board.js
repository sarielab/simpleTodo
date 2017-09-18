import React from 'react'

import {
  Card
} from '../../'

const Board = (props) => {
  console.log(Card)
  console.log(props.cards[0])
  return (
  <div className="column">
    {props.name}
    {typeof props.cards !=='undefined' &&
      props.cards.map((card,i) => (
        <Card
          data={card}
          key={i} />)
      )
    }
  </div>
)}

export default Board