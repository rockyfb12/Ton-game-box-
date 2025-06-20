import React, { useState } from "react";

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnect = () => {
    // Fake TON connect for now
    setWalletAddress("EQC...your_wallet_address");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow text-center">
      {walletAddress ? (
        <div>
          <p className="font-semibold">Wallet Connected ✅</p>
          <p className="text-xs break-all text-gray-500">{walletAddress}</p>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
          onClick={handleConnect}
        >
          Connect TON Wallet
        </button>
      )}
    </div>
  );
}
