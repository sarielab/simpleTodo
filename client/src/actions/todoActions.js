import {
  FETCH_TODO_LOADING,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILED,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  UPDATE_TODO_LOADING,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED
} from './constants'

const axios = require('axios')

const fetchTodoSuccess = todos => ({type: FETCH_TODO_SUCCESS, payload: todos})
const fetchTodoFailed = err => ({type: FETCH_TODO_FAILED, payload: err})
const addTodoSuccess = todo => ({type: ADD_TODO_SUCCESS, payload: todo})
const addTodoFailed = err => ({type: ADD_TODO_FAILED, payload: err})
const updateTodoSuccess = todo => ({type: UPDATE_TODO_SUCCESS, payload: todo})
const updateTodoFailed = err => ({type: UPDATE_TODO_FAILED, payload: err})

const fetchTodos = () => async(dispatch) => {
  return await
    axios.get('http://localhost:3001/task/')
    .then(todos => dispatch(fetchTodoSuccess(todos)) )
    .catch(err => dispatch(fetchTodoFailed(err)))
}
const addTodo = (todo) => async (dispatch) => {
  // let url = typeof todo._id === 'undefined' ?
  // axios.post('http://localhost:3001/task/', todo) :
  // axios.put(`http://localhost:3001/task/${todo._id}`, todo)

  return await axios.post('http://localhost:3001/task/', todo)
  .then(todo => {
    if (typeof todo.data.err === 'undefined') dispatch(addTodoSuccess(todo.data))
    else dispatch(addTodoFailed(todo.data.err))
  })
  .catch(err =>  dispatch(addTodoFailed(err)) )
}

const updateTodo = (todo,stat_before) => async (dispatch) => {
  return await axios.put(`http://localhost:3001/task/${todo._id}`, todo)
  .then(todo => {
    if (typeof todo.data.err === 'undefined') dispatch(updateTodoSuccess({updatedTodo: todo.data, before: stat_before}))
    else dispatch(updateTodoFailed(todo.data.err))
  })
  .catch(err =>  dispatch(updateTodoFailed(err)) )
}

export {
  fetchTodos,
  addTodo,
  updateTodo
}