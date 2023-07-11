import './App.css';
import UsersComponent from "./Component/UsersComponent";
import {useState} from "react";
import UserPosts from "./Component/UserPosts";
import styles from './AppStyle.module.css'

function App() {
    const [userId, setUserId] = useState(null)

  return (
      <div className={styles.app}>
          <div>
              <UsersComponent setUserId = {setUserId}/>
          </div>
          <div>
              {userId && <UserPosts userId = {userId}/>}
          </div>
      </div>
  );
}

export default App;
