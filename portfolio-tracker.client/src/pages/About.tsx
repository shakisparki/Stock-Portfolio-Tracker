import React from "react";
import "../index.css";

const About: React.FC = () => {
    return (
        <main>
            <h1>About the Stock Tracker App</h1>
            <p>
                This application helps you track your stock investments in real-time.
                You can view your portfolio, analyze stock performance, and make informed
                decisions based on market trends.
            </p>
            <p>
                Features include:
            </p>
            <ul>
                <li>Real-time stock price updates</li>
                <li>Portfolio management</li>
                <li>Market analysis tools</li>
                <li>User-friendly interface</li>
            </ul>
            <p>
                Our goal is to empower investors with the tools they need to succeed in the stock market.
            </p>
        </main>
    );
};

export default About;
