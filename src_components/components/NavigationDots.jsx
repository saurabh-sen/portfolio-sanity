/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="flex justify-center items-center flex-col">
    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="w-2 h-2 rounded-[50%] bg-[#cbcbcb] m-2 transition-colors duration-200 ease-in-out hover:bg-[#313bac] 2xl:w-5 2xl:h-5"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
