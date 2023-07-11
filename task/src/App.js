import './App.css';
import { useEffect, useState } from 'react';
import Users from "./Component/Users";

function App() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
          setUsers(users);
        })
  },[]);

  return (
    <>
      <Users users = {users}/>
    </>
  );
}

export default App;
