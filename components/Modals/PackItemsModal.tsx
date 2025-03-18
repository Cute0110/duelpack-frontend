import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const PackItemsModal = ({ packData, itemsData, setIsPackItemsModalOpen, isLoading }: any) => {

    const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500']

    const onClose = () => {
        setIsPackItemsModalOpen(false);
    }

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
                            <div className="rounded-xl cursor-pointer group bg-[#22272b] relative p-4 group" key={index}>
                                <p className="w-full text-center font-semibold text-lg text-gray-500">{data.percent.toFixed(4)}%</p>
                                <div className="relative w-full aspect-square p-4 mt-2">
                                    <div className={`absolute inset-0 m-auto ${itemBackColorArray[data.order-1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-3/4 aspect-square rounded-full blur-xl`}></div>
                                    <img src={`./images/items/${data.item.imageUrl}`} className="w-full aspect-square relative" />
                                </div>
                                <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-8 mt-2">{data.item.name}</p>
                                <p className="w-full text-center font-semibold text-lg">${data.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default PackItemsModal;
