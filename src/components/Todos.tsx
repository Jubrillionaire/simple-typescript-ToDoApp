import React, { FC } from 'react'
import Todo from './Todo'
import {Itodo} from '../Interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'




const Todos = () => {


    const todos  = useSelector((state: RootState) => state.todo.todos)

    

    return (
        <div>
            {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}

export default Todos;
