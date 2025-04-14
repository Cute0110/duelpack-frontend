import React, { useEffect, useRef, useState } from "react";

import { Divider, notification, Select } from 'antd';

import PacksSVG from "@/public/images/packs.svg";
import SideSliderScreen from "./ui/SideSliderScreen";
import EachFreePack from "./EachFreePack";

const FreePacksScreen = ({ packsData }: any) => {

  const [api, contextHolder] = notification.useNotification();
  const [packs, setPacks] = useState([]);

  const leftDiv: any = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!leftDiv.current) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentRect) {
          setHeight(entry.contentRect.height);
        }
      }
    });

    observer.observe(leftDiv.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setPacks(packsData.data);
  }, [packsData]);

  return (
    <>
      {contextHolder}
      <div className="container mt-[75px] relative">
        <div ref={leftDiv} className="w-full md:w-[calc(100%-250px)]">

          <div className="flex items-center gap-2 pt-6">
            <PacksSVG className="h-6 w-auto text-white" />
            <span className="text-lg font-bold">Free Daily Packs</span>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 mb-12">
            {packs.map((data: any, index) => (
              <EachFreePack key={index} data={data} />
            ))}
            <div className="col-span-2 md:col-span-3 px-0 mt-12 md:px-8 md:mt-0">
              <p className="font-bold text-2xl text-center">Claim Your Free Daily Packs Everyday</p>
              <p className="text-lg mt-4 text-center">DuelPack offers all players who create an account on DuelPack 1 FREE daily pack everyday forever, we also offer another FREE daily pack for players who deposit onto DuelPack. Players who deposit onto DuelPack get 2 FREE packs everyday!</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 right-0 w-[250px]" style={{ height: `${height + 200}px` }}>
          <SideSliderScreen />
        </div>
      </div>
    </>
  );
};

export default FreePacksScreen;
