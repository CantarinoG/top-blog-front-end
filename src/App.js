import { useState, useEffect } from "react";

import "./styles/main.css";

import Header from "./components/Header";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] =  useState(undefined);

  useEffect(() => { //ComponentDidMount
    //Load token from local storage and update loggeidIn if it exists
  }, []);

  return <div className="App">
    <Header loggedIn={loggedIn}/>
  </div>

}

export default App;
