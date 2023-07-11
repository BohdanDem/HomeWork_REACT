import './App.css';
import Child1 from "./Component/Child/Child_1/Child_1";
import Child2 from "./Component/Child/Child_2/Child_2";
import {createContext, useState} from "react";

export const HappyUser = createContext(null)
function App() {
    const [NewName, setNewName] = useState(null)
    const [NewUsername, setNewUsername] = useState(null)
    const [NewEmail, setNewEmail] = useState(null)

    return (
    <>
      <HappyUser.Provider value={{NewName, NewUsername, NewEmail}}>
        <Child1/>
      </HappyUser.Provider>
      <Child2 setNewName={setNewName} setNewUsername={setNewUsername} setNewEmail={setNewEmail}/>
    </>
  );
}

export default App;
