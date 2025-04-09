import React, { useEffect, useRef, useState } from "react";
import ForgeSpinSVG from "@/public/images/forgeSpin.svg";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  speed?: number; // percentage change per frame (optional)
  isSpin: boolean;
  stopDegree: number; // percentage change per frame (optional)
  onSpinFinish: () => void;
  data: any;
}
const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 300,
  strokeWidth = 20,
  speed = 15,
  isSpin,
  stopDegree,
  data,
  onSpinFinish
}) => {
  const radius = (size - strokeWidth) / 2;
  const arrowRadius = radius + 30;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const angleStart = -90;
  const angleEnd = angleStart + (percentage / 100) * 360;
  const [animatedDegree, setAnimatedDegree] = useState(0);
  const requestRef = useRef<number>();
  const [finalStopDegree, setFinalStopDegree] = useState(-1);

  function smoothScrollTo(target: number, duration = 2000) {
    const start = 0;
    const end = target;
    const startTime = performance.now();

    // Smooth easing function (easeOutCubic)
    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutCubic(progress); // apply easing here
      const value = Math.round(start + (end - start) * easedProgress);

      setAnimatedDegree(value % 360);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setFinalStopDegree(-1);
        onSpinFinish?.(); // safe call if defined
      }
    }

    requestAnimationFrame(update);
  }

  // Animate progress
  useEffect(() => {
    if (finalStopDegree != -1) {
      return;
    }
    if (isSpin == true) {
      const animate = () => {
        setAnimatedDegree((prev) => {
          const diff = 360 - prev;
          if (Math.abs(diff) < 0.1) {
            if (stopDegree >= 0 && finalStopDegree == -1) {
              setFinalStopDegree(stopDegree + 360);
              smoothScrollTo(stopDegree + 360);
            }
            return 0; // stop condition
          }

          const delta = Math.sign(diff) * Math.min(Math.abs(diff), speed);
          return prev + delta;
        });

        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current!);
    }
  }, [isSpin, stopDegree, finalStopDegree]);

  useEffect(() => {
    if (stopDegree >= 0) {
    }
  }, [stopDegree]);

  const polarToCartesian = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  const start = polarToCartesian(angleStart + 3);
  const end = polarToCartesian(angleEnd - 3);

  return (
    <div className="flex items-center justify-center relative">
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#2d2f38"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={center}
          cy={center}
        />
        {/* Progress Circle */}
        <circle
          stroke="#4ade80"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          r={radius}
          cx={center}
          cy={center}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
        {/* Dots */}
        {percentage >= 5 && (
          <>
            <circle cx={start.x} cy={start.y} r={3} fill="white" />
            <circle cx={end.x} cy={end.y} r={3} fill="white" />
          </>
        )}
        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-white text-lg font-semibold hidden md:block"
        >
          {percentage.toFixed(2)}%
        </text>
      </svg>
      <div className="absolute w-[300px] h-[300px]">
        {data ?
          <div className="relative w-full h-full">
            <p className="block md:hidden text-center font-bold text-lg w-full pt-8">{percentage.toFixed(2)}%</p>
            <img src={`/images/items/${data?.imageUrl}`} className="block md:hidden w-2/5 mx-auto aspect-square relative" />
            <p className="block md:hidden w-full text-center font-bold text-sm text-white truncate mt-[8px] px-14">{data?.name}</p>
            <p className="block md:hidden w-full font-semibold text-center text-[#5a5e62] text-lg">${data?.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="block md:hidden w-full font-bold text-center text-yellow-600 text-xl">x{(92.59 / percentage).toFixed(2)}</p>
            <ForgeSpinSVG
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                top: `${center - arrowRadius * Math.cos((animatedDegree * Math.PI) / 180)}`,
                left: `${center + arrowRadius * Math.sin((animatedDegree * Math.PI) / 180)}`,
                transform: `translate(-50%, -50%) rotate(${animatedDegree}deg)`,
              }}
            />
          </div>
          :
          <div className="block md:hidden relative w-full h-full flex items-center justify-center text-white text-lg font-semibold">
          0.00%
          </div>
        }
      </div>
    </div>
  );
};

export default CircularProgress;
