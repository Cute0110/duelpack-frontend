import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/authContext";
import { usePathname } from "next/navigation";

const ProfileMobileMenu = ({ setIsMenuOpen }: any) => {
    const pathName = usePathname();
    const menuGroups = [
        {
            label: "Profile",
            route: "/profile",
        },
        {
            label: "Deposits",
            route: "/profile/deposits",
        },
        {
            label: "Withdrawals",
            route: "/profile/withdrawals",
        },
        {
            label: "Affiliate",
            route: "/profile/affiliate",
        },
    ];
    const { isAuthenticated, authData } = useAuth();

    return (
        <div className="absolute top-0 left-0">
            <div className="fixed top-0 left-0 w-screen h-screen" onClick={() => { setIsMenuOpen(false) }}></div>
            <div className="relative bg-[#22272b] w-[300px] border border-gray-700 rounded-md mt-12 p-4 z-[50]">
                {menuGroups.map((item: any, index: any) =>
                    <div key={index} className="mb-4">
                        <a href={item.route}>
                            {item.label}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileMobileMenu;