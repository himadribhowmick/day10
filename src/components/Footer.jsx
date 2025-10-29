import React from "react";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon1.svg";
import Icon3 from "../assets/Icon1.svg";

const Footer = () => {
  return (
    <section className="px-8 py-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <span className="bg-green-100 text-green-900 text-sm font-medium px-4 py-1 rounded-full">
            About Casa Service
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
            Revolutionizing Cash Flow for Business Owners!
          </h2>
        </div>

        {/* Right side */}
        <div>
          <p className="text-gray-600 mb-6">
            Empowering businesses with faster cash access, CASA provides a
            secure, fast, and flexible solution to get early payments for credit
            card sales.
          </p>
          <button className="bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-950 transition">
            Join Now
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">
            Secure and Instant Cash Advances
          </h3>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center w-10 h-10">
              <img src={Icon1} alt="icon1" className="w-5 h-5" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              No more waiting weeks—convert daily credit card transactions into
              cash within 24 hours to keep your business running smoothly.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">
            Transparent and Fair Pricing Process
          </h3>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center w-10 h-10">
              <img src={Icon2} alt="icon2" className="w-5 h-5" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              No Hidden Fees, No Surprises. Enjoy clear, upfront pricing with
              flexible funding options, so you always know what to expect.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-green-900 text-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">
            Flexible and Secure Payout Options
          </h3>
          <div className="flex items-start gap-3">
            <div className="bg-green-800 p-2 rounded-full flex items-center justify-center w-10 h-10">
              <img src={Icon3} alt="icon3" className="w-5 h-5" />
            </div>
            <p className="text-sm leading-relaxed">
              We offer flexible and easy payout options tailored to your needs,
              ensuring quick access to your funds. Choose from multiple payment
              methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
