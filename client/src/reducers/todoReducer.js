import {
  FETCH_TODO_SUCCESS,
  FETCH_TODO_LOADING,
  FETCH_TODO_FAILED,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  ADD_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  UPDATE_TODO_LOADING,
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
  updateErrorMessage: '',
  isAdding: false,
  isAdded: false,
  addingError: false,
  addingErrorMessage: '',
  isDeleting: false,
  isDeleted: false,
  deleteError: false,
  deleteErrorMessage: '',
}

const fetchTodoLoading = (state) => ({...state, isFetching: true})
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
const fetchTodoFailed = (state, payload) => ({
  ...state,
  isFetching: false,
  fetchError: true,
  fetchErrorMessage: payload.toString()
})

const addTodoLoading = (state) => ({...state, isAdding: true})
const addTodo = (state, payload) => {
  const newTodos = {
    Backlog: [...state.todos.Backlog, payload],
    Todo: state.todos.Todo,
    Doing: state.todos.Doing,
    Done: state.todos.Done
  }
  return {...state, todos: newTodos, isAdding:false,isAdded:true}
}
const addTodoFailed = (state, payload) => ({
  ...state,
  isAdding:false,
  addError: true,
  addErrorMessage: payload.toString()
})


const updateTodoLoading = (state) => ({...state, isUpdating: true})
const updateTodo = (state, payload) => {
  let stat_before = payload.before
  let stat_after = payload.updatedTodo.status
  console.log(stat_before)
  console.log(payload.updatedTodo._id)
  console.log('-----------------todo')
  console.log(state.todos[stat_before])
  let idx_before = state.todos[stat_before].findIndex(todo => (todo._id == payload.updatedTodo._id) )
  console.log(idx_before)
  const newTodos = {
    ...state.todos,
    [stat_before]: [...state.todos[stat_before].splice(idx_before,1)],
    [stat_after]: [...state.todos[stat_after], payload.updatedTodo]
  }
  console.log(newTodos)
  return {...state, todos: newTodos, isUpdating:false,isUpdated:true}
}
const updateTodoFailed = (state, payload) => ({
  ...state,
  isUpdating:false,
  updateError: true,
  updateErrorMessage: payload.toString()
})
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS: return fetchTodo(state, action.payload)
    case FETCH_TODO_FAILED: return fetchTodoFailed(state, action.payload)
    case FETCH_TODO_LOADING: return fetchTodoLoading(state)
    case ADD_TODO_SUCCESS: return addTodo(state, action.payload)
    case ADD_TODO_LOADING: return addTodoLoading(state)
    case ADD_TODO_FAILED: return addTodoFailed(state, action.payload)
    case UPDATE_TODO_SUCCESS: return updateTodo(state, action.payload)
    case UPDATE_TODO_LOADING: return updateTodoLoading(state)
    case UPDATE_TODO_FAILED: return updateTodoFailed(state, action.payload)
    default: return state
  }
}

export default todoReducer