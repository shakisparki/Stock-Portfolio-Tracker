// src/components/PortfolioTable.tsx
import React from "react";
import type { HoldingWithMarket } from "../models/types";

interface Props {
    holdings: HoldingWithMarket[];
    onRemove: (id: string) => void;
}

const PortfolioTable: React.FC<Props> = ({ holdings, onRemove }) => {
    return (
        <div className="card">
            <h3>Your Holdings</h3>
            {holdings.length === 0 ? (
                <p>No holdings yet — add a stock above.</p>
            ) : (
                <table className="holdings-table">
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Shares</th>
                            <th>Purchase</th>
                            <th>Current</th>
                            <th>Value</th>
                            <th>P&L</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {holdings.map((h) => (
                            <tr key={h.id}>
                                <td className="mono">{h.ticker}</td>
                                <td>{h.shares}</td>
                                <td>${h.purchasePrice.toFixed(2)}</td>
                                <td>{h.currentPrice !== null ? `$${h.currentPrice.toFixed(2)}` : "—"}</td>
                                <td>{h.marketValue !== null ? `$${h.marketValue.toFixed(2)}` : "—"}</td>
                                <td className={h.unrealizedPnL && h.unrealizedPnL >= 0 ? "pos" : "neg"}>
                                    {h.unrealizedPnL !== null ? `$${h.unrealizedPnL!.toFixed(2)}` : "—"}
                                </td>
                                <td>
                                    <button className="btn-ghost" onClick={() => onRemove(h.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PortfolioTable;
