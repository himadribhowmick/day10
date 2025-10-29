import React from "react";

export default function Stats() {
  return (
    <section className="py-10">
      <div className="bg-primaryGreen text-white py-8 rounded-b-md px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm">Trusted by Top Companies</div>
          <div className="flex items-center gap-8 opacity-90">
            <div className="text-sm">Cubyn</div>
            <div className="text-sm">Digits</div>
            <div className="text-sm">Pipe</div>
            <div className="text-sm">Ramp</div>
          </div>
        </div>
      </div>
    </section>
  );
}
