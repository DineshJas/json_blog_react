import jsonplaceholder from '../api'

import {
  FETCH_USERS,
  SELECT_USER,
  GET_TODOS,
  DELETE_TODO,
  ADD_TODOS
} from './types';

export const getUsers = () => dispatch => {
  jsonplaceholder.get(`/users`)
    .then(users => {
      dispatch({
        type:FETCH_USERS,
        payload:users.data
      })
    })
}

export const selectUser = (userId) => dispatch =>{
  jsonplaceholder.get(`/users/${userId}`)
    .then(users => {
      dispatch({
        type:SELECT_USER,
        payload:users.data
      })
    })
}

export const getTodo = (userId) => dispatch => {
  jsonplaceholder.get(`/todos?userId=${userId}`)
    .then(todos => {
      dispatch({
        type:GET_TODOS,
        payload:todos.data
      })
    })
}

export const addTodo = (todo,callback) => (dispatch,getState) => {
  jsonplaceholder.post(`/todos`,todo)
  .then(response => {
    // console.log(response)
    let tempArr = getState().userReducer.todoData
    tempArr.unshift(response.data)
    console.log(tempArr)
    dispatch({
      type:ADD_TODOS,
      payload:tempArr
    })
    callback(response.status)
  })
}

export const deleteTodo = (todoId) => dispatch => {
  dispatch({
    type:DELETE_TODO,
    payload: todoId
  })
}