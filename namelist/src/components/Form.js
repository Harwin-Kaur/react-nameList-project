import React from 'react';
import { useState } from 'react';
import Display from './Display';

const Form = () => {

const [name, setName] = useState('');

const handleOnChange = (e) => {
  const {value} = e.target;
  setName(value); 
};

const handleOnSubmit = (e) =>{
  e.preventDefault();
  // setList([...list, name]);
};

  return (
    <div>
      <div className='form'> 
        <Display name = {name}/>
          <form action="" onSubmit={handleOnSubmit}>
            <input type='text' onChange={handleOnChange} />
            <button>Add User</button>
          </form>
         </div>
    </div>
  )
}

export default Form
