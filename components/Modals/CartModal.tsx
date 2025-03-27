import React, { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";
import ItemDetailsModal from "./ItemDetailsModal";
import { useRouter } from "next/navigation";

const CartModal = ({ cartData, setIsCartModalOpen, isLoading, onSellClick }: any) => {

    const router = useRouter();
    const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500'];

    const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);
    const [selectedItemData, setSelectedItemData] = useState(null);
    const [cartItems, setCartItems]: any = useState([]);
    const [selectedItems, setSelectedItems] : any = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartItems(cartData.data);
    }, [cartData]);

    const onClose = () => {
        setIsCartModalOpen(false);
    }

    const onItemSelect = (data: any) => {
        let temp: any = selectedItems;
        let tempTotal = totalPrice;
        const index = temp.findIndex((el: any) => el === data.id);

        console.log(temp);

        if (index !== -1) {
          // Remove the item if found
          tempTotal -= data.item.price;
          setTotalPrice(tempTotal);
          setSelectedItems(temp.filter((_: any , i: any) => i !== index));
        } else {
          // Add the item if not found
          tempTotal += data.item.price;
          setTotalPrice(tempTotal);
          temp.push(data.id);
          setSelectedItems(temp);
        }
    }

    const onClickSelectAll = () => {
        let temp: any = [];
        let tempTotal: any = 0;
        for (let i = 0 ; i < cartItems.length ; i ++) {
            temp.push(cartItems[i].id);
            tempTotal += cartItems[i].item.price;
        }
        setSelectedItems(temp);
        setTotalPrice(tempTotal);
    }

    const onSelectedSellClick = (ids: any, totalPrice: any) => {
        setSelectedItems([]);
        setTotalPrice(0);
        onSellClick(ids, totalPrice);
    }
    
    const onWithDrawClick = () => {
        setIsCartModalOpen(false);
        router.push("/wallet");
    }

    const onItemClick = (data: any) => {
        setIsItemDetailsModalOpen(true);
        setSelectedItemData(data);
    }

    return (
        <>
            {isItemDetailsModalOpen && (<ItemDetailsModal itemData={selectedItemData} setIsItemDetailsModalOpen={setIsItemDetailsModalOpen} viewType={false} />)}
            <div className="fixed top-0 left-0 w-screen h-screen z-[70]">
                <div className="w-screen h-screen bg-black opacity-[0.5]" onClick={onClose}></div>
                <div className="absolute top-[75px] max-w-7xl w-[calc(100vw-40px)] h-[calc(100vh-80px)] left-1/2 transform -translate-x-1/2 z-[80] bg-[#1d2125] rounded-xl p-4 overflow-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-xl">Your Cart</div>
                        <X onClick={onClose} className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between mt-4 p-4 bg-[#22272b] rounded-md">
                        <button className="underline p-2" onClick={onClickSelectAll}>Select All</button>
                        <div className="flex items-center gap-4">
                            <button className="bg-gray-600 px-4 py-2 rounded-md font-semibold" onClick={() => onSelectedSellClick(selectedItems, totalPrice)}>Sell Selected Items</button>
                            <button className="bg-gray-600 px-4 py-2 rounded-md font-semibold" onClick={onWithDrawClick}>WithDraw</button>
                        </div>
                    </div>
                    <p className="mt-4 px-2 text-gray-500 font-semibold text-xl">
                        Selected <span className="font-bold text-white text-2xl">{selectedItems.length}</span> items - Total Price : <span className="font-bold text-white text-2xl">${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </p>
                    {isLoading ?
                        <div className="h-full w-full flex items-center justify-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
                        </div>
                        :
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                            {cartItems.map((data: any, index: any) => (
                                <div className="rounded-xl cursor-pointer bg-[#22272b] relative p-4" key={index}>
                                    <button type="button" className="absolute top-4 right-4 bg-[#34383c] p-2 rounded-xl z-[50]" onClick={() => onItemClick(data)}>
                                        <Eye className="h-5 w-auto text-gray-300 z-10" />
                                    </button>
                                    <div className="relative w-full p-2 items-center justify-center flex">
                                        <img src={`./images/items/${data.item.imageUrl}`} className="w-3/4 aspect-square relative" />
                                    </div>
                                    <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-2">{data.item.name}</p>
                                    <p className="w-full text-center font-semibold text-lg">${data.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    
                                    <p className={`text-center mt-4 ${selectedItems.includes(data.id) ? "bg-green-500" : "bg-gray-600"} p-2 rounded-md font-semibold`} onClick={() => onItemSelect(data)}>
                                        {selectedItems.includes(data.id) ? "Selected" : "Sell"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default CartModal;
