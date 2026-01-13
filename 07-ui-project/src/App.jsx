import ValueProposition from "./components/ValueProposition/ValueProposition";
import InsightsSection from "./components/InsightsSection/InsightsSection";
import CreditProducts from "./components/CreditProducts/CreditProducts";


export default function App() {
  return (
  <div className="min-h-screen bg-gray-100 p-6">
  <ValueProposition />;
  <InsightsSection />;
  <CreditProducts />;
  </div>
  );
}

