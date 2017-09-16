import React from 'react'

const styles={
  card: {
    'margin': '8%'
  }
}
const BoardActions = {
  'Backlog': ['Todo'],
  'Todo' : ['Backlog', 'Doing'],
  'Doing': ['Todo', 'Done'],
  'Done': ['Doing']
}

const Card = (props) => {
  if (typeof props.status !== 'undefined')
  return (
    <div className="card" style={styles.card}>
      <header className="card-header">
        <h3 className="title is-3">{props.title}</h3><br/>
      </header>
      <div className="card-content">
        <div className="content">
          <b>Descr </b>{props.descr}
          <br/>
          <b>Created Date </b><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          <br/>
          <b>Poin </b>{props.poin}<br/>
          <b>PIC </b>{props.assignedTo}<br/>
        </div>
      </div>
      <footer className="card-footer">
        {
          BoardActions[props.status].map(act => (<a href="#" className="card-footer-item">{act}</a>))
        }
        <a href="#" className="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

export default Card