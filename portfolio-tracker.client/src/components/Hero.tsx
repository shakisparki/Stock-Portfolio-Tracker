import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Track Your Stock Portfolio Like a Pro</h1>
                <p>
                    Monitor your investments, visualize performance, and stay on top of the
                    market all in one place.
                </p>
                <a href="/dashboard" className="btn-primary">Get Started</a>
            </div>
        </section>
    );
};

export default Hero;
