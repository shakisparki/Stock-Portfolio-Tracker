import React from "react";
import img1 from "../assets/memberA.jpg";
import img2 from "../assets/memberB.jpg";
import img3 from "../assets/memberC.jpg";

const About: React.FC = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About StockTracker</h1>
                    <p>
                        Empowering everyday investors to understand, visualize, and grow their portfolios.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-mission">
                <div className="about-container">
                    <h2>Our Mission</h2>
                    <p>
                        At StockTracker, we believe that financial insights shouldn't be reserved for
                        professionals. Our mission is to make investment tracking and analytics intuitive,
                        powerful, and accessible - so anyone can make smarter financial decisions with ease.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <div className="about-container">
                    <h2>Meet the Team</h2>
                    <div className="team-grid">
                        <div className="team-card">
                            <img src={img3} alt="Team Member" />
                            <h3>Ngozi Smith</h3>
                            <p>Founder & CEO</p>
                        </div>

                        <div className="team-card">
                            <img src={img2} alt="Team Member" />
                            <h3>Alex Carter</h3>
                            <p>Lead Developer</p>
                        </div>

                        <div className="team-card">
                            <img src={img1} alt="Team Member" />
                            <h3>Morgan Patel</h3>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
