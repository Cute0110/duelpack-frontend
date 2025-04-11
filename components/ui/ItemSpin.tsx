"use client";

import { useState, useEffect, useRef } from "react";
const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500'];

const ItemSpin = ({
  packItems,
  carouselItems,
  stopItemId,
  startSpeed,
  packIndex,
  onSpinFinish,
  isMobile,
}: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(0); // Current speed
  const [selectedIndex, setSelectedIndex] = useState(-1); // Current speed
  const [visibleItems, setVisibleItems] = useState(9); // Current speed
  const [gap, setGap] = useState(8); // Current speed
  const [itemWidth, setItemWidth] = useState(0); // Width of each item
  const [currentMidIndex, setCurrentMidIndex] = useState(-1); // Width of each item

  // Adjust the item width based on screen width and the number of items to show
  useEffect(() => {
    const totalGapWidth = gap * (visibleItems - 1); // Total gap width for the number of gaps
    const availableWidth = window.innerWidth - totalGapWidth; // Total width minus gaps
    setItemWidth(availableWidth / visibleItems); // Divide by visible items
  }, [visibleItems, gap]);

  useEffect(() => {
    if (isMobile) {
      setGap(8);
      setVisibleItems(3);
    } else {
      setGap(16);
      setVisibleItems(9);
    }
  }, [isMobile]);

  useEffect(() => {
    if (startSpeed != 0) {
      setSelectedIndex(-1);
    }
    setSpeed(startSpeed);
  }, [startSpeed]);

  const calculateCenterItem = () => {
    if (containerRef.current) {
      // Calculate the center position of the container
      const centerPosition = containerRef.current.scrollLeft + containerRef.current.offsetWidth / 2;
      // Calculate the index of the center item
      const itemIndex = Math.floor(centerPosition / (itemWidth + gap));
      return itemIndex;
    }
  };

  const smoothScrollTo = (targetScrollLeft: number, duration = 500, selectedIndex = -1) => {
    if (!containerRef.current) return;

    const start = containerRef.current.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Normalize progress (0 to 1)

      // Use an easing function (easeOutQuad for a smooth deceleration effect)
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      if (containerRef.current) {
        containerRef.current.scrollLeft = start + (targetScrollLeft - start) * easedProgress;
      }

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setSpeed(0);
        setCurrentMidIndex(-1);
        setSelectedIndex(selectedIndex);
        onSpinFinish(packIndex);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (!containerRef.current) {
      return;
    } else if (containerRef.current && speed === 0 && stopItemId >= 0) {
      const currentIndex: any = calculateCenterItem();
      smoothScrollTo(containerRef.current.scrollLeft + gap + ((itemWidth * currentIndex + gap * (currentIndex - 0.5) - containerRef.current.scrollLeft) - (itemWidth * Math.floor(visibleItems / 2) + gap * (visibleItems / 2.0))), 500, (currentIndex))
      return;
    } else if (startSpeed === 0) {
      return;
    }
    let animationFrameId: number;
    const scroll = () => {
      if (containerRef.current) {
        const currentIndex: any = calculateCenterItem();
        setCurrentMidIndex(currentIndex);
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

  useEffect(() => {
    // Check and update the center item when scrolling stops
    if (containerRef.current && speed === 0) {
      calculateCenterItem();
    }
  }, [speed, itemWidth, gap]);

  useEffect(() => {
    if (stopItemId >= 0) {
      let currentSpeed = speed;
      let beforeIndex = 0;
      let midIndex = 0;
      let flag = false;
      const decelerate = () => {
        if (currentSpeed > 20) {
          currentSpeed *= 0.98; // Gradually reduce speed
          setSpeed(currentSpeed);
          requestAnimationFrame(decelerate);
        } else {
          const currentIndex: any = calculateCenterItem();
          const itemIndex = (currentIndex + 5) % carouselItems.length;
          if (carouselItems[itemIndex].id == packItems.itemsInfo[stopItemId].id && containerRef.current && flag == false) {
            beforeIndex = (currentIndex + 5) % carouselItems.length;
            midIndex = (currentIndex + 3) % carouselItems.length;
            flag = true;
            setSpeed(10);
          }

          if (currentIndex % carouselItems.length == midIndex && flag == true) {
            setSpeed(3);
          }

          if (currentIndex % carouselItems.length == beforeIndex && flag == true) {
            setSpeed(0);
          }
          else {
            requestAnimationFrame(decelerate);
          }
        }
      };
      decelerate();
    }
  }, [stopItemId]);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap rounded-lg"
        style={{ width: "100vw" }} // Full screen width
      >
        <div className="flex gap-2 md:gap-4">
          {/* Show the items twice to create a seamless loop */}
          <div className="flex gap-2 md:gap-4">
            {carouselItems.map((data: any, index: any) => (
              <div
                key={index}
                className={`p-2 text-white text-center`}
                style={{ width: `${itemWidth}px` }} // Use the dynamically calculated item width
              >
                {selectedIndex == index ?
                  <div className="relative aspect-square group flex items-center justify-center">
                    <div className={`absolute top-6 inset-0 m-auto ${itemBackColorArray[data.rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-2/5 md:2/4 aspect-square rounded-full blur-xl`}></div>
                    <img src={`/images/items/${data.item.imageUrl}`} className="w-5/6 aspect-square relative mt-6" />
                    <div className="absolute w-full -bottom-4 left-[50%] -translate-x-1/2 z-10 px-4 py-2 rounded-md before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded-md">
                      <p className="w-full text-center font-semibold text-md text-white truncate">{data.item.name}</p>
                      <p className="w-full text-center font-semibold text-md text-white truncate">${data.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                  :
                  <div className="relative aspect-square group flex items-center justify-center">
                    {currentMidIndex == index ?
                      <>
                        <img src="/images/packSelector.png" className="absolute opacity-70 top-6 inset-0 m-auto w-5/6 aspect-square" />
                        <div className={`absolute top-6 inset-0 m-auto ${itemBackColorArray[2]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-4/5 md:2/4 aspect-square rounded-full blur-xl`}></div>
                      </>
                      :
                      <div className={`absolute top-6 inset-0 m-auto ${itemBackColorArray[data.rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-2/5 md:2/4 aspect-square rounded-full blur-xl`}></div>
                    }
                    <img src={`/images/items/${data.item.imageUrl}`} className="w-4/5 aspect-square relative mt-6" />
                  </div>
                }
              </div>
            ))}
          </div>
          <div className="flex gap-2 md:gap-4">
            {carouselItems.map((data: any, index: any) => (
              <div
                key={index}
                className="p-2 text-white text-center"
                style={{ width: `${itemWidth}px` }} // Use the dynamically calculated item width
              >
                {selectedIndex == (index + carouselItems.length) ?
                  <div className="relative aspect-square group flex items-center justify-center">
                    <div className={`absolute top-6 inset-0 m-auto ${itemBackColorArray[data.rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-2/5 md:2/4 aspect-square rounded-full blur-xl`}></div>
                    <img src={`/images/items/${data.item.imageUrl}`} className="w-5/6 aspect-square relative mt-6" />
                    <div className="absolute w-full -bottom-4 left-[50%] -translate-x-1/2 z-10 px-4 py-2 rounded-md before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded-md">
                      <p className="w-full text-center font-semibold text-md text-white truncate">{data.item.name}</p>
                      <p className="w-full text-center font-semibold text-md text-white truncate">${data.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                  :
                  <div className="relative aspect-square group flex items-center justify-center">
                    {currentMidIndex == (index + carouselItems.length) ?
                      <img src="/images/packSelector.png" className="absolute top-6 inset-0 m-auto w-5/6 aspect-square" /> :
                      <div className={`absolute top-6 inset-0 m-auto ${itemBackColorArray[data.rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-2/5 md:2/4 aspect-square rounded-full blur-xl`}></div>
                    }
                    <img src={`/images/items/${data.item.imageUrl}`} className="w-4/5 aspect-square relative mt-6" />
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSpin;