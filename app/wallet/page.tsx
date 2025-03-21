"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import { MoreHorizontal } from "lucide-react";
import PacksScreen from "@/components/PacksScreen";
import WalletScreen from "@/components/WalletScreen";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Wallet = () => {
  const { isAuthenticated, isSidebarCollapsed } = useAuth();
  const [packsData, setPacksData] = useState({ data: [], count: 0, start: 0, length: 5 });
  const [forgeData, setForgeData] = useState({ data: [], count: 0, start: 0, length: 5 });
  const [api, contextHolder] = notification.useNotification();

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
    //document.querySelector('meta[name="description"]')?.setAttribute("content", "Wecazoo is a top crypto casino offering Solana, Bitcoin & more. Play with no KYC in the UK, Canada, Sverige, Netherlands & more. 500% deposit bonus!");
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post('/api/pack_list', eot({ start: 0, length: 0, search: 0, order: "id", dir: "asc" }));
        const res = dot(response.data);
        if (res.status == 1) {
          setPacksData({ data: res.data, count: res.count, start: res.start, length: res.length });
        } else {
          openNotification("error", "Error", res.msg, "topRight");
        }
      } catch (err) {
        openNotification("error", "Error", "Network error!", "topRight");
      }

      try {
        const response = await axiosInstance.post('/api/forge_list', eot({ start: 0, length: 6, search: 0, order: "id", dir: "asc" }));
        const res = dot(response.data);
        if (res.status == 1) {
          setForgeData({ data: res.data, count: res.count, start: res.start, length: res.length });
        } else {
          openNotification("error", "Error", res.msg, "topRight");
        }
      } catch (err) {
        openNotification("error", "Error", "Network error!", "topRight");
      }
    };

    fetchData();
  }, []);

  const onScrollTo = (gameSection: any) => {
    const element = document.getElementById(gameSection); // Replace with your target element's ID
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({
        top: top,
        behavior: "smooth", // Adds smooth scrolling
      });
    }
  }

  return (
    <>
      {contextHolder}
      <div className="min-h-screen bg-[#1d2125] text-foreground">
        <WalletScreen />
      </div >
    </>
  );
}

export default Wallet;