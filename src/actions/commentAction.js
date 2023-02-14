import jsonplaceholder from '../api';
import { 
    GET_COMMENTS, 
    ADD_COMMENT,
} from './types';

export const getComments = (postId) => dispatch => {
    jsonplaceholder.get(`/comments?postId=${postId}`)
    .then(response => {
        // console.log(response.data)
        dispatch({
            type:GET_COMMENTS,
            payload:response.data
        })
      })
}

export const addComments = (comment,callback) => (dispatch,getState) => {
    jsonplaceholder.post(`/comments/`,comment)
    .then(response => {
        let tempArr = getState().commentReducer.commentList
        tempArr.unshift(response.data)
        console.log(tempArr)
        dispatch({
            type:ADD_COMMENT,
            payload:tempArr
        })
        callback(response.status)
    })
}