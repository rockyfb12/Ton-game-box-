import React from "react";

export default function ChannelButton() {
  const channelLink = "https://t.me/TonGameBoxofficial";

  return (
    <div className="mt-4 text-center">
      <a
        href={channelLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 text-white text-sm px-6 py-2 rounded-full shadow hover:bg-purple-700"
      >
        📢 Join Official Channel
      </a>
    </div>
  );
}
