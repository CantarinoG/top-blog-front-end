import { useState, useEffect } from "react";

import "./styles/main.css";

import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] =  useState(undefined);
  const [path, setPath] = useState('/posts');
  const [baseURL, setBaseURL] = useState('http://localhost:2000');

  useEffect(() => { //ComponentDidMount
    //Load token from local storage and update loggeidIn if it exists
  }, []);

  return <div className="App">
    <Header loggedIn={loggedIn}/>
    {path === '/posts' ? <Posts baseURL={baseURL} /> : null}
  </div>

}

export default App;
