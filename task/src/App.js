import './App.css';
import CreateUserForm from "./Pages/CreateUserForm";
import UsersComponent from "./Users/UsersComponent";
import {useState} from "react";

function App() {

    const [ users, setUsers ] = useState([]);

  return (
      <>
        <CreateUserForm setUsers={setUsers}/>
        <UsersComponent users={users} setUsers={setUsers}/>
      </>
  );
}

export default App;