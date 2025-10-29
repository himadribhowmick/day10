import React from "react";

const FeatureCard = ({title, desc, highlight}) => (
  <div className={`p-6 rounded-xl ${highlight ? "bg-primaryGreen text-white" : "bg-white shadow-md"}`}>
    <h4 className={`font-semibold ${highlight ? "" : "text-gray-900"}`}>{title}</h4>
    <p className={`mt-3 ${highlight ? "text-gray-100" : "text-gray-600"}`}>{desc}</p>
  </div>
);

export default function Features() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Secure and Instant Cash Advances"
          desc="No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly."
        />
        <FeatureCard
          title="Transparent and Fair Pricing Process"
          desc="No Hidden Fees. No Surprises. Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect."
        />
        <FeatureCard
          highlight
          title="Flexible and Secure Payout Options"
          desc="We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods."
        />
      </div>
    </section>
  );
}
