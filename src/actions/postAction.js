import jsonplaceholder from '../api'

import {
    FETCH_POSTS,
    SELECTED_POST,
    GET_ALBUMS,
    GET_PHOTOS,
    DELETE_POST,
    ADD_POST,
    ADD_PHOTO
} from './types'

export const getPosts = () => dispatch => {
    jsonplaceholder.get(`/posts`)
    .then(response => {
        dispatch({
            type:FETCH_POSTS,
            payload:response.data
        })
      })
}

export const deletePost = (postId) => dispatch => {
    dispatch({
        type:DELETE_POST,
        payload:postId
    })
}

export const addPostDetail = (post,callback) => (dispatch,getState) => {
    jsonplaceholder.post(`/posts/`,post)
    .then(response => {
        let tempArr = getState().postReducer.posts
        tempArr.unshift(response.data)
        console.log(tempArr)
        dispatch({
            type: ADD_POST,
            payload:tempArr
        })
        callback(response.status)
    })
}

export const userPost = (userId) => dispatch => {
    jsonplaceholder.get(`/posts?userId=${userId}`)
    .then(response => {
        dispatch({
            type:SELECTED_POST,
            payload:response.data
        })
      })
}

export const getAlbum = (userId) => dispatch => {
    jsonplaceholder.get(`/albums?userId=${userId}`)
    .then(response => {
        dispatch({
            type:GET_ALBUMS,
            payload:response.data
        })
      })
}

export const getPhotos = (albumId) => dispatch => {
    jsonplaceholder.get(`/photos?albumId=${albumId}`)
    .then(response => {
        dispatch({
            type:GET_PHOTOS,
            payload:response.data
        })
      })
}

export const addPhoto = (photo,callback) => (dispatch,getState) => {
    jsonplaceholder.post(`/photos/`,photo)
    .then(response => {
        let tempArr = getState().postReducer.photoList
        tempArr.unshift(response.data)
        console.log(tempArr)
        dispatch({
            type:ADD_PHOTO,
            payload:tempArr
        })
        callback(response.status)
    })
}