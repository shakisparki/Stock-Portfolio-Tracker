import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./index.css";

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    );
};

export default App;
