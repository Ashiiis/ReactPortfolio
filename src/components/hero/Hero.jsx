import React from "react";
import "./hero.css";
const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Ashish Raghav <h5>web Developer</h5> </h2>
            <p>
            I'm Experienced web developer specializing in React.js and Django, adept at building robust and scalable applications. Proficient in crafting interactive user interfaces with React and implementing backend solutions with Django. Detail-oriented and collaborative, committed to delivering high-quality, performant, and visually appealing web experiences.
            </p>
        </div>
        <div className="hero-img">
            <div>
            {/* <div className="tech-icon">
            <img src="./assets/images/img01.jpg" alt="" />
        </div> */}
            <img src="./assets/images/img1.avif" alt="" />
        </div>
        <div>
            <div className="tech-icon">
                <img src="/assets/images/img01.png" alt=""/>
            </div>
            <div className="tech-icon">
                <img src="/assets/images/img02.png" alt=""/>
            </div>
            <div className="tech-icon">
                <img src="/assets/images/img03.png" alt=""/>
            </div>
        </div>
        </div>
        </section>
    );
};
export default Hero;