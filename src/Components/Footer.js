import React from "react";
import Logo2 from './images/Little_Lemon_logo.png'

const footer =() => {
    return (
        <div>
            <img src={Logo2} alt='Little Lemon Logo'/>
            <div>
                <h6>Doormat Navigation</h6>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservations</a></li>
                    <li><a href="/order_online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div>
                <h6>Contact</h6>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone_number">Phone Number</a></li>
                    <li><a href="/email">Email</a></li>
                </ul>
            </div>
            <div>
                <h6>Social Media Links</h6>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone_number">Phone Number</a></li>
                    <li><a href="/email">Email</a></li>
                </ul>
            </div>
        </div>
    );
}
export default footer