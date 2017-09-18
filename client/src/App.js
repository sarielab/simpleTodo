import React, { Component } from 'react'
import 'bulma/css/bulma.css'

import {
  Footer,
  BoardContainer,
  CreateTodo
} from './design'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="head"></header>
        <section className="section">
          <CreateTodo/>
          <div className="container">
            <h1 className="title">Simple Todo</h1>
            <h2 className="subtitle">Learning to make basic todolist with react-redux</h2>
            <button className="button is-primary"
              onClick = {() => {
                let modal = document.getElementById('modalTodo')
                modal.classList.add('is-active')
              }}
            >Add New</button>
            <BoardContainer />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default App