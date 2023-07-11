import './App.css';
import Child1 from "./Component/Child/Child_1/Child_1";
import Child2 from "./Component/Child/Child_2/Child_2";

function App() {
    // let {NewName, NewUsername, NewEmail};
    let NewName;
    let NewUsername;
    let NewEmail;
    console.log(NewUsername);

    return (
    <>
      <Child1/>
      <Child2 NewName={NewName} NewUsername={NewUsername} NewEmail={NewEmail}/>
    </>
  );
}

export default App;
