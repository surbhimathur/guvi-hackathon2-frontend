import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Navigation()
{
    return(
        <nav>
        <div className="logo">
            <img src="https://www.logolynx.com/images/logolynx/9a/9ac18e68c03ad7a5692da1b8c14dff58.jpeg" alt="logo"></img>
        </div>
        <div className="navigation_bar">
            <ul className="navigation_links">
                 <Link className="link" to="/">HOME</Link>
                 <Link className="link" to="/about"> ABOUT US</Link>
                 <Link className="link" to="/products">PRODUCTS</Link>
                 <Link className="link" to="/contact">CONTACT US</Link>
            </ul>
            </div>
            <div className="registration">
            <Button variant="contained" color="secondary">Login</Button>
            <Button variant="contained" color="secondary">Sign Up</Button>
            <Button variant="contained" color="secondary">Admin</Button>
            </div>
        
        </nav>
        
    )
}