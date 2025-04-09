import React, { useEffect, useRef, useState } from "react";
import { Divider, notification, Pagination, Select } from 'antd';
import { useAuth } from "@/lib/authContext";
import ProfileMenu from "../profileMenu";
import DepositsTable from "./DepositsTable";
import ProfileMobileMenu from "../ProfileMobileMenu";

const ProfileDepositsScreen = ({ originalData, onGetTableDataAction, isLoading }: any) => {

    const pageSizeOptions = ['10', '20', '50'];

    const { isAuthenticated, authData } = useAuth();
    const [api, contextHolder] = notification.useNotification();
    const [tableData, setTableData] = useState([]);
    const [orderData, setOrderData] = useState({ order: "id", dir: "asc" });
    const [totalCount, setTotalCount] = useState(0);
    const [paginationVal, setPaginationVal] = useState(1);
    const [pageSizeVal, setPageSizeVal] = useState(10);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onCreateTableData = (tempData: any, originalData: any, pageNum: any, pageCount: any) => {
        for (let i = 0; i < originalData.length; i++) {
            const temp = {
                key: originalData[i].id,
                no: (pageNum - 1) * pageCount + i + 1,
                userName: originalData[i].user.userName,
                type: originalData[i].type,
                sentAmount: originalData[i].sentAmount.toFixed(2),
                receivedAmount: originalData[i].receivedAmount.toFixed(2),
                userPrevBalance: originalData[i].userPrevBalance.toFixed(2),
                userAfterBalance: originalData[i].userAfterBalance.toFixed(2),
                status: originalData[i].status,
                createDate: originalData[i].createdAt,
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
        onSetTableData(1, 100);
    }, []);

    useEffect(() => {
        if (orderData.dir == "") {
            onGetTableDataAction("", paginationVal, pageSizeVal, { order: "id", dir: "ASC" });
            setOrderData({ order: "id", dir: "ASC" });
        }
        else {
            onGetTableDataAction("", paginationVal, pageSizeVal, orderData);
        }
    }, [orderData]);

    useEffect(() => {
        onSetTableData(originalData.pageNum, originalData.pageCount);
    }, [originalData]);

    const onPagenationChange = (value: any, size: any) => {
        onGetTableDataAction("", value, size, orderData);
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
                        <div className="flex items-center justify-between relative">
                            <div className="hidden md:block text-white text-3xl font-bold">Deposits</div>

                            <div className="block md:hidden bg-[#22272b] rounded-md px-8 py-2 cursor-pointer" onClick={() => setIsMenuOpen(true)}>Deposits</div>
                            {isMenuOpen && <ProfileMobileMenu setIsMenuOpen={setIsMenuOpen} />}
                        </div>

                        {isLoading ?
                            <div className="h-full w-full flex items-center justify-center py-4">
                                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
                            </div>
                            :
                            <div className="bg-[#22272b] rounded-md w-full mt-4 p-4">
                                <div className="my-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <p>Total Records : <span className="text-[20px]">{totalCount}</span></p>
                                    </div>
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
                                <DepositsTable
                                    data={tableData}
                                    setOrderData={setOrderData}
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
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDepositsScreen;
