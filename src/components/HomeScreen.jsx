import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function HomeScreen() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">🎮 TON GameBox</h1>

      <TonConnectButton className="mb-4" />

      <div className="space-y-2">
        <a href="/deposit" className="block bg-blue-500 text-white py-2 rounded">💰 Deposit TON</a>
        <a href="/withdraw" className="block bg-green-500 text-white py-2 rounded">🏧 Withdraw</a>
        <a href="/game" className="block bg-purple-500 text-white py-2 rounded">🎁 Open Box</a>
        <a href="/invite" className="block bg-yellow-500 text-black py-2 rounded">🤝 Invite & Earn</a>
        <a href="https://t.me/TonGameBoxofficial" className="block text-blue-600 text-sm mt-4 underline">📢 Join Official Channel</a>
      </div>
    </div>
  );
