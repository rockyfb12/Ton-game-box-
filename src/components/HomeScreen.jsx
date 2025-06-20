import React from "react";

export default function HomeScreen() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">🎮 TON GameBox</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2">Deposit TON</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg m-2">Withdraw</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg m-2">🎁 Open Box</button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-lg m-2">👥 Invite Friends</button>
      <a href="https://t.me/TonGameBoxofficial" target="_blank" className="block mt-4 text-sm text-blue-700 underline">
        📢 Join Our Official Telegram Channel
      </a>
    </div>
  );
}