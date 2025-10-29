import React from "react";
import cubyn from "../assets/cubyn.svg";
import bastion from "../assets/bastion.svg";
import digits from "../assets/digits.svg";
import pipe from "../assets/pipe.svg";
import ramp from "../assets/ramp.svg";

const Trusted = () => {
  return (
    <section className="bg-green-800 text-white mt-16 py-6 px-8 flex flex-wrap items-center justify-center gap-8">
      <span className="font-medium">Trusted by Top Companies</span>
      <div className="flex gap-8 items-center">
        {[cubyn, bastion, digits, pipe, ramp].map((logo, i) => (
          <img key={i} src={logo} alt="Company logo" className="h-6" />
        ))}
      </div>
    </section>
  );
};

export default Trusted;
