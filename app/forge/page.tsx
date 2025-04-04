"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import { useSearchParams } from "next/navigation";
import BuyPacksScreen from "@/components/BuyPacksScreen";
import { Suspense } from "react";
import ForgeScreen from "@/components/ForgeScreen";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Forge = () => {
  const [itemsData, setItemsData] = useState({ data: [], totalCount: 0, pageNum: 1, pageCount: 10 });
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    document.title = "DuelPack";
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post('/api/item_list', eot({ start: 0, length: 6, search: 0, order: "price", dir: "desc" }));
        const res = dot(response.data);
        if (res.status == 1) {
          setItemsData({ data: res.data, totalCount: res.totalCount, pageNum: res.start + 1, pageCount: res.length })
        } else {
          openNotification("error", "Error", res.msg, "topRight");
        }
      } catch (err) {
        openNotification("error", "Error", "Network error!", "topRight");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const onGetItemsDataAction = async (search: any, start: any, length = 6) => {
    setIsLoading(true);
    console.log(search, start, length);
    try {
      const result = await axiosInstance.post("api/item_list", eot({ search, start: (start - 1) * length, length, order: "price", dir: "desc" }));
      const res = dot(result.data);

      if (res.status == 1) {
        setItemsData({ data: res.data, totalCount: res.totalCount, pageNum: (res.start / res.length) + 1, pageCount: res.length })
      } else {
        openNotification("error", "Error", res.msg, "topRight");
      }
    } catch (err) {
      openNotification('error', "Error", "error", "topRight");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
      <div className="min-h-screen bg-[#1d2125] text-foreground">
        <ForgeScreen
          itemsData={itemsData}
          onGetItemsDataAction={onGetItemsDataAction}
          isLoading={isLoading}
        />
      </div >
    </>
  );
}

export default Forge;