'use client'
import React, { useState } from "react";
import { PopoverWallet } from "./Popover";

const WalletComponent: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-full h-full">
      <h2 className="text-xl font-semibold mb-4">My Wallet</h2>
      <div className="grid grid-cols-2 gap-4">
        
        {/* Balance Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
          <p className="text-gray-600 font-medium">Available Balance</p>
          <p className="text-3xl font-bold text-gray-800">GH₵ 0.00</p>
          <PopoverWallet/>
        </div>
        
        {/* Wallet History Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600 font-medium">Wallet History</h3>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border rounded-lg p-2 text-gray-700"
            />
          </div>
          <div className="text-center text-gray-500">
            No Transactions Found For the Specified Date
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletComponent;
