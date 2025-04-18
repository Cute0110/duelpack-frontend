"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaArrowUp } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useAuth } from "@/lib/authContext";
import { useState } from "react";
import { notification, Select } from 'antd';
import type { NotificationArgsProps } from 'antd';
import axiosInstance from "@/lib/action";
import { eot, dot } from "@/lib/cryptoUtils";
import Web3 from 'web3';
import GuideBuyCyrpto from "./Modals/GuideBuyCrypto";
import DepositPaymentDialog from "./Modals/DepositPaymentDialog";
import dynamic from "next/dynamic";

const PayPalButton = dynamic(() => import("./PaypalButton"), { ssr: false });

const web3 = new Web3();

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const depositAmountArray = [25, 50, 100, 200, 500, 1000];

const WalletScreen = () => {
    const { isAuthenticated, authData, setAuthData, isSidebarCollapsed } = useAuth();
    const [depositAmount, setDepositAmount] = useState("");
    const [withdrawAmount, setWithdrawAmount] = useState("");
    const [withdrawWalletAddress, setWithdrawWalletAddress] = useState("");
    const [api, contextHolder] = notification.useNotification();
    const [assetType, setAssetType] = useState(0);
    const [isGuideBuyCryptoModalOpen, setIsGuideBuyCryptoModalOpen] = useState(false);
    const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
    const [paymentUrl, setPaymentUrl] = useState("");

    const assetTypeArray = ["ERC 20 - USDT ETHEREUM", "BEP 20 - USDT BNB SMART CHAIN", "TRC 20 - USDT TRON", "SOLANA - USDT SOLANA"];

    const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
        api[type]({
            message: title,
            description: content,
            duration: 2,
            placement,
        });
    };

    const onSelectAsset = (value: any) => {
        setAssetType(value);
    }

    const onAmountMinClick = () => {
        setWithdrawAmount("5.00");
    }

    const onAmountMaxClick = () => {
        setWithdrawAmount("" + authData.balance);
    }

    const handleDepositAmountInputChange = (e: any) => {
        const rawValue = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        setDepositAmount(rawValue); // Add dollar symbol
    }

    const handleWithdrawAmountInputChange = (e: any) => {
        setWithdrawAmount(e.target.value);
    }

    const handleWalletAddressInputChange = (e: any) => {
        setWithdrawWalletAddress(e.target.value);
    }

    const openDepositSite = () => {
        window.open("https://changelly.com/buy-crypto", "_blank");
    }

    const onDepositClick = () => {
        if (!isNaN(Number(depositAmount)) && depositAmount.trim() !== "") {
            if (Number(depositAmount) < 5) {
                openNotification("warning", "Warning", "Minimum value is 5$!", "topRight");
            } else {
                onCreateInvoice(Number(depositAmount));
            }
        } else {
            openNotification("warning", "Warning", "Input correct value!", "topRight");
        }
    }

    const onModalClose = () => {
        setIsGuideBuyCryptoModalOpen(false);
    }

    const onWithdrawClick = () => {
        if (!isNaN(Number(withdrawAmount)) && withdrawAmount.trim() !== "") {
            if (Number(withdrawAmount) < 5) {
                openNotification("warning", "Warning", "Minimum value is 5$!", "topRight");
            } else if (Number(withdrawAmount) > authData.balance) {
                openNotification("warning", "Warning", "You have not enough balance!", "topRight");
            } else {
                if (withdrawWalletAddress == "") {
                    openNotification("warning", "Warning", "Input correct wallet address!", "topRight");
                } else {
                    withdrawAction(Number(withdrawAmount), withdrawWalletAddress);
                }
            }
        } else {
            openNotification("warning", "Warning", "Input correct amount value!", "topRight");
        }
    }

    const withdrawAction = async (amount: any, address: any) => {
        try {
            const response = await axiosInstance.post('/api/withdraw', eot({ amount: amount.toFixed(5), address: address, asset: assetTypeArray[assetType] }));
            const res = dot(response.data);
            if (res.status == 1) {
                setAuthData({ ...authData, balance: res.balance });
                openNotification("success", "Withdraw Success!", "Crypto will be arrived in your wallet soon!", "topRight");
            } else {
                openNotification("error", "Error", res.msg, "topRight");
            }
        } catch (error) {
            openNotification("error", "Error", "Token expired or network error!", "topRight");
        }
    }

    const onCreateInvoice = async (amount: any) => {
        try {
            const response = await axiosInstance.post('/api/createInvoice', eot({ price: amount.toFixed(5), currency: "USD" }));
            const res = dot(response.data);
            if (res.status == 1) {
                setPaymentUrl(res.url);
                setIsPaymentDialogOpen(true);
            } else {
                openNotification("error", "Error", res.msg, "topRight");
            }
        } catch (error) {
            openNotification("error", "Error", "Token expired or network error", "topRight");
        }
    }

    const handleClosePaymentDialog = () => {
        setIsPaymentDialogOpen(false);
        setPaymentUrl("");
    };

    return (
        <>
            {contextHolder}
            {isAuthenticated ?
                <div className={`container flex flex-col py-8 pt-[100px]`}>
                    <DepositPaymentDialog
                        isOpen={isPaymentDialogOpen}
                        onClose={handleClosePaymentDialog}
                        paymentUrl={paymentUrl}
                    />
                    <GuideBuyCyrpto isModalOpen={isGuideBuyCryptoModalOpen} onModalClose={onModalClose} modalTitle={"Buy Crypto"} />
                    <h1 className="text-2xl font-bold mb-4 px-3">Wallet</h1>
                    <Tabs
                        defaultValue="deposit"
                        className="min-w-fit flex flex-col items-start justify-start gap-2"
                    >
                        <TabsList className="flex-col md:flex-row gap-2.5 md:gap-4 md:mr-10 items-start">
                            <TabsTrigger value="deposit">
                                <FaArrowUp className="mr-2 text-lg md:text-xl" />
                                <span className="text-sm md:text-base">Deposit</span>
                            </TabsTrigger>
                            <TabsTrigger value="withdraw">
                                <BiMoneyWithdraw className="mr-2 text-lg md:text-xl" />
                                <span className="text-sm md:text-base">Withdraw</span>
                            </TabsTrigger>
                        </TabsList>
                        {/* tab content */}
                        <div className="w-full lg:max-w-4xl xl:max-w-6xl">
                            <TabsContent value="deposit">
                                <div className="bg-[#161a1d] flex flex-col p-5 md:p-6 gap-8 rounded-md max-w-[500px]">
                                    <h2 className="text-xl font-semibold">Deposit</h2>
                                    <div className="relative w-full max-w-[500px]">
                                        <span className="absolute left-[10px] top-[50%] -translate-y-1/2 text-[20px]">$</span>
                                        <input
                                            type="depositAmount"
                                            id="depositAmount"
                                            name="depositAmount"
                                            placeholder="Input deposit amount"
                                            value={depositAmount}
                                            onChange={handleDepositAmountInputChange}
                                            className="w-full text-[15px] px-6 py-2 mx-1 border rounded-xl bg-[#34383c] flex items-center"
                                            required
                                        />
                                    </div>
                                    <div className="block w-full">
                                        <div className="flex items-center w-full gap-4 my-4">
                                            <div className="border-t-[1px] border-gray-600 flex-1"></div>
                                            <span className="text-gray-600">Deposit with crypto</span>
                                            <div className="border-t-[1px] border-gray-600 flex-1"></div>
                                        </div>
                                        <div className="max-w-[500px] w-full mb-[6px]">
                                            <button
                                                className="w-full rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-6 h-[50px]"
                                                onClick={() => onDepositClick()}
                                            >
                                                Pay with <span className="text-white text-xl">Crypto</span>
                                            </button>
                                        </div>
                                        <div className="flex items-center w-full gap-4 my-4">
                                            <div className="border-t-[1px] border-gray-600 flex-1"></div>
                                            <span className="text-gray-600">Deposit with paypal</span>
                                            <div className="border-t-[1px] border-gray-600 flex-1"></div>
                                        </div>
                                        <div className="max-w-[500px] w-full">
                                            <PayPalButton depositAmount={depositAmount} />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="withdraw">
                                <div className="bg-[#161a1d] flex flex-col p-5 md:p-6 gap-4 rounded-md">
                                    <h2 className="text-xl font-semibold">Withdraw</h2>
                                    <div>
                                        <h2 className="text-muted font-lg">Your Balance</h2>
                                        <p className="font-semibold text-lg">${authData.balance.toFixed(5)}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-muted font-lg">Withdraw Amount In USDT</h2>
                                        <div className="flex flex-col my-4 gap-3">
                                            <input
                                                type="withdrawAmount"
                                                id="withdrawAmount"
                                                name="withdrawAmount"
                                                placeholder=""
                                                value={withdrawAmount}
                                                onChange={handleWithdrawAmountInputChange}
                                                className="w-[100%] lg:w-[50%] p-2 border rounded-md bg-[#34383c]"
                                                required
                                            />
                                            <div className="flex">
                                                <button onClick={onAmountMinClick} type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-4 h-10 w-28 mx-2">
                                                    Min
                                                </button>
                                                <button onClick={onAmountMaxClick} type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-4 h-10 w-28 mx-2">
                                                    Max
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-muted font-lg asset-panel">Choose Network</h2>
                                        <div className="flex flex-col my-4 gap-3">
                                            <Select
                                                placeholder="Select asset"
                                                value={assetType}
                                                style={{ backgroundColor: "#2a253a", color: "white", height: "50px" }}
                                                className="w-full lg:w-[50%]"
                                                options={assetTypeArray.map((item: any, index: any) => ({ label: item, value: index }))}
                                                onSelect={onSelectAsset}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-muted font-lg">Your Wallet Address</h2>
                                        <div className="flex flex-col my-4 gap-3">
                                            <input
                                                type="withdrawWalletAddress"
                                                id="withdrawWalletAddress"
                                                name="withdrawWalletAddress"
                                                placeholder=""
                                                value={withdrawWalletAddress}
                                                onChange={handleWalletAddressInputChange}
                                                className="w-[100%] lg:w-[50%] p-2 border rounded-md bg-[#34383c]"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-4 h-10 w-28 mx-2"
                                            onClick={onWithdrawClick}
                                        >
                                            Withdraw
                                        </button>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div> :
                <div></div>}
        </>
    );
};

export default WalletScreen;
