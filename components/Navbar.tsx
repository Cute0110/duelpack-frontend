"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {
  Menu,
  LogOutIcon,
  WalletIcon,
  ShoppingCart,
  Check
} from "lucide-react";
import AuthModal from "./Modals/AuthModal";
import { useAuth } from "@/lib/authContext";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

import Packs from "@/public/images/packs.svg";
import Battles from "@/public/images/battles.svg";
import Forge from "@/public/images/forge.svg";
import Events from "@/public/images/events.svg";
import Rewards from "@/public/images/rewards.svg";
import CloseSVG from "@/public/images/close.svg";
import ClickOutside from "./ClickOutside";
import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";
import CartModal from "./Modals/CartModal";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const NavbarWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
  );
};

const Navbar = ({ isNavLinksHidden }: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthModalType, setIsAuthModalType] = useState(true);
  const { isAuthenticated, setIsAuthenticated, authData, setAuthData } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState({ data: [], count: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isPromoCodeBtnLoading, setIsPromoCodeBtnLoading] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const searchParams = useSearchParams();
  const referCode = searchParams.get("ref"); // Get the 'id' from the URL

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const userRes = await axiosInstance.get('/api/check_session', {
          withCredentials: true,
        });
        const userInfo = dot(userRes.data);

        if (userInfo.status == 1) {
          const response = await axiosInstance.post('/api/cart_list', eot({ userId: userInfo.userData.id }));
          const res = dot(response.data);
          if (res.status == 1) {
            setCartData({ data: res.data, count: res.count });
          } else {
            openNotification("error", "Error", res.msg, "topRight");
          }
        }
      } catch (err: any) {
        openNotification("error", "Error", err.msg, "topRight");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isValidCode = (promoCode: any) => {
    const regex = /^(?=[a-zA-Z0-9_]{1,19}$)(?=.*[a-zA-Z0-9]).*$/;
    return regex.test(promoCode);
  }

  const onSendPromoCode = async () => {
    if (isValidCode(promoCode)) {
      try {
        setIsPromoCodeBtnLoading(true);
        const response = await axiosInstance.post("/api/send_promoCode", eot({ userId: authData.id, referralCode: promoCode }));

        const result = dot(response.data);
        if (result.status) {
          openNotification("success", "Success", "Sent code successfully!", "topRight");
        } else {
          openNotification("error", "Error", result.msg, "topRight");
        }
      } catch (err: any) {
        openNotification("error", "Error", err.msg, "topRight");
      } finally {
        setIsPromoCodeBtnLoading(false);
      }
    } else {
      openNotification("error", "Error", "Invalid code!", "topRight");
    }
  }

  const onPromoCodeChange = (e: any) => {
    setPromoCode(e.target.value);
  }

  useEffect(() => {
    const fetchCartData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.post('/api/cart_list', eot({ userId: authData.id }));
        const res = dot(response.data);
        if (res.status == 1) {
          setCartData({ data: res.data, count: res.count });
        } else {
          openNotification("error", "Error", res.msg, "topRight");
        }
      } catch (err) {
        openNotification("error", "Error", "Network error!", "topRight");
      } finally {
        setIsLoading(false);
      }
    }

    if (isAuthenticated) fetchCartData();
  }, [authData, isAuthenticated])

  const onLogOutClick = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
    localStorage.removeItem('authToken');
    router.push("/");
  };

  const onClickCart = async () => {
    setIsCartModalOpen(true);
  }

  const onSellClick = async (ids: any, price: any) => {
    if (ids.length == 0) {
      openNotification("warning", "Warning", "You did not select any items!", "topRight");
    } else {
      setIsLoading(true);
      try {
        const response = await axiosInstance.post('/api/sell_cart_items', eot({ ids, price, userId: authData.id }));
        const res = dot(response.data);
        if (res.status == 1) {
          setCartData({ data: res.data, count: res.count });
          openNotification("success", "Success", "Sold items successfully!", "topRight");

          const userRes = await axiosInstance.get('/api/check_session', {
            withCredentials: true,
          });
          const userInfo = dot(userRes.data);
          if (userInfo.status == 1) {
            setAuthData(userInfo.userData);
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
  }

  const onDepositClick = async () => {
    router.push("/wallet");
  }

  return (
    <>

      {contextHolder}
      <AuthModal
        isModalOpen={isAuthModalOpen}
        onModalClose={() => setIsAuthModalOpen(false)}
        modalType={isAuthModalType}
        referCode={referCode}
      />
      {isCartModalOpen &&
        <CartModal
          isLoading={isLoading}
          cartData={cartData}
          setIsCartModalOpen={setIsCartModalOpen}
          onSellClick={onSellClick}
        />
      }
      <div className="flex">
        <div className="flex-1">
          <header className="fixed top-0 left-0 right-0 z-[999] bg-[#1d2125] h-[75px] border-b-[1px] border-gray-600">
            <div className={`mx-auto h-[75px] flex items-center justify-between container relative`}>
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <img src="/duelpack-logo.svg" alt="Wecazoo Logo" className="h-9 lg:h-11 w-auto" />
                  <h1 className="text-xl text-white font-bold ml-2">DuelPack</h1>
                </Link>

                <nav className="hidden lg:flex relative items-center h-[4rem] ml-6 gap-5 overflow-clip">
                  <Link
                    href="/packs"
                    className={
                      `flex justify-center items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    <Packs className="h-6 w-auto text-gray-300" />
                    <p className="text-base text-white font-semibold">Packs</p>
                  </Link>

                  <Link
                    href="/battles"
                    className={
                      `flex justify-center items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    <div className="mb-[2px] size-5">
                      <Battles className="h-6 w-auto text-gray-300" />
                    </div>
                    <p className="text-base text-white font-semibold">Battles</p>
                  </Link>

                  <Link
                    href="/forge"
                    className={
                      `flex justify-center items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    <Forge className="h-6 w-auto text-gray-300" />
                    <p className="text-base text-white font-semibold">Forge</p>
                  </Link>

                  <Link
                    href="/events"
                    className={
                      `flex justify-center items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    <Events className="h-6 w-auto text-gray-300" />
                    <p className="text-base text-white font-semibold">Events</p>
                  </Link>

                  <Link
                    href="/rewards"
                    className={
                      `flex justify-center items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    <Rewards className="h-6 w-auto text-gray-300" />
                    <p className="text-base text-white font-semibold">Rewards</p>
                  </Link>

                  <div className="absolute bottom-0 bg-white h-0.5 transition-transform duration-300" />
                </nav>
              </div>
              <div className="flex items-center gap-4">
                {/* Balance display for mobile */}
                {isAuthenticated && (
                  <div className="flex items-center gap-3">
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-4 h-10"
                      onClick={onClickCart}
                    >
                      {isMobile ? <ShoppingCart /> : "Cart"}
                      {cartData.count != 0 ? <span className="w-5 aspect-square bg-white rounded-full text-sm text-black">{cartData.count}</span> : ""}
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 px-4 h-10"
                      onClick={() => onDepositClick()}
                    >
                      {authData?.balance > 0 ? '$' + authData?.balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "Deposit"}
                    </button>
                    {!isMobile &&
                      <div>
                        <img src={authData.avatarURL} className="rounded-full w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                      </div>
                    }
                  </div>
                )}

                {/* Auth buttons in top bar for mobile */}
                {!isAuthenticated && (
                  <div className="flex items-center gap-3">
                    <button
                      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-6 h-10 ${isMobile ? "w-20" : "w-28"}`}
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsAuthModalType(true);
                      }}
                    >
                      Sign In
                    </button>
                    <button
                      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 px-6 h-10 ${isMobile ? "w-20" : "w-28"}`}
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsAuthModalType(false);
                      }}
                    >
                      Register
                    </button>
                  </div>
                )}

                {isMobile && (
                  !isOpen ?
                    <button onClick={() => setIsOpen(!isOpen)}>
                      <Menu className="w-6 h-6 mb-1" />
                    </button> :
                    <button onClick={() => setIsOpen(!isOpen)}>
                      <CloseSVG className="h-6 w-auto text-gray-300" />
                    </button>
                )}
              </div>

              {isOpen && (
                <div className="fixed w-screen h-screen top-0 left-0">
                  <div className="relative w-full h-full container">
                    <div className="fixed top-0 left-0 w-screen h-screen" onClick={() => { setIsOpen(false) }}></div>
                    {!isMobile && isAuthenticated && (
                      <div className={`absolute right-4 top-[80px] bg-[#23272b] z-50 w-[250px] rounded-xl shadow`} >
                        <Link className="flex items-center p-4 gap-4 cursor-pointer" onClick={() => setIsOpen(false)} href="/profile">
                          <img src={authData.avatarURL} className="rounded-full h-12" />
                          <div>
                            <div>{authData.userName}</div>
                            <div className="text-gray-600">View profile</div>
                          </div>
                        </Link>
                        <div className="w-full h-[1px] border-t-[1px] border-gray-600 mt-2"></div>
                        <div className="flex items-center justify-start mt-2 p-4 gap-2 cursor-pointer" onClick={onLogOutClick}>
                          <LogOutIcon className="w-6 h-6" />
                          <div>Sign out</div>
                        </div>
                        <div className="w-full h-[1px] border-t-[1px] border-gray-600 mt-2"></div>
                        <div className="relative p-4">
                          <input
                            placeholder="Promotion code"
                            className="w-full text-[15px] px-4 py-2 mx-1 rounded bg-[#1d2125] flex items-center"
                            value={promoCode}
                            onChange={onPromoCodeChange}
                            required
                          />
                          <button className="absolute top-5 right-4 bg-[#4299e1] p-2 rounded-md" type="button" onClick={onSendPromoCode}>
                            {isPromoCodeBtnLoading ?
                              <div className="h-full w-full flex items-center justify-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                              </div>
                              :
                              <Check size={14} />
                            }
                          </button>
                        </div>
                      </div>
                    )}

                    {isMobile && (
                      <div className={`absolute right-4 top-[80px] bg-[#23272b] z-50 w-[250px] rounded-xl shadow`} >
                        {isAuthenticated ?
                          <Link className="flex items-center p-4 gap-4 cursor-pointer" onClick={() => setIsOpen(false)} href="/profile">
                            <img src={authData.avatarURL} className="rounded-full h-12" />
                            <div>
                              <div>{authData.userName}</div>
                              <div className="text-gray-600">View profile</div>
                            </div>
                          </Link> : <></>}
                        <nav className="space-y-5 p-4">
                          <Link
                            href="/packs"
                            className={
                              `flex items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            <Packs className="h-6 w-auto text-gray-300" />
                            <p className="text-base text-white font-semibold">Packs</p>
                          </Link>

                          <Link
                            href="/battles"
                            className={
                              `flex items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                              }`
                            }
                          >
                            <Battles className="h-6 w-auto text-gray-300" />
                            <p className="text-base text-white font-semibold">Battles</p>
                          </Link>

                          <Link
                            href="/forge"
                            className={
                              `flex items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                              }`
                            }
                          >
                            <Forge className="h-6 w-auto text-gray-300" />
                            <p className="text-base text-white font-semibold">Forge</p>
                          </Link>

                          <Link
                            href="/events"
                            className={
                              `flex items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                              }`
                            }
                          >
                            <Events className="h-6 w-auto text-gray-300" />
                            <p className="text-base text-white font-semibold">Events</p>
                          </Link>

                          <Link
                            href="/rewards"
                            className={
                              `flex items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                              }`
                            }
                          >
                            <Rewards className="h-6 w-auto text-gray-300" />
                            <p className="text-base text-white font-semibold">Rewards</p>
                          </Link>

                          <div className="absolute bottom-0 bg-white h-0.5 transition-transform duration-300" />
                        </nav>

                        {isAuthenticated && (
                          <div>
                            <div className="w-full h-[1px] border-t-[1px] border-gray-600 mt-2"></div>
                            <div className="flex items-center justify-start mt-2 p-4 gap-2 cursor-pointer" onClick={onLogOutClick}>
                              <LogOutIcon className="w-6 h-6" />
                              <div>Sign out</div>
                            </div>
                          </div>
                        )}
                        <div className="w-full h-[1px] border-t-[1px] border-gray-600 mt-2"></div>
                        <div className="relative p-4">
                          <input
                            placeholder="Promotion code"
                            className="w-full text-[15px] px-4 py-2 mx-1 rounded bg-[#1d2125] flex items-center"
                            value={promoCode}
                            onChange={onPromoCodeChange}
                            required
                          />
                          <button className="absolute top-5 right-4 bg-[#4299e1] p-2 rounded-md" onClick={onSendPromoCode}>
                            <Check size={14} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </header>
        </div>
      </div >
    </>
  );
};

export default NavbarWrapper;