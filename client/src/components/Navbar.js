import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from "../hooks/useLogout"
const { Link } = require("react-router-dom")

const Navbar = ()=>{
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const handleClick=()=>{
        logout()
    }
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user &&(
                        <div>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user &&(
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
                
            </div>
        </header>
    )
}

export default Navbar;