import React from "react";
import GreekSalad from './images/greek_salad.jpg'
import Bruchetta from './images/bruchetta.svg'
import LemonDessert from './images/lemon_dessert.jpg'
import OutForDelivery from './images/motorcycle.png'

const highlights =() => {
    return (
        <div>
            <h2>Specials</h2>
            <div>
                <span>Online Menu</span>
            </div>
            <div>
                <img src={GreekSalad} alt='Greek Salad'/>
                <h5>Greek Salad</h5>
                <p>$12.99</p>
                <p>The famous greek salad of crispy lattuce, peppers, olives and our Chicago style feta cheese, gemished with crunchy garlic and rosemary croutons.</p>
                <a href="/order_a_delivery">Order a delivery</a>
                <img src={OutForDelivery} alt='Out for Delivery'/>
            </div>
            <div>
                <img src={Bruchetta} alt='Bruchetta'/>
                <h5>Bruchetta</h5>
                <p>$5.99</p>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seassoned with salt and olive oil.</p>
                <a href="/order_a_delivery">Order a delivery</a>
                <img src={OutForDelivery} alt='Out for Delivery'/>
            </div>
            <div>
                <img src={LemonDessert} alt='Lemon Dessert'/>
                <h5>Lemon Dessert</h5>
                <p>$5.00</p>
                <p>This comes straight from grandma's recipe book, every last ingregient has been sourced and is as authentic as can be imagined.</p>
                <a href="/order_a_delivery">Order a delivery</a>
                <img src={OutForDelivery} alt='Out for Delivery'/>
            </div>
        </div>
    );
}
export default highlights