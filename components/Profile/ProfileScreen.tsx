import React, { useEffect, useRef, useState } from "react";
import { Divider, notification, Select, Tooltip } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import ProfileMenu from "./profileMenu";
import { Copy, CircleHelp } from "lucide-react";
import ProfileMobileMenu from "./ProfileMobileMenu";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const ProfileScreen = ({ isLoading, onUserInfoSaveAction, saveBtnIsLoading }: any) => {

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
                  <div className="hidden md:block text-white text-3xl font-bold">Profile</div>
                  <div className="block md:hidden bg-[#22272b] rounded-md px-8 py-2 cursor-pointer" onClick={() => setIsMenuOpen(true)}>Profile</div>
                  {isMenuOpen && <ProfileMobileMenu setIsMenuOpen={setIsMenuOpen}/>}
                  <div className="flex items-center gap-2">{authData?.userCode}<Copy className="cursor-pointer" onClick={onClickUserCodeCopy}/></div>
                </div>
                <div className="bg-[#22272b] rounded-md w-full mt-4 p-4 md:p-16">
                  <p className="text-white text-xl font-bold">Personal info</p>
                  <p className="text-[#7a8084] w-full md:w-[70%]">You may be asked for one or more forms of personal identification in the future. The information you provide should match what is shown on your ID. You may not be able to change this in the future. Please review carefully before submitting.</p>
                  <Divider className="border-[#292f34]" />
                  <div className="flex items-center">
                    <p className="w-[200px] flex items-center gap-2">Username
                      <Tooltip title="Your username must be greater than 3 characters and less than 20 characters. It can only contain letters, numbers, and underscores. Your unique username must contain at least one letter.">
                        <CircleHelp size={16} className="cursor-pointer" />
                      </Tooltip>
                    </p>
                    <div className="w-full">
                      <input
                        placeholder="Username"
                        name="userName"
                        className="rounded-md bg-transparent border border-[#34383c] w-full p-2 placeholder-bold"
                        value={userInfo.userName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <p className="w-[200px]">Full Name</p>
                    <div className="w-full">
                      <input
                        placeholder="Full Name"
                        name="fullName"
                        className="rounded-md bg-transparent border border-[#34383c] w-full p-2 placeholder-bold"
                        value={userInfo.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="py-2 rounded-md mt-4 bg-[#34383c] text-white w-[150px] h-[40px]" onClick={onSaveClick}>
                      {saveBtnIsLoading ?
                        <div className="h-full w-full flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        </div>
                        :
                        "Save"
                      }
                    </button>
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

export default ProfileScreen;
