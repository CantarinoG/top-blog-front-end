import { useState, useEffect } from "react";

import "./styles/main.css";

import Header from "./components/Header";
import Posts from "./components/Posts";
import SpecificPost from "./components/SpecificPost";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] =  useState(undefined);
  const [path, setPath] = useState('/posts');
  const [baseURL, setBaseURL] = useState('https://top-blog-api.cantarinog.repl.co');
  const [currentPost, setCurrentPost] = useState('');

  useEffect(() => { //ComponentDidMount
    if(localStorage.getItem('token') != null){
      setLoggedIn(true);
      setToken(localStorage.getItem('token'));
    }
  }, []);

  return <div className="App">
    <Header loggedIn={loggedIn} setPath={setPath} setLoggedIn={setLoggedIn} setToken={setToken}/>
    {path === '/posts' ? <Posts baseURL={baseURL} setCurrentPost={setCurrentPost} setPath={setPath}/> : null}
    {path === '/posts/id' ? <SpecificPost baseURL={baseURL} currentPost={currentPost} loggedIn={loggedIn} token={token}/> : null}
    {path === '/login' ? <LogIn baseURL={baseURL} setPath={setPath} setToken={setToken} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/> : null}
    {path === '/signup' ? <SignUp baseURL={baseURL} setPath={setPath} loggedIn={loggedIn}/> : null}
  </div>

}

export default App;
