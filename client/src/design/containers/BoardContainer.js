import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, updateTodo } from '../../actions/'
import {
  Board
} from '../'


class BoardContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos()
    this.changeStatus = this.changeStatus.bind(this)
  }
  changeStatus(act, status ,_id) {
    if (typeof this.props.todosData.todos === 'undefined') return
    else {
      const todo = this.props.todosData.todos[status].findIndex(todo => _id === todo._id)
      let upTodo = {}
      if (todo === -1) return
      else {
        upTodo = {...this.props.todosData.todos[status][todo], 'status': act}
        this.props.updateTodo(upTodo, status) //status awal
      }
    }
  }
  render() {
    let { todos, isFetching, fetchError, fetchErrorMessage} = this.props.todosData
    return (
      <div>
        { this.props.length === 0 && <h4>Loading...</h4> }
        { !fetchError && typeof todos !== 'undefined' && isFetching === false &&
          <div className="columns">
            <Board
              name="Backlog"
              changeStatus = {this.changeStatus}
              cards={todos.Backlog}/>
            <Board
              name="Todo"
              changeStatus = {this.changeStatus}
              cards={todos.Todo} />
            <Board
              name="Doing"
              changeStatus = {this.changeStatus}
              cards={todos.Doing} />
            <Board
              name="Done"
              changeStatus = {this.changeStatus}
              cards={todos.Done} />
          </div>
         }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todosData: state.todosData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    updateTodo: (upTodo, stat_before) => dispatch(updateTodo(upTodo, stat_before)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BoardContainer)
