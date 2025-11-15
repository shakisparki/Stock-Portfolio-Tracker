// src/components/AddStockForm.tsx
import React, { useState } from "react";

interface Props {
    onAdd: (payload: { ticker: string; shares: number; purchasePrice: number }) => Promise<boolean>;
}

const AddStockForm: React.FC<Props> = ({ onAdd }) => {
    const [ticker, setTicker] = useState("");
    const [shares, setShares] = useState<number | "">("");
    const [purchasePrice, setPurchasePrice] = useState<number | "">("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!ticker || !shares || !purchasePrice) {
            alert("Please fill all fields");
            return;
        }
        const success = await onAdd({ ticker: ticker.trim().toUpperCase(), shares: Number(shares), purchasePrice: Number(purchasePrice) });
        if (success) {
            setTicker("");
            setShares("");
            setPurchasePrice("");
        }
    };

    return (
        <div className="card">
            <h3>Add Holding</h3>
            <form onSubmit={handleSubmit} className="add-form">
                <label>Ticker</label>
                <input value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="AAPL" />

                <label>Shares</label>
                <input type="number" value={shares} onChange={(e) => setShares(e.target.value === "" ? "" : Number(e.target.value))} min={0} step="any" />

                <label>Purchase Price (per share)</label>
                <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value === "" ? "" : Number(e.target.value))} min={0} step="any" />

                <button className="btn-primary full-width" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddStockForm;
