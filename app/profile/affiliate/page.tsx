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
  const [affiliateInfo, setAffiliateInfo] = useState({ usersCount: 0, totalDeposited: 0, totalOpened: 0, totalEarnings: 0, unClaimedEarnings: 0 });
  const [originalData, setOriginalData] = useState({ data: [], count: 0, pageNum: 1, pageCount: 10 });
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
          const affiliateRes = await axiosInstance.post('/api/get_user_affiliate', eot({ userId: res.userData.id, start: 0, length: 10 }));

          const affiliateData = dot(affiliateRes.data);

          if (affiliateData.status == 1) {
            setAffiliateInfo({
              usersCount: affiliateData.totalUsersCount,
              totalDeposited: affiliateData.totalDepositSum,
              totalOpened: affiliateData.totalWagerSum,
              totalEarnings: res.userData.totalEarning,
              unClaimedEarnings: res.userData.unClaimEarning
            });
            setOriginalData({ data: affiliateData.tableData, count: affiliateData.totalUsersCount, pageNum: affiliateData.start + 1, pageCount: affiliateData.length })
          } else {
            openNotification("error", "Error", "Network error!", "topRight");
          }
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

  const onGetTableDataAction = async (start: any, length: any) => {
    try {
      const response = await axiosInstance.get('/api/check_session', {
        withCredentials: true,
      });

      const userRes = dot(response.data);
      if (userRes.status == 1) {
        const affiliateRes = await axiosInstance.post("api/get_user_affiliate", eot({ userId: userRes.userData.id, start: (start - 1) * length, length }));

        const affiliateData = dot(affiliateRes.data);

        if (affiliateData.status == 1) {
          setAffiliateInfo({
            usersCount: affiliateData.totalUsersCount,
            totalDeposited: affiliateData.totalDepositSum,
            totalOpened: affiliateData.totalWagerSum,
            totalEarnings: userRes.userData.totalEarning,
            unClaimedEarnings: userRes.userData.unClaimEarning
          });
          setOriginalData({ data: affiliateData.tableData, count: affiliateData.totalUsersCount, pageNum: affiliateData.start + 1, pageCount: affiliateData.length })
        } else {
          openNotification("error", "Error", "Network error!", "topRight");
        }
      } else {
        router.push("/");
      }
    } catch (err) {
      router.push("/");
      openNotification('error', "Error", "error", "topRight");
    } finally {
    }
  }


  const onReferralCodeSaveAction = async (userInfo: any) => {
    try {
      setSaveBtnIsLoading(true);
      const response = await axiosInstance.post('/api/referralCode_save', eot({ userInfo }));

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
      } else {
        openNotification("error", "Error", res.msg, "topRight");
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
          onReferralCodeSaveAction={onReferralCodeSaveAction}
          onGetTableDataAction={onGetTableDataAction}
          affiliateInfo={affiliateInfo}
          originalData={originalData}
          isLoading={isLoading}
          saveBtnIsLoading={saveBtnIsLoading}
        />
      </div >
    </>
  );
}

export default AffiliatePage;