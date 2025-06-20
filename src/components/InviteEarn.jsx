import React, { useState } from "react";

export default function InviteEarn() {
  const [copied, setCopied] = useState(false);

  const username = "TonGameBox_Bot"; // ✅ your bot username
  const userId = "123456789"; // 🔁 dynamically replace with real user ID (mock for now)
  const inviteLink = `https://t.me/${username}?start=${userId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Copy failed!");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h2 className="text-lg font-bold mb-2">👫 Invite & Earn</h2>
      <p className="mb-2 text-sm">
        Share your invite link. Earn <strong>0.05 TON</strong> for each valid user!
      </p>

      <div className="bg-gray-100 p-2 rounded text-sm mb-2 break-all">
        {inviteLink}
      </div>

      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {copied ? "✅ Copied!" : "Copy Invite Link"}
      </button>
    </div>
  );
}
