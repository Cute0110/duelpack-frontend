import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/authContext";
import { usePathname } from "next/navigation";

const ProfileMenu = ({ }: any) => {
    const pathName = usePathname();
    const menuGroups = [
        {
            name: "Account",
            menuItems: [
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
            ],
        },
    ];
    const { isAuthenticated, authData } = useAuth();

    return (
        <div className="w-[300px]">
            {menuGroups.map((menu: any, index: any) =>
                <div key={index}>
                    <div className="text-sm text-gray-400 font-semibold">{menu.name}</div>
                    <div className="flex flex-col gap-4 mt-4">
                    {menu.menuItems.map((item: any, index: any) => (
                        <a href={item.route} key={index} className={`rounded-md ${pathName == item.route ? "bg-[#34383c]" : ""} text-[#7a8084] px-8 py-2 text-md font-semibold`}>
                            {item.label}
                        </a>
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
