import {Dispatch} from 'redux'
import { Itodo } from '../../Interfaces'
import { Action } from '../actions'
import { ActionType } from '../actionTypes'


export const handleDelete = (id: number) => (dispatch: Dispatch<Action>) => {

    dispatch({
        type: ActionType.DELETE,
        payload: id
    })

}



export const handleAdd = (todo: Itodo) => (dispatch: Dispatch<Action>) => {
    
    dispatch({
        type: ActionType.ADD,
        payload: todo
    })

}