import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to="/"><h1>MENULAB</h1></Link>
            </div>

            <nav className={classes.nav}>
                <ul>
                    <li className={classes.menu_container}>
                        <Link to="/">Menu</Link>
                    </li>
                    <li className={classes.menu_container}>
                        <Link to="/catalogo">Catalogo</Link>
                    </li>
                    <li className={classes.menu_container}>
                        <Link to="/reservaciones">Reservas</Link>  
                    </li>
                </ul>
            </nav>
        </header>
    )
}