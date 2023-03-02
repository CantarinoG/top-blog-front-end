import "../styles/Header.css";

function Header({loggedIn}) {

    return <header>
            {loggedIn 
            ? <>
                <nav>
                    <button className="logo">ByteBlog</button>
                </nav>
                <nav>
                    <button>Log Out</button>
                </nav>
            </>
            : <>
                <nav>
                    <button className="logo">ByteBlog</button>
                </nav>
                <nav>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </nav>
            </>}
        </header>

}

export default Header;