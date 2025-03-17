import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const PackItemsModal = ({ packData, itemsData, setIsPackItemsModalOpen, isLoading }: any) => {

    const onClose = () => {
        setIsPackItemsModalOpen(false);
    }

    useEffect(() => {

    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50">
            <div className="w-screen h-screen bg-black opacity-[0.5]" onClick={onClose}></div>
            <div className="absolute top-[75px] max-w-7xl w-[calc(100vw-40px)] h-[calc(100vh-80px)] left-1/2 transform -translate-x-1/2 z-60 bg-[#1d2125] rounded-xl p-4 overflow-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">{packData.name} - ${packData.price.toFixed(2)}</div>
                    <X onClick={onClose} className="cursor-pointer" />
                </div>
                {isLoading ?
                    <div className="h-full w-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                        {itemsData.map((data: any, index: any) => (
                            <div className="rounded-xl cursor-pointer group bg-[#22272b] relative p-4" key={index}>
                                <p className="w-full text-center font-semibold text-lg">{data.percent.toFixed(4)}%</p>
                                <img src={`./images/packs/${data.imageUrl}`} className="rounded-xl" />
                                <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-8">{data.name}</p>
                                <p className="w-full text-center font-semibold text-lg">${data.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default PackItemsModal;
