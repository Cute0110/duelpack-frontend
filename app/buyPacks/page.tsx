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

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';


const BuyPacksWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyPacks />
    </Suspense>
  );
};

const BuyPacks = () => {
  const { isAuthenticated, isSidebarCollapsed, setAuthData, setIsAuthenticated } = useAuth();
  const [packsData, setPacksData] = useState({ data: [], count: 0, start: 0, length: 5 });
  const [itemsData, setItemsData] = useState({ data: [], count: 0 });
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const packId = searchParams.get("packId"); // Get the 'id' from the URL

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

          let totalCount = 0;
          try {
            // Create an array of promises
            const requests = res.data.map((pack: any) =>
              axiosInstance.post('/api/pack_items_list', eot({
                start: 0,
                length: 0,
                search: 0,
                order: "rarity",
                dir: "asc",
                packID: pack.id,
              }))
            );

            // Wait for all requests to resolve
            const responses = await Promise.all(requests);

            // Process responses
            let temp: any = [];
            responses.forEach((response) => {
              const res1 = dot(response.data);
              if (res1.status === 1) {
                temp = temp.concat(res1.data); // Add items to the array
                totalCount += res1.count;
              } else {
                openNotification("error", "Error", res1.msg, "topRight");
              }
            });

            // Update state
            setItemsData({ data: temp, count: totalCount });
          } catch {
            openNotification("error", "Error", "Network error!", "topRight");
          }
        } else {
          openNotification("error", "Error", res.msg, "topRight");
        }
      } catch (err) {
        openNotification("error", "Error", "Network error!", "topRight");
      }
    }

    fetchData();
  }, []);

  const onBuyItemAction = async (itemIds: any, userId: any, payAmount: any) => {
    try {
      const response = await axiosInstance.post('/api/buy_items', eot({ itemIds, userId, payAmount }));
      const res = dot(response.data);
      if (res.status == 1) {
        openNotification("success", "Success", "Items added to cart!", "topRight");
        try {
          const response = await axiosInstance.get('/api/check_session', {
            withCredentials: true,
          });

          const res = dot(response.data);

          if (res.status == 1) {
            setAuthData(res.userData);
            setIsAuthenticated(res.status);
          } else {
            console.log(res.msg);
          }
        } catch (error) {
          openNotification("error", "Error", "error", "topRight");
        }
      } else {
        openNotification("error", "Error", res.msg, "topRight");
      }
    } catch (err) {
      openNotification("error", "Error", "Network error!", "topRight");
    }
  }

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
        <BuyPacksScreen
          packsData={packsData}
          itemsData={itemsData}
          packId={packId}
          onBuyItemAction={onBuyItemAction}
        />
      </div >
    </>
  );
}

export default BuyPacksWrapper;