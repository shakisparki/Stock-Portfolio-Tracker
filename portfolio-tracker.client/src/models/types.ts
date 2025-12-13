// src/types.ts
export interface StockHolding {
    id: string; // GUID from backend
    ticker: string; // e.g., "AAPL"
    shares: number;
    purchasePrice: number; // price per share at purchase
    purchaseDate: string; // ISO date
}

export interface HoldingWithMarket extends StockHolding {
    currentPrice: number | null;
    changePercent?: number | null;
    marketValue?: number | null; // shares * currentPrice
    unrealizedPnL?: number | null; // marketValue - costBasis
}

export interface PortfolioResponse {
    holdings: StockHolding[];
}

export interface PricesResponse {
    prices: Prices[];
}

export interface Prices {
    ticker: string
    currentPrice: number;
    changePercent?: number;
    historical?: { date: string; value: number }[]; // optional for charting
}