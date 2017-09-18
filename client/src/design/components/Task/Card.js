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
  if (typeof props.data !== 'undefined') {

    const { title, descr, poin, PIC, status } = props.data
    return (
      <div className="card" style={styles.card}>
        <header className="card-header">
          <h4 className="subtitle is-4 is-center">{title}</h4><br/>
        </header>
        <div className="card-content">
          <div className="content">
            <b>Descr </b>{descr}
            <br/>
            <b>Created Date </b><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            <br/>
            <b>Poin </b>{poin}<br/>
            <b>PIC </b>{PIC}<br/>
          </div>
        </div>
        <footer className="card-footer">
          {
            BoardActions[status].map(act => (<a href="#" className="card-footer-item">{act}</a>))
          }
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }

}

export default Card