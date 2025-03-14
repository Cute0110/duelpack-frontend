"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { useAuth } from "@/lib/authContext";
import { MoreHorizontal } from "lucide-react";
import RandingPage from "@/components/RandingPage";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Home = () => {
  const { isAuthenticated, isSidebarCollapsed } = useAuth();
  const [allGamesData, setAllGamesData] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    document.title = "DuelPack";
    //document.querySelector('meta[name="description"]')?.setAttribute("content", "Wecazoo is a top crypto casino offering Solana, Bitcoin & more. Play with no KYC in the UK, Canada, Sverige, Netherlands & more. 500% deposit bonus!");
    // const fetchData = async () => {
    //   try {
    //     const response = await axiosInstance.post('/api/game_list', eot({ start: 0, length: 0, search: 0, order: "order", dir: "asc" }));
    //     const res = dot(response.data);
    //     if (res.status == 1) {
    //       setAllGamesData(res.data);
    //     } else {
    //       openNotification("error", "Error", res.msg, "topRight");
    //     }
    //   } catch (err) {
    //     openNotification("error", "Error", "Network error!", "topRight");
    //   }
    // };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
    };

    checkMobile();

    // fetchData();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onScrollTo = (gameSection: any) => {
    const element = document.getElementById(gameSection); // Replace with your target element's ID
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({
        top: top,
        behavior: "smooth", // Adds smooth scrolling
      });
    }
  }

  return (
    <>
      {contextHolder}
      <div className="min-h-screen bg-[#1d2125] text-foreground">

        <main className={`mt-[40px] `} // Added transform and scale
        >
          <RandingPage />
        </main>
      </div >
    </>
  );
}

export default Home;