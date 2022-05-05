import { useState } from 'react';

const InputTodo = () => {
  return (
    <div>
      <h1 className='text-center my-5'>InputTodo</h1>
      <form className='d-flex'>
        <input type='text' placeholder='add todo' className='form-control' />
        <button className='btn btn-success'>+</button>
      </form>
    </div>
  );
};

export default InputTodo;
