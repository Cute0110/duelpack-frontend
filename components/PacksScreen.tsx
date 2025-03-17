import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";

import PackItemsModal from "./Modals/PackItemsModal";

import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

import SearchSVG from "@/public/images/search.svg";
import DownArrowSVG from "@/public/images/downArrow.svg";
import ViewSVG from "@/public/images/view.svg";
import EachPack from "./EachPack";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PacksScreen = ({ packsData }: any) => {

  const [api, contextHolder] = notification.useNotification();
  const [packs, setPacks] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [isPackItemsModalOpen, setIsPackItemsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackData, setSelectedPackData] = useState(null);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    setPacks(packsData.data);
  }, [packsData]);

  const onClickViewItem = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/api/items_list', eot({ start: 0, length: 0, search: 0, order: "order", dir: "asc", packID: data.id }));
      const res = dot(response.data);
      if (res.status == 1) {
        setItemsData(res.data);
      } else {
        openNotification("error", "Error", res.msg, "topRight");
        setIsPackItemsModalOpen(false);
      }
    } catch (err) {
      openNotification("error", "Error", "Network error!", "topRight");
      setIsPackItemsModalOpen(false);
    } finally {
      setIsLoading(false);
    }

    setSelectedPackData(data);
    setIsPackItemsModalOpen(true);
  }

  return (
    <>
      {contextHolder}
      {isPackItemsModalOpen && (<PackItemsModal packData={selectedPackData} itemsData={itemsData} setIsPackItemsModalOpen={setIsPackItemsModalOpen} />)}
      <div className="container mt-[75px]">
        <div className="flex justify-between gap-6">
          <div className="w-full md:calc-100-minus-250">
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              <div className="relative col-span-2">
                <input placeholder="Search" className="rounded-md bg-[#34383c] w-full py-2 pl-[40px] placeholder-bold" />
                <SearchSVG className="absolute  h-5 text-white top-[50%] left-[10px] -translate-y-[50%]" />
              </div>
              <div className="flex items-center justify-between p-2 bg-[#34383c] cursor-pointer rounded-md hover:bg-[#5a5e62]">
                <span className="fotn-semibold">Official Packs</span>
                <DownArrowSVG className="h-6 w-auto text-white" />
              </div>
              <div className="flex items-center justify-between p-2 bg-[#34383c] cursor-pointer rounded-md hover:bg-[#5a5e62]">
                <span className="fotn-semibold">Price High to Low</span>
                <DownArrowSVG className="h-6 w-auto text-white" />
              </div>
              <div className="flex items-center col-span-2 md:col-span-1 justify-center rounded-md p-2 bg-[#4299e1] gap-2 hover:bg-[#3182ce] cursor-pointer">
                <img
                  src={"./duelpack-logo.svg"}
                  alt="Wecazoo Logo"
                  className="h-6 w-auto"
                />
                <span>Creat Pack</span>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              {packs.map((data: any, index) => (
                <EachPack key={index} data={data} onClickViewItem={onClickViewItem}/>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-[250px]">Slide Show</div>
        </div>
      </div>
    </>
  );
};

export default PacksScreen;
