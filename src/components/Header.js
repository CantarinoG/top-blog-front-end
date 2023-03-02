import "../styles/Header.css";

function Header({loggedIn, setPath}) {

    return <header>
            {loggedIn 
            ? <>
                <nav>
                    <button className="logo" onClick={() => {setPath('/posts')}}>ByteBlog</button>
                </nav>
                <nav>
                    <button>Log Out</button>
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