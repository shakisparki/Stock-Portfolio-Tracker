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

export function computePortfolioHistory(holdings: HoldingWithMarket[]) {
    const DAYS = 30;

    // Build a date list for the last 30 days (inclusive)
    const labels: string[] = [];
    const today = new Date();

    for (let i = DAYS - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        labels.push(d.toISOString().split("T")[0]); // YYYY-MM-DD
    }

    // Initialize totals map
    const totals: Record<string, number> = {};
    labels.forEach(date => (totals[date] = 0));

    // Aggregate each holding's historical values
    for (const holding of holdings) {
        if (!holding.historical) continue;

        // Convert holding history into a map for quick lookup
        const historyMap: Record<string, number> = {};
        for (const h of holding.historical) {
            historyMap[h.date.split("T")[0]] = h.value; 
        }

        // Add market value (price × shares) to totals
        for (const date of labels) {
            const value = historyMap[date];
            if (value !== undefined) {
                totals[date] += value;
            }
        }
        totals[new Date().toISOString().split("T")[0]] += holding.marketValue ?? 0;
    }

    // Convert totals map into ordered data array
    const data = labels.map(date => totals[date]);

    return { labels, data };
}
