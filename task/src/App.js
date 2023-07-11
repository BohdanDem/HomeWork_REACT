import './App.css';
import Child1 from "./Component/Child/Child_1/Child_1";
import Child2 from "./Component/Child/Child_2/Child_2";

function App() {
    const {NewName, NewUsername, NewEmail} = null

  return (
    <>
      <Child1/>
      <Child2 NewName={NewName} NewUsername={NewUsername} NewEmail={NewEmail}/>
    </>
  );
}

export default App;
