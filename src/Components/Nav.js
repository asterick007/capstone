import React from "react";
import Logo from "./images/Logo.svg"

const nav =() => {
    return (
        <div>
            <img src={Logo} alt='logo of little lemon'/>
            <u>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reservations</a></li>
                <li><a href="/order_online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </u>
        </div>
    );
}
export default nav