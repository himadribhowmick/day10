//import React from "react";
import button1 from "../assets/button1.svg";
import button2 from "../assets/button2.svg";
import button3 from "../assets/button3.svg";
import nice from "../assets/nice.svg";
import Profile1 from "../assets/Profile1.svg";
import Profile2 from "../assets/Profile2.svg";
import Profile3 from "../assets/Profile3.svg";
import Profile4 from "../assets/Profile4.svg";
//import Avatar2 from "../assets/avatar2.svg";
//import Avatar3 from "../assets/avatar1.svg";
//import Avatar4 from "../assets/avatar2.svg";

const LeftCard = () => (
  <div className="bg-[#E9F3ED] rounded-2xl p-6 shadow-md">
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-[#DFF3E6] rounded-full flex items-center justify-center text-green-700">
        <img src={button1} alt="Logo" className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 leading-snug">
        Sales overview from <br /> Previous Day
      </h3>
    </div>

    {/* Card Body */}
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <img src={nice} alt="Logo" className="w-6 h-6" />
        <span>
          Total sales:{" "}
          <span className="font-bold text-gray-700">$12,500</span>
        </span>
      </div>

      {/* ✅ Fixed Bar Chart */}
      <div className="mt-6 relative">
        <div className="flex items-end justify-between h-[150px] bg-transparent">
          {[
            { day: "Sun", h: 60 },
            { day: "Mon", h: 80 },
            { day: "Tue", h: 90 },
            { day: "Wed", h: 100 },
            { day: "Thu", h: 140, high: true },
            { day: "Fri", h: 70 },
            { day: "Sat", h: 90 },
          ].map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-end flex-1 min-w-[24px]"
            >
              <div
                className={`w-4 sm:w-5 md:w-6 rounded-md transition-all duration-500 ${
                  b.high ? "bg-green-700" : "bg-green-300"
                }`}
                style={{ height: `${b.h}px` }}
              ></div>
              <span className="text-[10px] mt-2 text-gray-500">{b.day}</span>
            </div>
          ))}
        </div>

        {/* Highlight Label */}
        <div className="absolute left-[55%] -top-5 bg-[#FBF7B9] text-gray-800 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
          Highest sale ~ <span className="font-bold text-base">$2,450</span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-4 bg-[#DFF3E6] inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-800 font-medium">
      <img src={nice} alt="Logo" className="w-5 h-5" />
      <span>Avg. sale: $104.16 / per transaction</span>
    </div>
  </div>
);

const MidCard = () => (
  <div className="bg-[#E7FCE1] rounded-2xl p-6 shadow-md">
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-[#D9F8D3] rounded-full flex items-center justify-center text-green-700">
        <img src={button2} alt="Logo" className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 leading-snug">
        Factoring Possible <br /> Amount.
      </h3>
    </div>

    {/* Available Amount */}
    <div className="bg-white rounded-xl p-4 mb-5">
      <div className="text-sm text-gray-500">Available amount</div>
      <div className="font-bold text-2xl text-gray-800 mt-1">
        $15,375 <span className="text-xs text-gray-400">USD</span>
      </div>
    </div>

    {/* Factored Balance */}
    <div className="bg-white rounded-xl p-4">
      <div className="text-sm text-gray-600">
        💲 Factored amount vs. remaining balance
      </div>
      <div className="mt-3 flex justify-between items-center text-sm">
        <span className="text-gray-600">Factored balance</span>
        <span className="font-semibold text-gray-800">$11,531.25</span>
      </div>
      <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-3 bg-green-700 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">75%</div>
    </div>
  </div>
);

const RightCard = () => (
  <div className="bg-[#FBF7B9] rounded-2xl p-6 shadow-md relative">
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-[#FFF6B6] rounded-full flex items-center justify-center text-yellow-700">
        <img src={button3} alt="Logo" className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 leading-snug">
        Secure & Streamlined <br /> Workflow
      </h3>
    </div>

    {/* Floating User Card */}
    <div className="absolute right-6 top-24 rotate-[-6deg] bg-white rounded-xl p-3 shadow-md w-44">
      <div className="flex justify-between text-xs font-semibold text-gray-600">
        <span>Recent User</span>
        <span className="text-green-600 cursor-pointer">View All</span>
      </div>

      <div className="mt-2 flex items-center">
        {[Profile2, Profile3, Profile4, Profile1].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="user"
            className="w-6 h-6 rounded-full border-2 border-white -ml-1"
          />
        ))}
        <div className="ml-2 bg-[#E9F3ED] text-xs font-semibold text-gray-800 px-2 py-[2px] rounded-full">
          9+
        </div>
      </div>
    </div>

    {/* Total Balance */}
    <div className="mt-24 bg-white rounded-xl p-4 shadow-md ml-auto w-fit">
      <div className="text-xs text-gray-500">Total Balance</div>
      <div className="font-bold text-2xl text-gray-800">23,576.00</div>
      <div className="text-xs text-gray-400 flex items-center gap-2 mt-1">
        <span className="text-green-600 font-semibold">+</span> Add Number
      </div>
    </div>

    {/* Online Section */}
    <div className="mt-6 bg-white p-3 rounded-xl flex items-center shadow-md">
      <img
        src={Profile1}
        alt="Online User"
        className="w-10 h-10 rounded-full border border-gray-200"
      />
      <div className="ml-3">
        <div className="text-sm font-medium text-gray-800">Online</div>
        <div className="text-xs text-gray-500">Tomy Restaurant</div>
      </div>
      <div className="ml-auto text-right">
        <div className="font-semibold text-sm text-gray-800">+$10K</div>
        <button className="text-xs bg-green-100 text-green-700 px-2 py-[2px] rounded-md mt-1">
          Confirm
        </button>
      </div>
    </div>
  </div>
);

export default function Cards() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LeftCard />
        <MidCard />
        <RightCard />
      </div>
    </section>
  );
}
