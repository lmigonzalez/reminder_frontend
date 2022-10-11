import React from 'react';

import CardOptions from './CardOptions';

function OptionBtn() {
  return (
    <div className='relative'>
      <button className="flex justify-center items-center">
        <div className="w-2 h-2 rounded-[50%] bg-[#2C3333]"></div>
        <div className="w-2 h-2 rounded-[50%] mx-[0.1rem] bg-[#2C3333]"></div>
        <div className="w-2 h-2 rounded-[50%] bg-[#2C3333]"></div>
      </button>

		{/* <CardOptions/> */}
    </div>
  );
}

export default OptionBtn;
