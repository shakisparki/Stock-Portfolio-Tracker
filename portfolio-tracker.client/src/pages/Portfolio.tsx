import { useEffect, useState } from "react";
import type { HoldingWithMarket } from "../models/types";
import { getPortfolio, getPrices, addHolding, removeHolding } from "../utils/api";
import AddStockForm from "../components/AddStockForm";
import PortfolioTable from "../components/PortfolioTable";
import PortfolioChart from "../components/PortfolioChart";
function Portfolio() {

    const [holdings, setHoldings] = useState<HoldingWithMarket[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadPortfolio = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getPortfolio(); // StockHolding[]
            const tickers = Array.from(new Set(data.map((h) => h.ticker.toUpperCase())));
            const prices = await getPrices(tickers); // PricesResponse

            const enriched: HoldingWithMarket[] = data.map((h) => {
                const upper = h.ticker.toUpperCase();
                const priceInfo = prices[upper];
                const currentPrice = priceInfo?.currentPrice ?? null;
                const marketValue = currentPrice !== null ? currentPrice * h.shares : null;
                const costBasis = h.purchasePrice * h.shares;
                const unrealizedPnL = marketValue !== null ? marketValue - costBasis : null;
                const changePercent = priceInfo?.changePercent ?? null;

                return {
                    ...h,
                    ticker: upper,
                    currentPrice,
                    marketValue,
                    unrealizedPnL,
                    changePercent,
                };
            });

            setHoldings(enriched);
        } catch (err) {
            console.error(err);
            setError("Failed to load portfolio. Try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPortfolio();
        // optionally poll every N seconds:
        // const id = setInterval(loadPortfolio, 30_000);
        // return () => clearInterval(id);
    }, []);

    const handleAdd = async (payload: { ticker: string; shares: number; purchasePrice: number }) => {
        try {
            const created = await addHolding({ ...payload, purchaseDate: new Date().toISOString() });
            console.log(created);
            // optimistic update: append created and reload prices for tickers
            await loadPortfolio();
            return true;
        } catch (err) {
            console.error(err);
            alert("Failed to add holding");
            return false;
        }
    };

    const handleRemove = async (id: string) => {
        if (!confirm("Remove this holding?")) return;
        try {
            await removeHolding(id);
            setHoldings((s) => s.filter((h) => h.id !== id));
        } catch (err) {
            console.error(err);
            alert("Failed to remove holding");
        }
    };

    const totalMarketValue = holdings.reduce((sum, h) => sum + (h.marketValue ?? 0), 0);
    const totalCost = holdings.reduce((sum, h) => sum + h.purchasePrice * h.shares, 0);
    const totalPnL = totalMarketValue - totalCost;
    const pnlPercent = totalCost > 0 ? (totalPnL / totalCost) * 100 : 0;

    return (
        <div className="portfolio-page">
            <div className="portfolio-header">
                <h1>Your Portfolio</h1>
                <div className="portfolio-summary">
                    <div className="summary-item">
                        <div className="label">Market Value</div>
                        <div className="value">${totalMarketValue.toFixed(2)}</div>
                    </div>
                    <div className="summary-item">
                        <div className="label">Unrealised P&L</div>
                        <div className={`value ${totalPnL >= 0 ? "pos" : "neg"}`}>
                            ${totalPnL.toFixed(2)} ({pnlPercent.toFixed(2)}%)
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-grid">
                <div className="left-column">
                    <AddStockForm onAdd={handleAdd} />
                    <div style={{ marginTop: 20 }}>
                        {loading ? <p>Loading...</p> : <PortfolioTable holdings={holdings} onRemove={handleRemove} />}
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>

                <div className="right-column">
                    <PortfolioChart holdings={holdings} />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;