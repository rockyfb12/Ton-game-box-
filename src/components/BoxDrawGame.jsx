import React, { useState } from "react";

export default function BoxDrawGame() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [boxes, setBoxes] = useState([0, 1, 2, 3, 4, 5]);

  const handleDraw = (index) => {
    setLoading(true);
    const winBox = Math.floor(Math.random() * 6);

    setTimeout(() => {
      setResult({ selected: index, win: winBox });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h2 className="text-lg font-bold mb-2">🎁 Box Draw Game (0.2 TON)</h2>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {boxes.map((_, index) => (
          <button
            key={index}
            className={`h-20 rounded-xl border text-xl font-bold ${
              result
                ? result.win === index
                  ? "bg-green-400 text-white"
                  : result.selected === index
                  ? "bg-red-400 text-white"
                  : "bg-gray-200"
                : "bg-blue-100"
            }`}
            onClick={() => !loading && handleDraw(index)}
            disabled={loading || (result && result.selected !== null)}
          >
            🎁
          </button>
        ))}
      </div>

      {result && (
        <div className="mt-4 font-semibold">
          {result.selected === result.win
            ? "🎉 You Won!"
            : "😢 Sorry, You Lost!"}
        </div>
      )}
    </div>
  );
        }
