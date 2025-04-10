import React, { useEffect, useRef, useState } from "react";
import { Divider, notification, Pagination, Select, Tooltip } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import ProfileMenu from "../profileMenu";
import { Copy, CircleHelp, FilePenLine, X, Check } from "lucide-react";
import ProfileMobileMenu from "../ProfileMobileMenu";
import AffiliateTable from "./AffiliateTable";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const AffiliateScreen = ({ isLoading, onReferralCodeSaveAction, onGetTableDataAction, saveBtnIsLoading, affiliateInfo, originalData }: any) => {

  const pageSizeOptions = ['10', '20', '50'];

  const [paginationVal, setPaginationVal] = useState(1);
  const [pageSizeVal, setPageSizeVal] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReferralCodeEdit, setIsReferralCodeEdit] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [userInfo, setUserInfo] = useState({
    userId: 0,
    referralCode: "",
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
      setUserInfo({ userId: authData.id, referralCode: authData.referralCode });
  }, [authData, isAuthenticated])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidCode = (username: any) => {
    const regex = /^(?=[a-zA-Z0-9_]{1,19}$)(?=.*[a-zA-Z0-9]).*$/;
    return regex.test(username);
  }

  const onSaveClick = () => {
    if (isValidCode(userInfo.referralCode)) {
      if (userInfo.referralCode != authData.referralCode) {
        onReferralCodeSaveAction(userInfo);
      }
      setIsReferralCodeEdit(false);
    } else {
      openNotification("error", "Error", "Username is not valid!", "topRight");
    }
  }

  const onClickAffiliateLinkCopy = () => {
    navigator.clipboard.writeText("https://duelpack.com?ref=" + authData.referralCode);
    openNotification("success", "Success", "Copied successfully!", "topRight");
  }


  const onCreateTableData = (tempData: any, originalData: any, pageNum: any, pageCount: any) => {
    for (let i = 0; i < originalData.length; i++) {
      const temp = {
        key: originalData[i].user.id,
        no: (pageNum - 1) * pageCount + i + 1,
        userName: originalData[i].user.userName,
        totalDeposit: (originalData[i].user.totalDeposit.toFixed(2)),
        totalWager: (originalData[i].user.totalWager.toFixed(2)),
        commission: (originalData[i].user.totalWager / 100).toFixed(2),
      }
      tempData.push(temp);
    }
    return;
  }

  const onSetTableData = (pageNum: any, pageCount: any) => {
    let tempData: any = [];
    onCreateTableData(tempData, originalData.data, pageNum, pageCount);
    setTotalCount(originalData.count);
    setTableData(tempData);
  }

  useEffect(() => {
    onSetTableData(originalData.pageNum, originalData.pageCount);
  }, [originalData])

  const onPagenationChange = (value: any, size: any) => {
    onGetTableDataAction(value, size);
    setPaginationVal(value);
    setPageSizeVal(size);
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
                  {isMenuOpen && <ProfileMobileMenu setIsMenuOpen={setIsMenuOpen} />}
                  <div className="flex items-center gap-2 cursor-pointer bg-[#34383c] py-[4px] px-2 rounded-md" onClick={onClickAffiliateLinkCopy}><Copy size={14} />Affiliate Link</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="flex items-center gap-2 text-sm">
                      Your Referral Code
                      <Tooltip title="Referral code must be less than 20 characters. It can only contain letters, numbers, and underscores and must contain at least one letter or one number.">
                        <CircleHelp size={16} className="cursor-pointer" />
                      </Tooltip>
                    </div>
                    {isReferralCodeEdit ?
                      <div className="flex items-center gap-4 my-2">
                        <div className="w-full">
                          <input
                            placeholder="Username"
                            name="referralCode"
                            className="rounded-md w-full bg-transparent border border-[#34383c] w-full p-2 placeholder-bold"
                            value={userInfo.referralCode}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="p-2 bg-[#48bb78] w-[40px] rounded-md"><Check size={24} className="cursor-pointer" onClick={onSaveClick} /></div>
                        <div className="p-2 bg-[#34383c] w-[40px] rounded-md"><X size={24} className="cursor-pointer" onClick={() => setIsReferralCodeEdit(false)} /></div>
                      </div>
                      :
                      <div className="flex items-center justify-between my-2">
                        <div className="text-3xl font-bold">{authData.referralCode}</div>
                        <div className="p-2 bg-[#34383c] rounded-md"><FilePenLine size={24} className="cursor-pointer" onClick={() => setIsReferralCodeEdit(true)} /></div>
                      </div>
                    }
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Users</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">{affiliateInfo.usersCount}</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Total Deposited</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">${affiliateInfo.totalDeposited.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Total Opened</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">${affiliateInfo.totalOpened.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Total Earnings</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">${affiliateInfo.totalEarnings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                  <div className="bg-[#292f34] rounded-md p-4">
                    <div className="text-sm">Unclaimed Earnings</div>
                    <div className="flex items-center justify-between my-2">
                      <div className="text-3xl font-bold">${affiliateInfo.unClaimedEarnings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-16 mb-2">
                    <Pagination
                      simple
                      current={paginationVal}
                      total={totalCount}
                      onChange={onPagenationChange}
                      showSizeChanger
                      pageSize={pageSizeVal}
                      pageSizeOptions={pageSizeOptions}
                    // showTotal={(total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`} 
                    />
                  </div>
                  <AffiliateTable
                    data={tableData}
                  />

                  <div className="my-4">
                    <Pagination
                      simple
                      current={paginationVal}
                      total={totalCount}
                      onChange={onPagenationChange}
                      showSizeChanger
                      pageSize={pageSizeVal}
                      pageSizeOptions={pageSizeOptions}
                    // showTotal={(total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`} 
                    />
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
