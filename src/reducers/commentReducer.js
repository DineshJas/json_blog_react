import { GET_COMMENTS,ADD_COMMENT } from '../actions/types' ;

const initialState = {
    commentList:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        
        case GET_COMMENTS:
            return{
                ...state,
                commentList:[...action.payload]
            }

        case ADD_COMMENT:
            return{
                ...state,
                commentList: [...action.payload]
            }

        default:
            return state
    }
}