import React, { useState, ChangeEvent, FormEventHandler } from 'react'
import { useDispatch } from 'react-redux';
import { handleAdd } from '../redux/actionCreators';

// interface FProps {
// }


const AddTodo = ({ }) => {

  const [title, setTitle] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handlesubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleAdd(
      { title, id: Math.random() }
    ))
    setTitle("")
  }



  return (
    <div>
      <h2>add todo</h2>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={handleChange} name="title" value={title} />
        <input type="submit" value="add todo" />
      </form>
    </div>
  )
}

export default AddTodo
