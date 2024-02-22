import React from "react"
import {NavLink,Link} from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/unimate_logo.png"

export const Navbar = () => {
    return (
    <nav>
        <Link to="/" className="title"><img src={logo} alt="Unimate Logo" style={{height: '80px'}} /></Link>
        <ul>
            <li>
                <NavLink to="/mentors"><button className="book-button">Book Mentors</button></NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar