import React from "react";
import WalletConnect from "./WalletConnect";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import BoxDrawGame from "./BoxDrawGame";
import InviteEarn from "./InviteEarn";
import ChannelButton from "./ChannelButton";

export default function HomeScreen() {
  return (
    <div className="p-4 space-y-4 text-center">
      <h1 className="text-2xl font-bold mb-2">🎮 TON GameBox</h1>

      {/* Wallet Connect Section */}
      <WalletConnect />

      {/* Deposit Section */}
      <Deposit />

      {/* Withdraw Section */}
      <Withdraw />

      {/* Box Draw Game */}
      <BoxDrawGame />

      {/* Invite and Earn */}
      <InviteEarn />

      {/* Channel Button */}
      <ChannelButton />
    </div>
  );
}
