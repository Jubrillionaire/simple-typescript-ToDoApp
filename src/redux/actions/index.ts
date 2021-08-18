import { ActionType } from "../actionTypes";

interface Itodo {
    title: string,
    id: number
}

interface  DeleteAction {
    type: ActionType.DELETE,
    payload: number
}


interface  AddAction {
    type: ActionType.ADD,
    payload: Itodo
}


export type Action = DeleteAction | AddAction



