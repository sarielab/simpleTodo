import React, { Component } from 'react'

import {
  Footer,
  BoardContainer,
  CreateTodo
} from './design'

const styles = {
  'btn-add-new': {
    marginBottom: '2%',
    backgroundColor: "#507946",
    color: "rgb(247, 247, 247)"
  },
  'head': {
    backgroundColor: "rgb(120, 147, 115)",
    color: "#507946",
    padding: "2%",
    position: 'sticky',
    top: '0',
    zIndex:'10',
    width: '100%'
  },
  'section': {
    backgroundColor: 'rgb(242, 242, 242)'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="head" style={styles.head}>
          <h1 className="title is-uppercase">Simple Todo</h1>
          <h2 className="subtitle">Learning to make basic todolist with react-redux</h2>
        </header>
        <section className="section" style={styles.section}>
          <button className="button" style={styles['btn-add-new']}
            onClick = {() => {
              let modal = document.getElementById('modalTodo')
              modal.classList.add('is-active')
            }}
          >Add New</button>
          <CreateTodo/>
          <div className="container">
            <BoardContainer />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default App