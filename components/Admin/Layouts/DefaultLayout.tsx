"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Header from "../Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col lg:ml-72.5 content-width content-height">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto p-4 2xl:p-4 min-h-[calc(100vh-80px)]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
