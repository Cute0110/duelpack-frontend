"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import { useRouter, useSearchParams } from "next/navigation";
import ProfileDepositsScreen from "@/components/Profile/Deposits";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const ProfileDepositsPage = () => {
    const { setAuthData, setIsAuthenticated } = useAuth();
    const [api, contextHolder] = notification.useNotification();
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
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
                    const depositResult = await axiosInstance.post('/api/user_deposit_history', eot({ userId: res.userData.id, search: "", start: 0, length: 10, order: "id", dir: "ASC" }));
                    const depositData = dot(depositResult.data);
                    if (depositData.status == 1) {
                        setOriginalData({ data: depositData.data, count: depositData.totalCount, pageNum: depositData.start + 1, pageCount: depositData.length })
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

    const onGetTableDataAction = async (search: any, start: any, length: any, orderData: any) => {
        try {
            const response = await axiosInstance.get('/api/check_session', {
                withCredentials: true,
            });

            const userRes = dot(response.data);
            if (userRes.status == 1) {
                const result = await axiosInstance.post("api/user_deposit_history", eot({ userId: userRes.userData.id, search, start: (start - 1) * length, length, order: orderData.order, dir: orderData.dir }));
                const res = dot(result.data);

                if (res.status == 1) {
                    setOriginalData({ data: res.data, count: res.totalCount, pageNum: (res.start / res.length) + 1, pageCount: res.length })
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

    return (
        <>
            {contextHolder}
            <div className="bg-[#1d2125] text-foreground">
                <ProfileDepositsScreen
                    originalData={originalData}
                    onGetTableDataAction={onGetTableDataAction}
                    isLoading={isLoading}
                />
            </div >
        </>
    );
}

export default ProfileDepositsPage;