import {
  FETCH_TODO_SUCCESS,
  SAVE_TODO_SUCCESS,
  FETCH_TODO_FAILED,
  SAVE_TODO_FAILED,
  FETCH_TODO_LOADING,
  SAVE_TODO_LOADING,
} from './constants'

const axios = require('axios')

const fetchTodoSuccess = todos => ({type: FETCH_TODO_SUCCESS, payload: todos})
const fetchTodoFailed = err => ({type: FETCH_TODO_FAILED, payload: err})
const saveTodoSuccess = todo => ({type: SAVE_TODO_SUCCESS, payload: todo})
const saveTodoFailed = err => ({type: SAVE_TODO_FAILED, payload: err})

const fetchTodos = () => async(dispatch) => {
  return await
    axios.get('http://localhost:3001/task/')
    .then(todos => dispatch(fetchTodoSuccess(todos)) )
    .catch(err => dispatch(fetchTodoFailed(err)))
}
const saveTodo = (todo) => {
  return async (dispatch) => {
    await (
      typeof todo._id === 'undefined' ?
      axios.post('http://localhost:3001/task/', todo) :
      axios.put(`http://localhost:3001/task/:${todo._id}`, todo)
    )
    .then(todo => {
      if (typeof todo.err === 'undefined') dispatch(saveTodoSuccess(todo))
      else dispatch(saveTodoFailed(todo.err))
    })
    .catch(err =>  dispatch(saveTodoFailed(err)) )
  }
}

export {
  fetchTodos,
  saveTodo
}