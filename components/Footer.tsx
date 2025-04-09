"use client"

import { FaInstagram, FaXTwitter, FaTelegram, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/authContext";
import Link from "next/link";

const Footer = ({ }: any) => {
  const [isAboutUsModalOpen, setIsAboutUsModalOpen] = useState(false);
  const [isCSModalOpen, setIsCSModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isAMLModalOpen, setIsAMLModalOpen] = useState(false);
  const [isFaqsModalOpen, setIsFaqsModalOpen] = useState(false);
  const [isFGOModalOpen, setIsFGOModalOpen] = useState(false);
  const [isTCModalOpen, setIsTCModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [isMobile, setIsMobile] = useState(true);
  const { isSidebarCollapsed } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onModalClose = () => {
    setIsAboutUsModalOpen(false);
    setIsCSModalOpen(false);
    setIsPolicyModalOpen(false);
    setIsAMLModalOpen(false);
    setIsFaqsModalOpen(false);
    setIsFGOModalOpen(false);
    setIsTCModalOpen(false);
  }
  return (
    <footer className={`bg-[#161a1d]`}>

      <div className={`${isMobile ? "" : "container"} flex flex-col md:flex-row justify-between items-normal md:items-center py-10 gap-y-6 px-4`}>
        {/* Logo */}
        <div className="flex-shrink-0 self-start w-full md:w-[50%]">
          <Link href="#" className="flex items-center mb-2">
            <img
              src={"/duelpack-logo.svg"}
              alt="Wecazoo Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-xl text-white font-bold ml-4">DuelPack</h1>
          </Link>
          <span className="text-gray-500">Open packs and battle to win rare and </span><br />
          <span className="text-gray-500">valuable products.</span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-6 justify-between w-full md:w-[50%]">
          <div className="flex justify-between gap-6 w-full md:w-[66%]">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Games</h3>
              <ul className="text-muted flex flex-col gap-2 justify-start">
                <li className="hover:text-primary transition-colors">
                  <Link className="cursor-pointer" href="/packs">Packs</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link className="cursor-pointer" href="/battles">Battles</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link className="cursor-pointer" href="/forge">Forge</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link className="cursor-pointer" href="/race">Race</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link className="cursor-pointer" href="/rewards">Rewards</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">LEGAL</h3>
              <ul className="text-muted flex flex-col gap-2 justify-start">
                <li className="hover:text-primary transition-colors">
                  <Link className="cursor-pointer" href="/privacy">Fairness</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link href="/privacy" className="cursor-pointer">Privacy Policy</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link href="/privacy" className="cursor-pointer">Terms of Service</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <span className="cursor-pointer font-bold text-white text-lg">SUPPORT</span>
                </li>
                <li className="hover:text-primary transition-colors">
                  <span className="cursor-pointer">support@duelpack.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:border-none pt-8 md:pt-2 md:pb-2">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-lg">COMMUNITY</h3>
              <ul className="text-muted flex flex-row gap-6 justify-start">
                <li className="group">
                  <a
                    href="https://x.com/wecazoo_com?t=FG6phvuInUuYRNUO5twpMA&s=09"
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[24px] h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaXTwitter className="text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    {/* <p className="hidden md:block">Twitter</p> */}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://www.instagram.com/wecazoo?igsh=MXgzM3Vvd2V0MXVxbA=="
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[24px] h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaInstagram className="text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    {/* <p className="hidden md:block">Instagram</p> */}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://youtube.com/@wecazoo?feature=shared"
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[24px] h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaYoutube className="text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    {/* <p className="hidden md:block">Youtube</p> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border border-gray-600"></div>
      <div className={`${isMobile ? "" : "flex container"} p-4 justify-between items-start`}>
        <p className="flex justify-start items-center text-muted text-sm mb-2 w-full md:w-[50%]">
          Copyright © DuelPack 2025
        </p>
        <p className="flex justify-start items-center text-muted text-sm mb-2 w-full md:w-[50%]">
          DuelPack is a brand name of DuelPack Group which is composed by DuelPack Limited, a company duly incorporated under the laws of Cyprus with the company number HE 445177, and registered office at Iakovou Patatsou 4a, Agios Dometios, 2362 Nicosia, Cyprus and DuelPack US, LLC, a company duly incorporated under the laws of United States of America with the registered number 7571319 and registered office at 108 West 13th Street Wilmington, Delaware 19801, United States.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
