import './App.css';
import CreateCarForm from "./Components/CreateCarForm";
import CarsComponent from "./Components/Cars/CarsComponent";
import {createContext, useState} from "react";

export const Context = createContext(null);
function App() {

  const [ addCars, setAddCars ] = useState(null);
  const [ updateCar, setUpdateCar ] = useState(null);

  return (
      <Context.Provider value={{
          addCars,
          setAddCars: () => setAddCars(prev=>!prev),
          updateCar,
          setUpdateCar
      }}>
      <>
        <CreateCarForm/>
        <br/>
        <CarsComponent/>
      </>
      </Context.Provider>
  );
}

export default App;