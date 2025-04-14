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
            <span className="text-lg font-bold">Free Packs</span>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 mb-12">
            {packs.map((data: any, index) => (
              <EachFreePack key={index} data={data} />
            ))}
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
