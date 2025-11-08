import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from "../components/Hero";
import Features from "../components/Features";
import "../index.css";

const Home: React.FC = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return (
        <main>
            <Hero />
            <Features />
        </main>
    );
};

export default Home;
