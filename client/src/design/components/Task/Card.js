import React from 'react'

const styles={
  card: {
    'marginTop': '4%',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  'card-header': {
    'padding': '3%',
    'color': '#507946',
    'textTransform': 'capitalize',
    'fontWeight': 'bold'
  },
  'card-header-subtitle': {
    color: 'rgb(69, 108, 59)'
  },
  'card-footer': {
    'backgroundColor': 'rgb(80, 121, 70)'
  },
  'card-status-background': {
    'Backlog': "#555555",
    'Todo': "rgb(114, 146, 140)",
    'Doing': "rgb(146, 114, 120)",
    'Done': "rgb(140, 114, 146)"
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

    const { title, descr, poin, PIC, status, key } = props.data
    return (
      <div className="card" style={styles.card} key={key}>
        <header className="card-header" style={styles['card-header']}>
          <p className="has-text-centered" style={styles['card-header-subtitle']}>{title}</p><br/>
        </header>
        <div className="card-content">
          <div className="content">
            <b>Descr </b><br/>
            {descr}<br/>
            <b>Created Date </b><br/>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time><br/>
            <b>Poin </b>{poin}<br/>
            <b>PIC </b>{PIC}<br/>
          </div>
        </div>
        <footer className="card-footer" style={styles['card-footer']}>
          {
            BoardActions[status].map( (act,i) => (<a href="#"
                className="card-footer-item"
                key={i}
                style={{color:'white', backgroundColor:styles['card-status-background'][act]}}>{act}</a>))
          }
          <a href="#"
            className="card-footer-item"
            onClick={(e)=> {
              e.preventDefault()
              let cfm = window.confirm('Are you sure to delete?')
            }}
            style={{color:'white','backgroundColor': 'rgb(236, 24, 36)'}}>Delete</a>
        </footer>
      </div>
    )
  }

}

export default Card