"use client";

import { useState, useEffect, useRef } from "react";

const gap = 16; // Gap size in pixels (tailwind's gap-4 is 1rem which is 16px)
const visibleItems = 9; // Number of items to show

const BattlesScreen = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(0); // Current speed
  const isScrolling = speed > 0; // If speed > 0, it's scrolling
  const totalGapWidth = gap * (visibleItems - 1);
  const [itemWidth, setItemWidth] = useState(window.innerWidth - totalGapWidth); // Width of each item
  

  // Adjust the item width based on screen width and the number of items to show
  useEffect(() => {
    const handleResize = () => {
      const totalGapWidth = gap * (visibleItems - 1); // Total gap width for the number of gaps
      const availableWidth = window.innerWidth - totalGapWidth; // Total width minus gaps
      setItemWidth(availableWidth / visibleItems); // Divide by visible items
    };

    // Call on resize and on initial load
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleItems]);

  useEffect(() => {
    if (!containerRef.current || speed === 0) return;

    let animationFrameId: number;

    const scroll = () => {
      if (containerRef.current) {
        // Scroll the container
        containerRef.current.scrollLeft += speed;

        // Looping logic: If we reach the end, reset scroll to the beginning smoothly
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  const startScrolling = () => {
    setSpeed(10); // Start scrolling
  };

  const stopScrolling = () => {
    let currentSpeed = speed;
    const decelerate = () => {
      if (currentSpeed > 0) {
        currentSpeed *= 0.96; // Gradually reduce speed
        if (currentSpeed < 0.1) {
          setSpeed(0); // Stop completely
        } else {
          setSpeed(currentSpeed);
          requestAnimationFrame(decelerate);
        }
      }
    };
    decelerate();
  };

  const calculateCenterItem = () => {
    if (containerRef.current) {
      // Calculate the center position of the container
      const centerPosition = containerRef.current.scrollLeft + containerRef.current.offsetWidth / 2;
      
      // Calculate the index of the center item
      const itemIndex = Math.floor(centerPosition / (itemWidth + gap));
      
      // Extract the item ID (e.g., "Item 1" -> 1)
      const centerItemId = items[itemIndex % items.length].split(" ")[1];
      
      // Update the state with the center item ID
      console.log(Number(centerItemId));
    }
  };
  
  useEffect(() => {
    // Check and update the center item when scrolling stops
    if (containerRef.current && speed === 0) {
      calculateCenterItem();
    }
  }, [speed, itemWidth, gap]);

  return (
    <div className="flex flex-col items-center space-y-4 p-4 mt-16">
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap border border-gray-300 rounded-lg"
        style={{ width: "100vw" }} // Full screen width
      >
        <div className="flex gap-4">
          {/* Show the items twice to create a seamless loop */}
          <div className="flex gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="p-2 bg-blue-500 text-white rounded-lg text-center"
                style={{ width: `${itemWidth}px` }} // Use the dynamically calculated item width
              >
                {item}
              </div>
            ))}
          </div>

          {/* Duplicate the items for seamless loop */}
          <div className="flex gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="p-2 bg-blue-500 text-white rounded-lg text-center"
                style={{ width: `${itemWidth}px` }} // Use the dynamically calculated item width
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={isScrolling ? stopScrolling : startScrolling}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        {isScrolling ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default BattlesScreen;