import "../styles/Header.css";

function Header({loggedIn, setPath, setLoggedIn, setToken}) {

    function logOut() {
        setLoggedIn(false); 
        setToken(""); 
        localStorage.setItem('token', "");
    }

    return <header>
            {loggedIn 
            ? <>
                <nav>
                    <button className="logo" onClick={() => {setPath('/posts')}}>ByteBlog</button>
                </nav>
                <nav>
                    <button onClick={logOut}>Log Out</button>
                </nav>
            </>
            : <>
                <nav>
                    <button className="logo" onClick={() => {setPath('/posts')}} >ByteBlog</button>
                </nav>
                <nav>
                    <button onClick={() => {setPath('/signup')}}>Sign Up</button>
                    <button onClick={() => {setPath('/login')}}>Log In</button>
                </nav>
            </>}
        </header>

}

export default Header;