import React from 'react'

import {
  Card
} from '../../'

const Board = (props) => (
  <div className="column">
    {props.name}
    <Card
      status="Backlog"
      title="title"
      descr="description"
      poin="10"
      assignedTo="Bendit"
    />
    <Card
      status="Doing"
      title="title"
      descr="description"
      poin="15"
      assignedTo="Lycaa"
    />
    <Card
      status="Todo"
      title="title"
      descr="description"
      poin="5"
      assignedTo="Miko"
    />
    <Card
      status="Done"
      title="title"
      descr="description"
      poin="19"
      assignedTo="Meyer"
    />
  </div>
)

export default Board