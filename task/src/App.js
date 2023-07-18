import './App.css';
import CreateCommentForm from "./Pages/CreateCommentForm";
import {useState} from "react";
import CommentsComponent from "./Comments/CommentsComponent";

function App() {

    const [comments, setComments] = useState([])

  return (
      <>
        <CreateCommentForm setComments={setComments}/>
        <CommentsComponent comments={comments} setComments={setComments}/>
      </>
  );
}

export default App;
