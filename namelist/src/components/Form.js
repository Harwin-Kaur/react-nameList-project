import React from 'react';
import Display from './Display';

const Form = () => {
  return (
    <div>
      <div className='form'> 
        <Display />
          <form action="" onSubmit={""}>
          <input type='text' onChange={""} />
          <button>Add User</button>
          </form>
         </div>
    </div>
  )
}

export default Form
