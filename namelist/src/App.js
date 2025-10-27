import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import UserList from './components/UserList';
import Form from './components/Form';

function App() {

// const [name, setName] = useState('');
const [list, setList] = useState([]);

// const handleOnChange = (e) => {
//   const {value} = e.target;
//   setName(value); 
// };

// const handleOnSubmit = (e) =>{
//   e.preventDefault();
//   setList([...list, name]);
// };
// console.log(list);

  return <div className='wrapper' style={{display: 'flex',
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    padding: "2rem",
  }}>
    <div className='display'>
      {/* <div className='display'>{name}</div> */}
      
        
        <Form />
        <UserList />
        
    </div>
  </div>
}


export default App;
