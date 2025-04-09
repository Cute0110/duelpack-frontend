"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import ProfileScreen from "@/components/Profile/ProfileScreen";
import { useRouter } from "next/navigation";
import AffiliateScreen from "@/components/Profile/Affiliate";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const AffiliatePage = () => {
  const { setAuthData, setIsAuthenticated } = useAuth();
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(true);
  const [saveBtnIsLoading, setSaveBtnIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    document.title = "DuelPack";
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/check_session', {
          withCredentials: true,
        });

        const res = dot(response.data);

        if (res.status == 1) {
          setAuthData(res.userData);
          setIsAuthenticated(res.status);
        } else {
          router.push("/");
        }
      } catch (err) {
        router.push("/");
        openNotification("error", "Error", "Network error!", "topRight");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const onUserInfoSaveAction = async (userInfo: any) => {
    try {
      setSaveBtnIsLoading(true);
      const response = await axiosInstance.post('/api/profile_save', eot({ userInfo }));

      const res = dot(response.data);
      if (res.status == 1) {
        const response = await axiosInstance.get('/api/check_session', {
          withCredentials: true,
        });

        const res = dot(response.data);

        if (res.status == 1) {
          setAuthData(res.userData);
          setIsAuthenticated(res.status);
          openNotification("success", "Success", "Saved successfully!", "topRight");
        } else {
          router.push("/");
        }
      }
    } catch (err) {
      router.push("/");
      openNotification("error", "Error", "Network error!", "topRight");
    } finally {
      setSaveBtnIsLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
      <div className="bg-[#1d2125] text-foreground">
        <AffiliateScreen
          onUserInfoSaveAction={onUserInfoSaveAction}
          isLoading={isLoading}
          saveBtnIsLoading={saveBtnIsLoading}
        />
      </div >
    </>
  );
}

export default AffiliatePage;