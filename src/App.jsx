import React from "react";
import { TonConnectUIProvider, useTonConnectUI } from "@tonconnect/ui-react";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <MainApp />
    </TonConnectUIProvider>
  );
}

function MainApp() {
  const [tonConnectUI, connected] = useTonConnectUI();

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">🎮 TON GameBox</h1>

      {!connected ? (
        <button
          onClick={() => tonConnectUI.connectWallet()}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p className="mb-2">Wallet Connected ✅</p>
          <p>{tonConnectUI.wallet?.account.address}</p>
        </div>
      )}

      <HomeScreen />
    </div>
  );
}