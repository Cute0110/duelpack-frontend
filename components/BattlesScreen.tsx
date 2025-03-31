"use client";

import { useState, useEffect, useRef } from "react";

const gap = 16; // Gap size in pixels (tailwind's gap-4 is 1rem which is 16px)
const visibleItems = 9; // Number of items to show

const BattlesScreen = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 mt-16">
      {gap}
    </div>
  );
}

export default BattlesScreen;