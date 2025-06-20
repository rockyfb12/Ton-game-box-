import React, { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");

  const handleWithdraw = () => {
    if (!amount || !wallet) {
      alert("Please enter all fields");
      return;
    }
    alert(`Withdrew ${amount} TON to ${wallet} (mock)`); // Real system a backend API call korbo
    setAmount("");
    setWallet("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h2 className="text-lg font-bold mb-2">🏧 Withdraw TON</h2>
      <input
        type="text"
        placeholder="Your TON Wallet Address"
        className="w-full border p-2 rounded mb-2"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
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
        className="w-full bg-red-500 text-white py-2 rounded"
        onClick={handleWithdraw}
      >
        Withdraw
      </button>
    </div>
  );
}
