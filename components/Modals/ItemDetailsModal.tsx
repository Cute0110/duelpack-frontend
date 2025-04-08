import React, { useEffect, useState } from "react";
import { Divide, X } from "lucide-react";
import { Divider } from "antd";

const ItemDetailsModal = ({ itemData, setIsItemDetailsModalOpen, viewType }: any) => {

    const onClose = () => {
        setIsItemDetailsModalOpen(false);
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[90] tracking-[1px]">
            <div className="w-screen h-screen bg-black opacity-[0.5]" onClick={onClose}></div>
            <div className="absolute top-[75px] max-w-6xl w-[calc(100vw-80px)] h-[calc(100vh-80px)] left-1/2 transform -translate-x-1/2 z-[100] bg-[#1d2125] rounded-xl p-4 overflow-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">Product Details</div>
                    <X onClick={onClose} className="cursor-pointer" />
                </div>
                {itemData &&
                    (<>
                        <div className="bg-[#34383c] rounded-lg mt-4 py-8">
                            <img src={`./images/items/${itemData.item.imageUrl}`} className="h-[200px] aspect-square mx-auto relative" />
                        </div>

                        <div className="mt-8 font-bold text-xl">
                            {itemData.item.name}
                        </div>
                        <div className="mt-2 text-2xl">
                            ${itemData.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <Divider style={{ margin: '25px 0', borderColor: "gray" }} />
                        <div className="mt-2 text-lg">
                            {itemData.item.comment}
                        </div>
                        {viewType ?
                            <>
                                <div className="mt-4 font-bold text-lg">
                                    Outcome
                                </div>
                                <div className="text-lg">
                                    {itemData.percent}%
                                </div>
                            </>
                            :
                            <></>
                        }
                    </>)
                }
            </div>
        </div>
    );
};

export default ItemDetailsModal;
