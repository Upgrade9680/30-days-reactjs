import { useState } from "react";
import apple from "../assets/log/apple.png";
import search from "../assets/log/search.png";
import bag from "../assets/log/bag.png";

import Store from "../components/LandingPageComponent/store";
import Accessories from "../components/LandingPageComponent/accessories";
import AirPods from "../components/LandingPageComponent/airPods";
import Entertainment from "../components/LandingPageComponent/entertainment";
import Ipad from "../components/LandingPageComponent/iPad";
import Iphone from "../components/LandingPageComponent/iphone";
import Mac from "../components/LandingPageComponent/mac";
import Support from "../components/LandingPageComponent/support";
import TVHome from "../components/LandingPageComponent/tv&home";
import Watch from "../components/LandingPageComponent/watch";

const LandingPage = () => {
  const [hoveredSection, setHoveredSection] = useState("");

  const navItems = [
    { label: "Store", component: <Store /> },
    { label: "Mac", component: <Mac /> },
    { label: "Ipad", component: <Ipad /> },
    { label: "Iphone", component: <Iphone /> },
    { label: "Watch", component: <Watch /> },
    { label: "AirPods", component: <AirPods /> },
    { label: "TV & Home", component: <TVHome /> },
    { label: "Entertainment", component: <Entertainment /> },
    { label: "Accessories", component: <Accessories /> },
    { label: "Support", component: <Support /> },
  ];

  const handleMouseEnter = (label) => {
    setHoveredSection(label);
  };

  const handleMouseLeave = () => {
    setHoveredSection("");
  };

  const currentItem = navItems.find((item) => item.label === hoveredSection);
  const isAnySectionHovered = Boolean(currentItem?.component);

  return (
    <>
      <div
        className={`transition-colors duration-500 ease-in-out ${
          isAnySectionHovered ? "bg-white" : "bg-[#f5f5f7]"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex space-x-9.5 items-center justify-center py-0">
          <img
            src={apple}
            className="w-12 h-12 p-4 cursor-pointer"
            alt="apple"
          />

          {navItems.map((item, idx) => (
            <p
              key={idx}
              className="text-[#313131] text-xs cursor-pointer"
              onMouseEnter={() => handleMouseEnter(item.label)}
            >
              {item.label}
            </p>
          ))}

          <img src={search} className="w-4 h-4 cursor-pointer" alt="search" />
          <img src={bag} className="w-4 h-4 cursor-pointer" alt="bag" />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isAnySectionHovered
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-5"
          }`}
          onMouseEnter={() => handleMouseEnter(currentItem?.label)}
        >
          <div className="transition-all duration-500 ease-in-out">
            {currentItem?.component}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
