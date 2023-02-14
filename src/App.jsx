import { useState } from "react";
import PostsList from "./componets/PostsList";
import MainHeader from "./componets/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(){
    setModalIsVisible(true);
  }

  function hideModalHandler(){
    setModalIsVisible(false);
  }


  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
