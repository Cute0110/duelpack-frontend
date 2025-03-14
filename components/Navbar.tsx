"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {
  Menu,
  LogOutIcon,
  WalletIcon,
} from "lucide-react";
import AuthModal from "./Modals/AuthModal";
import { useAuth } from "@/lib/authContext";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

import Packs from "@/public/images/packs.svg";
import Battles from "@/public/images/battles.svg";
import Forge from "@/public/images/forge.svg";
import Events from "@/public/images/events.svg";
import Rewards from "@/public/images/rewards.svg";
import CheckSVG from "@/public/images/check.svg";
import CloseSVG from "@/public/images/close.svg";
import ClickOutside from "./ClickOutside";

const Navbar = ({ isNavLinksHidden }: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthModalType, setIsAuthModalType] = useState(true);
  const { isAuthenticated, setIsAuthenticated, authData, isSidebarCollapsed, setIsSidebarCollapsed, setIsExpanded } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onLogOutClick = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
    localStorage.removeItem('authToken');
    router.push("/");
  };

  return (
    <>
      <AuthModal
        isModalOpen={isAuthModalOpen}
        onModalClose={() => setIsAuthModalOpen(false)}
        modalType={isAuthModalType}
      />
      <div className="flex">
        <div className="flex-1">
          <header className="fixed top-0 left-0 right-0 z-40 bg-[#1d2125] h-[75px] border-b-[1px] border-gray-600">
            <div className={`mx-auto h-[75px] flex items-center justify-between container relative`}>
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <img src="./duelpack-logo.svg" alt="Wecazoo Logo" className="h-9 lg:h-11 w-auto" />
                  <h1 className="text-xl text-white font-bold ml-4">DuelPack</h1>
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
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-6 h-10 w-28"
                      onClick={() => {
                      }}
                    >
                      Cart
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 px-6 h-10 w-28"
                      onClick={() => {
                      }}
                    >
                      Deposit
                    </button>
                    <div>
                      <img src={authData.avatarURL} className="rounded-full w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                    </div>
                  </div>
                )}

                {/* Auth buttons in top bar for mobile */}
                {!isAuthenticated && (
                  <div className="flex items-center gap-3">
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 px-6 h-10 w-28"
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsAuthModalType(true);
                      }}
                    >
                      Login
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 px-6 h-10 w-28"
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsAuthModalType(false);
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                )}

                {isMobile && !isAuthenticated && (
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
                        <div className="flex items-center p-4 gap-4 cursor-pointer">
                          <img src={authData.avatarURL} className="rounded-full h-12" />
                          <div>
                            <div>{authData.userName}</div>
                            <div className="text-gray-600">View profile</div>
                          </div>
                        </div>
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
                            required
                          />
                          <button className="absolute top-5 right-4 bg-[#4299e1] p-2 rounded-md">
                            <CheckSVG className="h-6 w-auto text-gray-300" />
                          </button>
                        </div>
                      </div>
                    )}

                    {isMobile && (
                      <div className={`absolute right-4 top-[80px] bg-[#23272b] z-50 w-[250px] rounded-xl shadow`} >
                        {isAuthenticated ?
                          <div className="flex items-center p-4 gap-4 cursor-pointer">
                            <img src={authData.avatarURL} className="rounded-full h-12" />
                            <div>
                              <div>{authData.userName}</div>
                              <div className="text-gray-600">View profile</div>
                            </div>
                          </div> : <></>}
                        <nav className="space-y-5 p-4">
                          <Link
                            href="/packs"
                            className={
                              `flex items-center px-1 gap-1 ${isAuthenticated ? "text-white" : "text-gray-400"
                              }`
                            }
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
                            required
                          />
                          <button className="absolute top-5 right-4 bg-[#4299e1] p-2 rounded-md">
                            <CheckSVG className="h-6 w-auto text-gray-300" />
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

export default Navbar;