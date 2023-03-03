import { useEffect } from "react";

import "../styles/LogIn.css";

function LogIn({baseURL, setPath, setToken, setLoggedIn, loggedIn}) {

useEffect(() => { //ComponentDidMount
}, []);

    const sendForm = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        fetch(`${baseURL}/users/login`, { method: 'POST', mode: 'cors', headers: {'Content-Type':'application/x-www-form-urlencoded'}, body: `username=${username}&password=${password}` }).then(function (response){
            return response.json();
        }).then(function (response){
            const alerts = document.getElementById('alert');
             if(response.alert) {
                alerts.innerHTML = response.alert;
             } else {
                if(response.status == 200) {
                    alerts.innerHTML = "";
                    localStorage.setItem('token', response.token);
                    setLoggedIn(true); 
                    setToken(response.token);
                    setPath('/posts');
            }
                return;
             }
        }).catch(function (err) {
            document.getElementById('error').innerText = err;
        });

    }

    if (!loggedIn) {
        return <div className="login">
        <h1>Log In</h1>
        <p id="error"></p>
        <ul id="alert"></ul>
        <form onSubmit={sendForm}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required/>
            <button type="submit">Log In</button>
        </form>
    </div>
    } else {
        return <p>You are already logged in!</p>
    }
}

export default LogIn;