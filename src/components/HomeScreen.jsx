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
      <h1 className="text-2xl font-bold">🎮 TON GameBox</h1>
      <WalletConnect />
      <Deposit />
      <Withdraw />
      <BoxDrawGame />
      <InviteEarn />
      <ChannelButton />
    </div>
  );
}
