import { useState } from 'react';
import apple from '../assets/log/apple.png';
import search from '../assets/log/search.png';
import bag from '../assets/log/bag.png';
import Store from '../pages/store';
import Accessories from '../pages/accessories';
import AirPods from '../pages/airPods';
import Entertainment from '../pages/entertainment';
import Ipad from '../pages/iPad';
import Iphone from '../pages/iphone';
import Mac from '../pages/mac';
import Support from '../pages/support';
import TVHome from '../pages/tv&home';
import Watch from '../pages/watch';






const LandingPage = () => {
  const [hoveredSection, setHoveredSection] = useState('');

  const navItems = [
    { label: 'Store', component: <Store /> },
    { label: 'Mac', component: <Mac /> },
    { label: 'Ipad', component: <Ipad /> },
    { label: 'Iphone', component: <Iphone /> },
    { label: 'Watch', component: <Watch /> },
    { label: 'AirPods', component: <AirPods /> },
    { label: 'TV & Home', component: <TVHome /> },
    { label: 'Entertainment', component: <Entertainment /> },
    { label: 'Accessories', component: <Accessories /> },
    { label: 'Support', component: <Support /> }
  ];

  const handleMouseEnter = (label) => {
    setHoveredSection(label);
  };

  const handleMouseLeave = () => {
    setHoveredSection('');
  };

  const currentItem = navItems.find(item => item.label === hoveredSection);
  const isAnySectionHovered = Boolean(currentItem?.component);

  return (
    <>
      {/* Main wrapper for bg control */}
      <div
        className={`${isAnySectionHovered ? 'bg-white' : 'bg-[#f5f5f7]'}`}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navbar */}
        <div className="flex space-x-9.5 items-center justify-center">
          <img src={apple} className="w-12 h-12 p-4 cursor-pointer" />

          {navItems.map((item, idx) => (
            <p
              key={idx}
              className="text-[#313131] text-xs cursor-pointer"
              onMouseEnter={() => handleMouseEnter(item.label)}
            >
              {item.label}
            </p>
          ))}

          <img src={search} className="w-4 h-4 cursor-pointer" />
          <img src={bag} className="w-4 h-4 cursor-pointer" />
        </div>

        {/* Hovered component */}
        {isAnySectionHovered && (
          <div
            onMouseEnter={() => handleMouseEnter(currentItem.label)}
          >
            {currentItem.component}
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;
