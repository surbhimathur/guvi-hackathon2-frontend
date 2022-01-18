import { Link } from "react-router-dom";

export function Navigation()
{
    return(
        <nav>
        <div className="logo">
            <img src="https://www.logolynx.com/images/logolynx/9a/9ac18e68c03ad7a5692da1b8c14dff58.jpeg" alt="logo"></img>
        </div>
        <div className="navigation_bar">
            <ul className="navigation_nks">
                 <Link className="link" to="/">Home</Link>
                 <Link className="link" to="/about"> About us</Link>
                 <Link className="link" to="/products">Products</Link>
                 <Link className="link" to="/contact"> Contact Us</Link>
            </ul>
            </div>
            <div className="registration">
                <button className="login">Login</button>
                <button className="sign_up">Sign Up</button>
                <button className="admin">Admin Panel</button>
            </div>
        
        </nav>
        
    )
}