const creditCards = [
  {
    type: "image",
    title: "Credit card",
    subtitle: "Minimum to pay or installment card",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
  },
  {
    type: "blue",
    title: "Lorem ipsum access",
    description:
      "Low risk and low acquisition cost and possibility to do business without financial license in some markets",
  },
  {
    type: "lime",
    title: "Lorem advance",
    description:
      "With this product the highest APR can be reached with low risk as the customer’s salary is transferred to our debit card. The product is perceived as PDL-Killer.",
  },
];

export default function CreditProducts() {
  return (
    <section className="bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-10">

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creditCards.map((card, index) => {
            if (card.type === "image") {
              return (
                <div
                  key={index}
                  className="rounded-3xl overflow-hidden bg-gray-200 hover:-translate-y-2 transition"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`rounded-3xl p-8 hover:-translate-y-2 transition
                  ${
                    card.type === "blue"
                      ? "bg-blue-500 text-white"
                      : "bg-lime-300 text-black"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    card.type === "blue" ? "text-blue-100" : ""
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
