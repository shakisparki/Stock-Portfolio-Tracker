import React from "react";

const features = [
    {
        icon: "📈",
        title: "Real-Time Stock Data",
        description: "Stay updated with live prices and track your portfolio's daily performance."
    },
    {
        icon: "🔒",
        title: "Secure & Private",
        description: "Your data is protected with enterprise-grade encryption and JWT authentication."
    },
    {
        icon: "📊",
        title: "Visual Analytics",
        description: "Get beautiful, insightful charts that make your investment trends clear."
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className="features">
            <h2>Why Choose StockTracker</h2>
            <div className="feature-grid">
                {features.map((f) => (
                    <div key={f.title} className="feature-card">
                        <div className="feature-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
