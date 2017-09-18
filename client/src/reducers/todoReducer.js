import {
  FETCH_TODO_SUCCESS,
  SAVE_TODO_SUCCESS,
  FETCH_TODO_FAILED,
  SAVE_TODO_FAILED,
  FETCH_TODO_LOADING,
  SAVE_TODO_LOADING,
} from '../actions/constants'

const initialState = {
  todos: {
    Backlog: [],
    Todo: [],
    Doing: [],
    Done: []
  },
  isFetching: false,
  fetchError: false,
  fetchErrorMessage: '',
  isUpdating: false,
  isUpdated: false,
  updateError: false,
  updateErrorMessage: ''
}

const fetchTodoLoading = (state) => ({...state, isFetching: true})
const saveTodoLoading = (state) => ({...state, isUpdating: true})
const fetchTodo = (state, payload) => {
  let todos = {
    Backlog: [],
    Todo: [],
    Doing: [],
    Done: []
  }
  payload.data.forEach(todo => {
    todos[todo.status].push(todo)
  })
  return {
    ...state,
    todos: todos,
    isFetching: false
  }

}
const saveTodo = (state, payload) => {
  const newTodos = [...state.todos, payload]
  return {...state, todos: newTodos, isUpdating:false,isUpdated:true}
}
const saveTodoFailed = (state, payload) => ({
  ...state,
  isUUpdating:false,
  updateError: true,
  updateErrorMessage: payload.toString()
})
const fetchTodoFailed = (state, payload) => ({
  ...state,
  isFetching: false,
  fetchError: true,
  fetchErrorMessage: payload.toString()
})

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS: return fetchTodo(state, action.payload)
    case SAVE_TODO_SUCCESS: return saveTodo(state, action.payload)
    case FETCH_TODO_FAILED: return fetchTodoFailed(state, action.payload)
    case SAVE_TODO_FAILED: return saveTodoFailed(state, action.payload)
    case FETCH_TODO_LOADING: return fetchTodoLoading(state)
    case SAVE_TODO_LOADING: return saveTodoLoading(state)
    default: return state
  }
}

export default todoReducer