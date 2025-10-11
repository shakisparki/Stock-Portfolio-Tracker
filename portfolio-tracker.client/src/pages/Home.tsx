import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import "../index.css";

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Features />
        </main>
    );
};

export default Home;
