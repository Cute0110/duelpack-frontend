"use client"

import Image from "next/image";
import Logo from "@/public/duelpack-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaTelegram, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AboutUs from "./Modals/AboutUs";
import CustomerSupport from "./Modals/CustomerSupport";
import PrivacyPolicy from "./Modals/PrivacyPolicy";
import AMLPolicy from "./Modals/AMLPolicy";
import FAQs from "./Modals/FAQs";
import FairGameOdds from "./Modals/FairGameOdds";
import TermsConditions from "./Modals/TermsConditions";
import { useAuth } from "@/lib/authContext";
import Link from "next/link";

const Footer = ({ onScrollTo }: any) => {
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
      setIsMobile(window.innerWidth < 1024);
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
      <AboutUs isModalOpen={isAboutUsModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      <CustomerSupport isModalOpen={isCSModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      <PrivacyPolicy isModalOpen={isPolicyModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      <AMLPolicy isModalOpen={isAMLModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      <FAQs isModalOpen={isFaqsModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      <FairGameOdds isModalOpen={isFGOModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      <TermsConditions isModalOpen={isTCModalOpen} onModalClose={onModalClose} modalTitle={modalTitle} />
      {/* <section className="container bg-[#0d3832] rounded-[10px] py-4 px-2 overflow-hidden w-[95%] lg:w-full">
        <CryptoCarousel />
      </section> */}

      <div className={`${isMobile ? "" : "container"} flex flex-col xl:flex-row justify-between items-normal xl:items-center py-10 gap-y-6 px-4`}>
        {/* Logo */}
        <div className="flex-shrink-0 self-start">
          <a href="#" className="flex items-center mb-2">
            <Image
              priority
              src={Logo}
              alt="Wecazoo Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-xl text-white font-bold ml-4">DuelPack</h1>
          </a>
          <span className="text-gray-500">Open packs and battle to win rare and </span><br/>
          <span className="text-gray-500">valuable products.</span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          <div className="flex justify-between">
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
                  <span className="cursor-pointer">Fairness</span>
                </li>
                <li className="hover:text-primary transition-colors">
                  <span className="cursor-pointer">Privacy Policy</span>
                </li>
                <li className="hover:text-primary transition-colors">
                  <span className="cursor-pointer">Terms of Service</span>
                </li>
                <li className="hover:text-primary transition-colors">
                  <span className="cursor-pointer font-bold text-white text-lg">SUPPORT</span>
                </li>
                <li className="hover:text-primary transition-colors">
                  <span className="cursor-pointer">support@packdraw.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:border-none pt-8 md:pt-2 md:pb-2">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-lg">COMMUNITY</h3>
              <ul className="text-muted flex flex-row gap-6 justify-start">
                {/* <li className="group">
                  <a
                    href="https://t.me/wecazoo"
                    className="flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <div className="w-[48px] h-[48px] md:w-[24px] md:h-[24px] rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <FaTelegram className="text-2xl md:text-sm text-background group-hover:text-white transition-colors" />
                    </div>
                    <p className="hidden md:block">Telegram</p>
                  </a>
                </li> */}
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
      <div className={`${isMobile ? "" : "container"} p-4`}>
        <p className="flex justify-start items-center text-muted text-sm mb-2">
          Copyright © DuelPack 2025
        </p>
        <p className="flex justify-start items-center text-muted text-sm mb-2">
          PackDraw is a brand name of PackDraw Group which is composed by Packdraw Limited, a company duly incorporated under the laws of Cyprus with the company number HE 445177, and registered office at Iakovou Patatsou 4a, Agios Dometios, 2362 Nicosia, Cyprus and PackDraw US, LLC, a company duly incorporated under the laws of United States of America with the registered number 7571319 and registered office at 108 West 13th Street Wilmington, Delaware 19801, United States.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
