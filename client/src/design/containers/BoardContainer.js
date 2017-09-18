import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../../actions/'
import {
  Board
} from '../'

class BoardContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos()
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
              cards={todos.Backlog}/>
            <Board
              name="Todo"
              cards={todos.Todo} />
            <Board
              name="Doing"
              cards={todos.Doing} />
            <Board
              name="Done"
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BoardContainer)
