import {
    FETCH_USERS,
    SELECT_USER,
    GET_TODOS,
    DELETE_TODO,
    ADD_TODOS
} from '../actions/types';

const initialState = {
    usersDetail:[],
    selectedUser:[],
    todoData:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        
        case FETCH_USERS:
            return{
                ...state,
                usersDetail:[...action.payload]
            }

        case SELECT_USER:
            return{
                ...state,
                selectedUser:[action.payload]
            }

        case GET_TODOS:
            return{
                ...state,
                todoData:[...action.payload]
            }

        case DELETE_TODO:
            return{
                ...state,
                todoData: state.todoData.filter(value => 
                    value.id !== action.payload
                )
            }

        case ADD_TODOS:
            return{
                ...state,
                todoData:[...action.payload]
            }

        default:
            return state
    }
}