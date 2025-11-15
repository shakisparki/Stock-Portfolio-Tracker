// src/utils/api.ts
import axios from "axios";
import type { StockHolding, PortfolioResponse, PricesResponse } from "../models/types";

const api = axios.create({
    baseURL: "/api", // adjust to your backend url
    // If you use httpOnly cookie for JWT, send credentials:
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Portfolio endpoints
export const getPortfolio = async (): Promise<StockHolding[]> => {
    const res = await api.get<PortfolioResponse>("/portfolio");
    return res.data.holdings;
};

export const addHolding = async (payload: {
    ticker: string;
    shares: number;
    purchasePrice: number;
    purchaseDate?: string;
}): Promise<StockHolding> => {
    const res = await api.post<StockHolding>("/portfolio", payload);
    return res.data;
};

export const removeHolding = async (id: string): Promise<void> => {
    await api.delete(`/portfolio/${id}`);
};

// Market data (backend proxy recommended)
export const getPrices = async (tickers: string[]): Promise<PricesResponse> => {
    if (tickers.length === 0) return {};
    // Example backend proxy: /market/prices?tickers=AAPL,TSLA
    const qs = tickers.join(",");
    const res = await api.get<PricesResponse>(`/market/prices?tickers=${encodeURIComponent(qs)}`);
    return res.data;
};

/*
  If you want to mock locally (without backend market proxy), you can
  return fake prices here for development. E.g.:
  export const getPrices = async (tickers: string[]) => {
    return tickers.reduce((acc, t) => ({...acc, [t]: { currentPrice: Math.random()*500 }}), {});
  }
*/
