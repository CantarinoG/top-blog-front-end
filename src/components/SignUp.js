import "../styles/SignUp.css";

function SignUp({baseURL, setPath, loggedIn}) {

    const sendForm = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirm').value;
        fetch(`${baseURL}/users/create`, { method: 'POST', mode: 'cors', headers: {'Content-Type':'application/x-www-form-urlencoded'}, body: `username=${username}&password=${password}&confirm=${confirm}` }).then(function (response){
            return response.json();
        }).then(function (response){
            console.log(response);
            const alerts = document.getElementById('alert');
             if(response.alerts) {
                let html = ""
                for(let i = 0; i < response.alerts.length; i++) {
                    html += `<li>${response.alerts[i]}</li>`;
                }
                alerts.innerHTML = html;
             } else {
                alerts.innerHTML = "";
                setPath('/login');
             }
        }).catch(function (err) {
            document.getElementById('error').innerText = err;
        });

    }

    if(!loggedIn) {
        return <div className="signup">
        <h1>Create your account</h1>
        <p id="error"></p>
        <ul id="alert"></ul>
        <form onSubmit={sendForm}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required/>
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="confirm" required/>
            <button type="submit">Create Account</button>
        </form>
    </div>
    } else {
        return <p>You are already logged in!</p>
    }

    return 
}

export default SignUp;