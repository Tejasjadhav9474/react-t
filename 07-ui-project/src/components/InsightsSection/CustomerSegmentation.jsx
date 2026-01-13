export default function CustomerSegmentation() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 space-y-6 hover:shadow-lg transition">

      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 text-xs font-semibold bg-black text-white rounded-full">
          TARGET AUDIENCE
        </span>
        <span className="text-xs tracking-widest text-gray-500">
          SEGMENTATION
        </span>
      </div>

      <h3 className="text-2xl font-bold">
        Prospective customer segmentation
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Based on access to banking products and satisfaction level, customers
        can be divided into three major groups.
      </p>

      {/* Segmentation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["Underbanked", "Near-prime", "Sub-prime"].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl p-4 text-center font-semibold
                       hover:bg-black hover:text-white transition cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}
