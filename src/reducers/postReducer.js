import {
    FETCH_POSTS,
    SELECTED_POST,
    GET_ALBUMS,
    GET_PHOTOS,
    DELETE_POST,
    ADD_POST,
    ADD_PHOTO
} from '../actions/types';

const initialState = {
    posts:[],
    selectedPost:[],
    albumList:[],
    photoList:[]
}

export default (state = initialState, action) => {
    switch(action.type){

        case FETCH_POSTS:
            return{
                ...state,
                posts:[...action.payload]
            }

        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter(value => 
                    value.id !== action.payload
                    )
            }

        case ADD_POST:
            return{
                ...state,
                posts: [...action.payload]
            }

        case SELECTED_POST:
            return{
                ...state,
                selectedPost:[...action.payload]
            }

        case GET_ALBUMS:
            return{
                ...state,
                albumList:[...action.payload]
            }

        case GET_PHOTOS:
            return{
                ...state,
                photoList:[...action.payload]
            }

        case ADD_PHOTO:
            // console.log(action.payload)
            return{
                ...state,
                photoList:[...action.payload]
            }

        default:
            return state
    }
}