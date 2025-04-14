"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { useAuth } from "@/lib/authContext";

const EachPack = ({ data }: any) => {
    const router = useRouter();
    const { isAuthenticated, authData } = useAuth();

    const onClickPack = (id: string | number) => {
        router.push(`/spinFreePacks?packId=${id}`);
    }
    return (
        <>
            <div className="rounded-xl cursor-pointer group relative">
                <img src={`/images/packs/${data.imageUrl}`} className="rounded-xl" onClick={() => onClickPack(data.id)} />
                <p className="text-center mt-4 font-semibold text-lg flex items-center justify-center gap-2">{(isAuthenticated == false) || (data.type == 3 && authData.totalDeposit == 0) ? <LockKeyhole /> : ""} {data.name}</p>
            </div>
        </>
    );
};

export default EachPack;
