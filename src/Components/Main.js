import React from "react";
import About from './About.js'
import Testimonials from './Testimonials.js'
import Highlights from './Highlights.js'
import HeroSectons from './Hero_sections.js'

const main = () => {
    return (
        <div>
            <HeroSectons/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </div>
    );
}
export default main