import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Check } from "lucide-react";

import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";

import PackItemsModal from "./Modals/PackItemsModal";

import { Divider, Input, notification, Select, Slider } from 'antd';
import type { NotificationArgsProps } from 'antd';

import SearchSVG from "@/public/images/search.svg";
import DownArrowSVG from "@/public/images/downArrow.svg";
import ViewSVG from "@/public/images/view.svg";
import EachPack from "./EachPack";
import ItemDetailsModal from "./Modals/ItemDetailsModal";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';
const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500'];

const ForgeScreen = ({ itemsData, onGetItemsDataAction, isLoading }: any) => {

  const [api, contextHolder] = notification.useNotification();
  const [items, setItems] = useState([]);
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [selectedViewItemData, setSelectedViewItemData] = useState({ item: null });
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [betPriceVal, setBetPriceVal] = useState("");
  const [betMaxPrice, setbetMaxPrice] = useState(0);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    setItems(itemsData.data);
  }, [itemsData]);

  const onBetPriceInputValChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dot
    if (value > betMaxPrice) 
      setBetPriceVal(String(betMaxPrice));
    else 
      setBetPriceVal(value);
  }

  const onBetPriceSliderValChange = (value: any) => {
    setBetPriceVal(value);
  }

  const onBetPriceInputBlur = () => {
    let formatted = parseFloat(betPriceVal).toFixed(2); // Converts to number, formats to 2 decimals
    if (!isNaN(Number(formatted))) {
      setBetPriceVal(formatted);
    } else {
      setBetPriceVal(""); // Clear if invalid
    }
  };

  const onSearchValueChange = (e: any) => {
    setSearchVal(e.target.value);
    if (e.target.value == "") {
      onGetItemsDataAction("", 1);
    }
  }

  const onSearchEnter = () => {
    onGetItemsDataAction(searchVal, itemsData.pageNum);
  }

  const onPrevClick = () => {
    onGetItemsDataAction(searchVal, itemsData.pageNum - 1);
  }

  const onNextClick = () => {
    onGetItemsDataAction(searchVal, itemsData.pageNum + 1);
  }

  const onClickViewItem = (data: any) => {
    setSelectedViewItemData({ item: data });
    setIsItemDetailsModalOpen(true);
  }

  const onItemClick = (data: any) => {
    if (data.id == selectedItemId) {
      setSelectedItemData(null);
      setSelectedItemId(0);
      setIsItemSelected(false);
    } else {
      setIsItemSelected(true);
      setSelectedItemData(data);
      setSelectedItemId(data.id);
      setbetMaxPrice(Number((data.price / 1.16).toFixed(2)));
      setBetPriceVal((data.price / 1.16).toFixed(2));
    }
  }

  const onClickBetPrice = (multiVal: any) => {
    const tempData: any = selectedItemData;
    setBetPriceVal((tempData.price / multiVal).toFixed(2));
  }

  return (
    <>
      {contextHolder}
      {isItemDetailsModalOpen && (<ItemDetailsModal itemData={selectedViewItemData} setIsItemDetailsModalOpen={setIsItemDetailsModalOpen} viewType={false} />)}
      <div className="container mt-[75px]">
        <div className="grid grid-cols-3 gap-16 pt-16">
          <div className="w-full aspect-square relative border border-4 border-[#5a5e6233] rounded-lg overflow-hidden p-16">
            <div className={`absolute -top-16 left-1/2 -translate-x-1/2 mx-auto ${itemBackColorArray[3]} opacity-[0.3] w-3/5 aspect-square rounded-full blur-2xl`}></div>
            <span className="font-semibold text-lg">Price</span>
            <div className="flex items-center justify-start relative w-full">
              <div className="h-12 w-12 bg-[#5a5e62] rounded-tl-lg rounded-bl-lg flex items-center justify-center font-semibold text-2xl">$</div>
              <div className="w-full">
                <input
                  className="rounded-tr-lg rounded-br-lg bg-[#1d2125] w-full p-2 placeholder-bold border-2 border-[#5a5e62] h-12 disabled:cursor-not-allowed"
                  value={betPriceVal}
                  onChange={onBetPriceInputValChange}
                  onBlur={onBetPriceInputBlur}
                  disabled={!isItemSelected}
                />
              </div>
            </div>
            <Slider
              value={Number(betPriceVal)}
              max={betMaxPrice}
              onChange={onBetPriceSliderValChange}
              step={0.01} // Allows float values like 45.3, 9999.9, etc.
              disabled={!isItemSelected}
              className="mt-12"
            />
            <div className="w-full gap-2 grid grid-cols-5 mt-12">
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected} onClick={() => onClickBetPrice(92.59)}>Min</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected} onClick={() => onClickBetPrice(9.26)}>10%</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected} onClick={() => onClickBetPrice(3.7)}>25%</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected} onClick={() => onClickBetPrice(1.85)}>50%</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected} onClick={() => onClickBetPrice(1.16)}>Max</button>
            </div>
          </div>
          <div className="w-full aspect-square relative border border-4 border-[#5a5e6233] rounded-lg">asdf</div>
          <div className="w-full aspect-square relative border border-4 border-[#5a5e6233] rounded-lg">asdf</div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="relative">
            <input
              placeholder="Search"
              className="rounded-full bg-[#34383c] w-[400px] py-2 pl-[40px] placeholder-bold"
              value={searchVal}
              onChange={onSearchValueChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSearchEnter();
                }
              }}
            />
            <SearchSVG className="absolute  h-5 text-white top-[50%] left-[10px] -translate-y-[50%]" />
          </div>
          <div className="relative">
            <input
              placeholder="Price"
              className="rounded-full bg-[#34383c] w-[300px] py-2 pl-[100px] pr-[10px] placeholder-bold text-right"
              value={searchVal}
              onChange={onSearchValueChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSearchEnter();
                }
              }}
            />
            <button className="absolute h-[30px] left-1 top-[5px] bg-[#5a5e62] rounded-full text-white font-semibold px-2">Max Price</button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="font-semibold">Showing {(itemsData.pageNum - 1) * itemsData.pageCount + 1} - {(itemsData.pageNum - 1) * itemsData.pageCount + items.length} of {itemsData.totalCount}</div>
          <div className="flex items-center gap-4">
            <button className="bg-[#34383c] rounded-md text-white font-semibold py-2 px-4 disabled:cursor-not-allowed disabled:text-gray-500" disabled={itemsData.pageNum == 1} onClick={onPrevClick}>Previous</button>
            <button className="bg-[#34383c] rounded-md text-white font-semibold py-2 px-4 disabled:cursor-not-allowed disabled:text-gray-500" disabled={(itemsData.pageNum - 1) * itemsData.pageCount + items.length >= itemsData.totalCount} onClick={onNextClick}>Next</button>
          </div>
        </div>
        {isLoading ?
          <div className="h-full w-full flex items-center justify-center mt-[75px] py-4">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white" />
          </div>
          :
          <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 mt-4">
            {items.map((data: any, index: any) => (
              <div className={`rounded-xl cursor-pointer bg-[#22272b] relative p-4 ${selectedItemId == data.id ? "border border-sky-500" : ""}`} key={index} onClick={() => onItemClick(data)}>
                <div className="absolute top-4 right-4 bg-[#34383c] p-2 rounded-xl" onClick={() => onClickViewItem(data)}>
                  <ViewSVG className="h-4 w-auto text-gray-300 z-10" />
                </div>
                <img src={`./images/items/${data.imageUrl}`} className="w-2/4 mx-auto aspect-square relative mt-8" />
                <p className="w-full text-center font-semibold text-md text-[#5a5e62] truncate mt-2">{data.name}</p>
                <p className="w-full text-center font-semibold text-lg">${data.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            ))}
          </div>
        }
        <div className="flex items-center justify-between mt-4">
          <div className="font-semibold">Showing {(itemsData.pageNum - 1) * itemsData.pageCount + 1} - {(itemsData.pageNum - 1) * itemsData.pageCount + items.length} of {itemsData.totalCount}</div>
          <div className="flex items-center gap-4">
            <button className="bg-[#34383c] rounded-md text-white font-semibold py-2 px-4 disabled:cursor-not-allowed disabled:text-gray-500" disabled={itemsData.pageNum == 1} onClick={onPrevClick}>Previous</button>
            <button className="bg-[#34383c] rounded-md text-white font-semibold py-2 px-4 disabled:cursor-not-allowed disabled:text-gray-500" disabled={(itemsData.pageNum - 1) * itemsData.pageCount + items.length >= itemsData.totalCount} onClick={onNextClick}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgeScreen;
