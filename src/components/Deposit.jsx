import React, { useState } from "react";

export default function Deposit() {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    if (!amount) {
      alert("Please select a TON amount");
      return;
    }
    alert(`Deposited ${amount} TON (mock)`); // real e backend e pathabo
    setAmount("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h2 className="text-lg font-bold mb-2">💰 Deposit TON</h2>
      <select
        className="w-full border p-2 rounded mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      >
        <option value="">Select Amount</option>
        <option value="1">1 TON</option>
        <option value="3">3 TON</option>
        <option value="5">5 TON</option>
        <option value="10">10 TON</option>
      </select>
      <button
        className="w-full bg-green-500 text-white py-2 rounded"
        onClick={handleDeposit}
      >
        Deposit
      </button>
    </div>
  );
}
