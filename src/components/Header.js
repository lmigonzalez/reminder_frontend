import React from 'react';


function Header() {
  return (
    <header className="flex justify-center items-center  w-full">
      <div className="flex justify-between items-center w-[1200px] px-3 py-2  max-w-full ">
        <h1 className="text-4xl">Reminder</h1>
        <div>
          <button className="bg-[#E64848] text-white px-4 py-2 mr-4 border-[#820000] border-2">
            Log Out
          </button>
          <button className="bg-[#59CE8F] text-white px-4 py-2 border-[#547B66] border-2">
            Add Card
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
