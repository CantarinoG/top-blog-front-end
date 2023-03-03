import { useState, useEffect } from "react";

import "./styles/main.css";

import Header from "./components/Header";
import Posts from "./components/Posts";
import SpecificPost from "./components/SpecificPost";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] =  useState(undefined);
  const [path, setPath] = useState('/posts');
  const [baseURL, setBaseURL] = useState('http://localhost:2000');
  const [currentPost, setCurrentPost] = useState('');

  useEffect(() => { //ComponentDidMount
    //Load token from local storage and update loggeidIn if it exists
  }, []);

  return <div className="App">
    <Header loggedIn={loggedIn} setPath={setPath}/>
    {path === '/posts' ? <Posts baseURL={baseURL} setCurrentPost={setCurrentPost} setPath={setPath}/> : null}
    {path === '/posts/id' ? <SpecificPost baseURL={baseURL} currentPost={currentPost} loggedIn={loggedIn}/> : null}
    {path === '/login' ? <h1>login</h1> : null}
    {path === '/signup' ? <h1>signup</h1> : null}
  </div>

}

export default App;
