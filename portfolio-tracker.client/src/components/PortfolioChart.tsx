// src/components/PortfolioChart.tsx
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, TimeScale } from "chart.js";
import type { ChartOptions } from "chart.js";   
import 'chartjs-adapter-date-fns';
import type { HoldingWithMarket } from "../models/types";
import { computePortfolioHistory } from "../utils/portfolioComputations";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, TimeScale);

interface Props {
    holdings: HoldingWithMarket[];
}

const PortfolioChart: React.FC<Props> = ({ holdings }) => {
    const series = useMemo(() => computePortfolioHistory(holdings), [holdings]);

    const chartData = {
        labels: series.labels,
        datasets: [
            {
                label: "Portfolio Value",
                data: series.data,
                fill: true,
                tension: 0.25,
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    };

    const options:ChartOptions<"line">  = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { mode: "index", intersect: false },
        },
        scales: {
            x: { type: "time", time: { unit: "day" } },
            y: { beginAtZero: false },
        },
    };

    return (
        <div className="card">
            <h3>Portfolio Value (30d)</h3>
            <div style={{ height: 300 }}>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default PortfolioChart;
