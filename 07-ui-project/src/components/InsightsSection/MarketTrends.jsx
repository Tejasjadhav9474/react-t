export default function MarketTrends() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 space-y-6 hover:shadow-lg transition">

      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 text-xs font-semibold bg-black text-white rounded-full">
          MARKET TRENDS
        </span>
        <span className="text-xs tracking-widest text-gray-500">
          2024–2027
        </span>
      </div>

      <h3 className="text-2xl font-bold">
        E-commerce market to exceed{" "}
        <span className="bg-lime-300 px-2 rounded">$300B</span>
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        India’s MSME contribution to digital commerce is growing rapidly
        due to easier access to credit and digital payments.
      </p>

      {/* Stats / Chart-like blocks */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-600 text-white rounded-xl p-6">
          <p className="text-3xl font-bold">26.7%</p>
          <p className="text-sm opacity-80">Annual growth rate</p>
        </div>

        <div className="bg-lime-300 rounded-xl p-6">
          <p className="text-3xl font-bold">25%</p>
          <p className="text-sm">Share of organized retail</p>
        </div>
      </div>

    </div>
  );
}
