import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";

function App() {
  return (
      <>
        <SimpsonComponent
            id = {'295'}
            name = {'Riq IV'}
            status = {'Dead'}
            species = {'Human'}
            gender = {'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/295.jpeg'}
        />
        <SimpsonComponent
            id = {'337'}
            name = {'Stu'}
            status = {'Dead'}
            species = {'Alien'}
            gender = {'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/337.jpeg'}
        />
        <SimpsonComponent
            id = {'375'}
            name = {'Vance Maximus'}
            status = {'Dead'}
            species = {'Human'}
            gender = {'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/375.jpeg'}
        />
        <SimpsonComponent
            id = {'584'}
            name = {'Bar Customer'}
            status = {'Alive'}
            species = {'Human'}
            gender = {'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/584.jpeg'}
        />
        <SimpsonComponent
            id = {'638'}
            name = {'Rick’s Disguise'}
            status = {'Alive'}
            species = {'Human'}
            gender = {'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/638.jpeg'}
        />
        <SimpsonComponent
            id = {'754'}
            name = {'Coop'}
            status = {'Alive'}
            species = {'Human'}
            gender = {'Male'}
            image = {'https://rickandmortyapi.com/api/character/avatar/754.jpeg'}
        />
      </>
  );
}

export default App;
