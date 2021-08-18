import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import {Itodo} from '../Interfaces'
import { handleDelete } from '../redux/actionCreators'

interface Iprops {
  todo: Itodo;
}


const Todo : FC<Iprops> = ({todo}) => {

    const dispatch = useDispatch();

    //HOW TO BIND MULTIPLE ACTION CREATORS WITH ONE "DISPATCH" example: 
    //const { depositMoney, withdrawMoney, bankrupt }
    // = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
       <p>{todo.title}</p>
            <button onClick={() => dispatch(handleDelete(todo.id))}>delete</button>
        </div>
    )
}

export default Todo
