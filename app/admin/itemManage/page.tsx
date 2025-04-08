"use client";

import UserManage from "@/components/Admin/UserManage";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import Loader from "@/components/Loader";
import axiosInstance from "@/lib/action";
import { useAuth } from "@/lib/authContext";
import { dot, eot } from "@/lib/cryptoUtils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import ItemManage from "@/components/Admin/ItemManage";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const ItemManagePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ data: [], count: 0, pageNum: 1, pageCount: 10 });
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
    document.title = "DuelPack Admin";

    const check_auth = async () => {
      setIsLoading(true);

      try {
        const response = await axiosInstance.get('/api/admin_check_session', {
          withCredentials: true,
        });

        const result = dot(response.data);

        if (result.status == 0) {
          router.push("/");
        } else {
          const userDataResult = await axiosInstance.post('/api/item_list', eot({ start: 0, length: 10, search: "", maxPrice: 0, order: "id", dir: "ASC" }));

          const res = dot(userDataResult.data);

          if (res.status == 1) {
            setData({ data: res.data, count: res.totalCount, pageNum: res.start + 1, pageCount: res.length })
          } else {
            openNotification("error", "Error", res.msg, "topRight");
          }
          setIsLoading(false);
        }
      } catch (err) {
        router.push("/");
      } finally {
      }
    }
    check_auth();
  }, []);

  const onGetTableDataAction = async (search: any, start: any, length: any, orderData: any) => {
    try {
      const result = await axiosInstance.post("api/item_list", eot({ search, start: (start - 1) * length, length, maxPrice: 0, order: orderData.order, dir: orderData.dir }));
      const res = dot(result.data);

      if (res.status == 1) {
        setData({ data: res.data, count: res.totalCount, pageNum: (res.start / res.length) + 1, pageCount: res.length })
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
      <DefaultLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <ItemManage
            data={data}
            onGetTableDataAction={onGetTableDataAction}
          />
        )}
      </DefaultLayout>
    </>
  );
}

export default ItemManagePage;
