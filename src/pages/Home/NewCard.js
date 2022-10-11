import React from 'react';

function NewCard() {
  return (
    <div>
      <h1 className="my-5 text-4xl">Reminder</h1>
      <form className="bg-[#2C3333] w-[400px] max-w-full m-auto p-10">
        <h2 className="text-white text-start mb-2">Add New Card</h2>
        <input type="text" name="cardName" placeholder="Card Name" />
        <input type="number" name="totalDebt" placeholder="Total Debt" />
        <input
          type="number"
          name="currentBalance"
          placeholder="Current Balance"
        />
        <input
          type="number"
          name="monthlyPayment"
          placeholder="Monthly Payment"
        />
        <input type="date" name="dueIn"/>
        <button className="bg-[#59CE8F] text-white w-full px-4 py-1 mb-2">
          Submit
        </button>
        <button className="bg-[#E64848] text-white w-full px-4 py-1">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewCard;
