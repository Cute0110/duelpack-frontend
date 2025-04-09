import React, { useEffect, useRef, useState } from "react";
import { Divider, notification, Select, Tooltip } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import ProfileMenu from "../profileMenu";
import { Copy, CircleHelp, FilePenLine } from "lucide-react";
import ProfileMobileMenu from "../ProfileMobileMenu";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const AffiliateScreen = ({ isLoading, onUserInfoSaveAction, saveBtnIsLoading }: any) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: 0,
    userName: "",
    fullName: "",
  });

  const { isAuthenticated, authData } = useAuth();
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
    if (isAuthenticated)
      setUserInfo({ userId: authData.id, userName: authData.userName, fullName: authData.fullName });
  }, [authData, isAuthenticated])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const isValidUsername = (username: any) => {
    const regex = /^(?=[a-zA-Z0-9_]{4,19}$)(?=.*[a-zA-Z])/;
    return regex.test(username);
  }

  const onSaveClick = () => {
    if (isValidUsername(userInfo.userName)) {
      onUserInfoSaveAction(userInfo);
    } else {
      openNotification("error", "Error", "Username is not valid!", "topRight");
    }
  }

  const onClickUserCodeCopy = () => {
    navigator.clipboard.writeText(authData?.userCode);
    openNotification("success", "Success", "Copied successfully!", "topRight");
  }

  return (
    <>
      {contextHolder}
      <div className="container mt-[75px] py-4 md:py-16 relative">
        <div className="flex gap-8">
          <div className="hidden md:block">
            <ProfileMenu />
          </div>
          <div className="w-full">

            {isLoading ?
              <div className="h-full w-full flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
              </div>
              :
              <>
                <div className="flex items-center justify-between relative">
                  <div className="hidden md:block text-white text-3xl font-bold">Affiliate</div>
                  <div className="block md:hidden bg-[#22272b] rounded-md px-8 py-2 cursor-pointer" onClick={() => setIsMenuOpen(true)}>Affiliate</div>
                  {isMenuOpen && <ProfileMobileMenu setIsMenuOpen={setIsMenuOpen}/>}
                  <div className="flex items-center gap-2 cursor-pointer bg-[#34383c] py-[4px] px-2 rounded-md" onClick={onClickUserCodeCopy}><Copy size={14}/>Affiliate Link</div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Your Referral Code</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">1233123123</div>
                      <div className="p-2 bg-[#34383c] rounded-md"><FilePenLine size={24} className="cursor-pointer"/></div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Users</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">1233123123</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Total Deposited</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">1233123123</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Total Opened</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">1233123123</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Total Earnings</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">1233123123</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Unclaimed Earnings</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">1233123123</div>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateScreen;
