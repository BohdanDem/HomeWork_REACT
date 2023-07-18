import './App.css';
import CreateCarForm from "./Components/CreateCarForm";
import CarsComponent from "./Components/Cars/CarsComponent";
import {useState} from "react";

function App() {

  const [ addCars, setAddCars ] = useState([]);
  const [ updateCar, setUpdateCar ] = useState([]);

  return (
      <>
        <CreateCarForm setAddCars={setAddCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
        <br/>
        <CarsComponent addCars={addCars} setAddCars={setAddCars} setUpdateCar={setUpdateCar}/>
      </>
  );
}

export default App;
