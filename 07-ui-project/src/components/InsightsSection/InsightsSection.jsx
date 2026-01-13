import CustomerSegmentation from "./CustomerSegmentation";
import MarketTrends from "./MarketTrends";

export default function InsightsSection() {
  return (
    <section className="max-w-6xl mx-auto bg-white rounded-3xl p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <CustomerSegmentation />
        <MarketTrends />
      </div>
    </section>
  );
}
