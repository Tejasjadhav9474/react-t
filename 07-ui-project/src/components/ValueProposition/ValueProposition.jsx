export default function ValueProposition() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className="
          w-full max-w-6xl bg-white rounded-3xl p-10
          transition-all duration-300
          hover:shadow-2xl hover:-translate-y-1
        "
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <button
            className={`
              px-4 py-1
              text-xs font-semibold tracking-widest
              bg-black text-white rounded-full
              hover:bg-gray-800 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
              transition
            `}
          >
            VALUE PROPOSITION
          </button>

          <button className="text-sm tracking-widest text-gray-500 hover:text-black transition">
            DIGITAL BANKING PLATFORM
          </button>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* LEFT CARD */}
            <div
              className="
                bg-gray-50 rounded-2xl p-8
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >
              <h2 className="text-3xl font-bold mb-4">
                Target audience{" "}
                <span
                  className="
                    bg-lime-300 px-3 py-1 rounded-full
                    transition-transform duration-300
                    hover:scale-110
                  "
                >
                  needs
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                While banks and neobanks that provide credit products are
                targeting prime customers, our target audience remains
                underserved without access to credit products besides ultra
                high interest payday loans.
              </p>
            </div>

            {/* INFO ROW */}
            <div className="flex items-start gap-4 group">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
                className="
                  w-12 h-12 rounded-xl object-cover shrink-0
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  There is a great demand
                </span>{" "}
                for a full-featured, convenient mobile bank with credit
                solutions for underbanked customers.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div
            className="
              bg-blue-600 rounded-3xl p-10 text-white
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-1
            "
          >
            <h2 className="text-3xl font-bold mb-6">
              Value proposition
            </h2>

            <p className="text-blue-100 leading-relaxed">
              The full-featured convenient mobile bank for underbanked and
              unbanked population from near-prime and sub-prime segments,
              offering cheap and quick payments and access to credit products
              at reasonable rates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
