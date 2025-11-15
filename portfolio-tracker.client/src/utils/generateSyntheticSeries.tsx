import type { HoldingWithMarket } from "../models/types";

// For demo purposes, produce a simple synthetic timeseries:
// In real app, backend should return historical portfolio values.
export const generateSyntheticSeries = (holdings: HoldingWithMarket[]) => {
    const days = 30;
    const now = Date.now();
    const labels = Array.from({ length: days }, (_, i) => new Date(now - (days - 1 - i) * 24 * 60 * 60 * 1000));
    // base value = sum of marketValue (or cost if missing)
    const base = holdings.reduce((s, h) => s + (h.marketValue ?? h.purchasePrice * h.shares), 0) || 0;
    // create gentle fluctuation
    const data = labels.map((_, i) => {
        const volatility = 0.02; // 2%
        const factor = 1 + (Math.sin(i / 3) * 0.01 + (Math.random() - 0.5) * volatility);
        return Math.max(0, base * factor);
    });
    return { labels, data };
};
