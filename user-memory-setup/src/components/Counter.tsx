"use client";

import { useState } from "react";

// 카운터 컴포넌트
export default function Counter() {
  const [count, setCount] = useState(0);

  // 증가 핸들러
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  // 감소 핸들러
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  // 리셋 핸들러
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-2xl shadow-lg">
      {/* 카운트 값 표시 */}
      <div className="text-6xl font-bold text-gray-800 sm:text-8xl">
        {count}
      </div>

      {/* 버튼 그룹 */}
      <div className="flex flex-wrap justify-center gap-3">
        {/* 감소 버튼 */}
        <button
          onClick={handleDecrement}
          className="px-6 py-3 text-xl font-semibold text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700 sm:px-8 sm:py-4 sm:text-2xl"
        >
          -
        </button>

        {/* 리셋 버튼 */}
        <button
          onClick={handleReset}
          className="px-6 py-3 text-xl font-semibold text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-600 active:bg-gray-700 sm:px-8 sm:py-4 sm:text-2xl"
        >
          리셋
        </button>

        {/* 증가 버튼 */}
        <button
          onClick={handleIncrement}
          className="px-6 py-3 text-xl font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600 active:bg-blue-700 sm:px-8 sm:py-4 sm:text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
