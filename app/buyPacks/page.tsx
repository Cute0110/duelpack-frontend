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
  const [packsInfo, setPacksInfo] = useState({ data: [], count: 0});
  const [packItemConnectInfo, setPackItemConnectInfo] = useState({ data: [], count: 0 });
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
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
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post('/api/pack_list', eot({ start: 0, length: 0, search: 0, order: "id", dir: "asc" }));
        const res = dot(response.data);
        if (res.status == 1) {
          setPacksInfo({ data: res.data, count: res.count });

          let packItemConnectInfoCount = res.packItemConnectInfoCount;
          const batchSize = 100;
          const totalRequests = Math.ceil(packItemConnectInfoCount / batchSize); // Number of batches

          try {
            // Create an array of promises for batch requests
            const requests = Array.from({ length: totalRequests }, (_, i) =>
              axiosInstance.post('/api/pack_items_list_all', eot({
                start: i * batchSize,
                length: batchSize,
                search: 0,
                order: "id",
                dir: "asc",
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
              } else {
                openNotification("error", "Error", res1.msg, "topRight");
              }
            });

            // Update state
            setPackItemConnectInfo({ data: temp, count: packItemConnectInfoCount });
          } catch {
            openNotification("error", "Error", "Network error!", "topRight");
          }
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

  const onUserBalanceChange = async (userId: any, priceAmount: any) => {
    try {
      const response = await axiosInstance.post('/api/user_balance_change', eot({ id: userId, priceAmount }));
      const res = dot(response.data);
      if (res.status == 1) {
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

  return (
    <>
      {contextHolder}
      <div className="min-h-screen bg-[#1d2125] text-foreground">
        {isLoading ?
          <div className="h-full w-full flex items-center justify-center mt-[75px] py-4">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
          </div>
          :
          <BuyPacksScreen
            packsInfo={packsInfo}
            packItemConnectInfo={packItemConnectInfo}
            packId={packId}
            onBuyItemAction={onBuyItemAction}
            isMobile={isMobile}
            onUserBalanceChange={onUserBalanceChange}
          />}
      </div >
    </>
  );
}

export default BuyPacksWrapper;