import './App.css';
import CreateUserForm from "./Pages/CreateUserForm";
import UsersComponent from "./Users/UsersComponent";
import {useState} from "react";

function App() {

    const [ addUser, setAddUser ] = useState([]);

  return (
      <>
        <CreateUserForm setAddUser={setAddUser}/>
        <UsersComponent addUser={addUser}/>
      </>
  );
}

export default App;