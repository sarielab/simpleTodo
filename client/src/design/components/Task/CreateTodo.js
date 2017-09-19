import React, { Component } from 'react'

import {
  FormItem
} from '../../'

class CreateTodo extends Component {
  render() {
    return (
      <div className="modal" id="modalTodo">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title is-uppercase">Add New Todo</p>
            <button className="delete" aria-label="close"
              onClick = {() => {
                let modal = document.getElementById('modalTodo')
                modal.classList.remove('is-active')
              }}></button>
          </header>
          <section className="modal-card-body">
            <FormItem name="Title" type="text"/>
            <FormItem name="Descr" type="text"/>
            <FormItem name="Poin" type="number"/>
            <FormItem name="PIC" type="text"/>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick= {()=>{

            }}>Save</button>
            <button className="button"
              onClick = {() => {
                let modal = document.getElementById('modalTodo')
                modal.classList.remove('is-active')
              }}>Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default CreateTodo