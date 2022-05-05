import { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  return (
    <div>
      <h1 className='text-center my-5'>Input Todo</h1>
      <form
        className='d-flex'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        <input type='text' placeholder='add todo' className='form-control' />
        <button className='btn btn-success'>+</button>
      </form>
    </div>
  );
};

export default InputTodo;
