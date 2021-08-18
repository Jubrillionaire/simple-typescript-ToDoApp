import {Action} from '../actions'
import { ActionType } from '../actionTypes'
interface Itodos {
    todos: {
        title: string,
        id: number
    }[],
    loading: boolean
}


const initialState = {
    todos: [
        { title: "walk dog", id: 1 },
        { title: "sleep later", id: 2 },
    ],
    loading: false
}

type stateType = Itodos


  const todoReducer = (state: stateType = initialState, action: Action) => {

    switch(action.type){ 
        case ActionType.ADD:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case ActionType.DELETE:
            return{
                ...state,
                todos: state.todos.filter(x => x.id !== action.payload)
            }
            default:
                return state

    }
    
}


export default todoReducer


