import React, { Component } from 'react'
import logo from './logo.svg'
import 'bulma/css/bulma.css'

import {
  Footer,
  Board,
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
            <div className="columns">
              <Board name="Backlog"/>
              <Board name="Todo"/>
              <Board name="Doing"/>
              <Board name="Done"/>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
