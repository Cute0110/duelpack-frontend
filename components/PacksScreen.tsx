import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Check } from "lucide-react";

import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";

import PackItemsModal from "./Modals/PackItemsModal";

import { Divider, notification, Select } from 'antd';
import type { NotificationArgsProps } from 'antd';

import SearchSVG from "@/public/images/search.svg";
import DownArrowSVG from "@/public/images/downArrow.svg";
import ViewSVG from "@/public/images/view.svg";
import EachPack from "./EachPack";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PacksScreen = ({ packsData }: any) => {

  const packTypeList = [
    {label: "Official Packs", value: "Official Packs"},
    {label: "Community Packs", value: "Community Packs"},
    {label: "My Packs", value: "My Packs"}
  ]
  
  const sortTypeList = [
    {label: "Newest", value: "Newest"},
    {label: "Most Popular", value: "Most Popular"},
    {label: "Price Low to High", value: "Price Low to High"},
    {label: "Price High to Low", value: "Price High to Low"}
  ]

  const priceRangeList = [
    {label: "All", value: 0},
    {label: "Greater than $500", value: 1, min: 500, max: null},
    {label: "$250.00 - $500.00", value: 2, min: 250, max: 500},
    {label: "$100.00 - $250.00", value: 3, min: 100, max: 250},
    {label: "$50.00 - $100.00", value: 4, min: 50, max: 100},
    {label: "$25.00 - $50.00", value: 5, min: 25, max: 50},
    {label: "$5.00 - $25.00", value: 6, min: 5, max: 25},
    {label: "Less than $5.00", value: 7, min: 0, max: 5},
  ]

  const [api, contextHolder] = notification.useNotification();
  const [packs, setPacks] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [isPackItemsModalOpen, setIsPackItemsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackData, setSelectedPackData] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  const [selectedPackType, setSelectedPackType] = useState("Official Packs");
  const [selectedSortType, setSelectedSortType] = useState("Newest");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [isSortTypeMenuOpen, setIsSortTypeMenuOpen] = useState(false);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    setPacks(packsData.data);
  }, [packsData]);

  const onClickViewItem = async (data: any) => {
    setIsLoading(true);
    setSelectedPackData(data);
    setIsPackItemsModalOpen(true);
    try {
      const response = await axiosInstance.post('/api/pack_items_list', eot({ start: 0, length: 0, search: 0, order: "order", dir: "asc", packID: data.id }));
      const res = dot(response.data);
      if (res.status == 1) {
        setItemsData(res.data);
      } else {
        openNotification("error", "Error", res.msg, "topRight");
        setIsPackItemsModalOpen(false);
      }
    } catch (err) {
      openNotification("error", "Error", "Network error!", "topRight");
      setIsPackItemsModalOpen(false);
    } finally {
      setIsLoading(false);
    }
  }

  const onSearchValueChange = (e: any) => {
    setSearchVal(e.target.value);
    if (e.target.value == "") {
      setPacks(packsData.data);
    }
  }

  const onSearchEnter = () => {
    setPacks(packsData.data.filter((data: any) => data.name.toLowerCase().includes(searchVal.toLowerCase())));
  }

  const onPackTypeChange = (value: any) => {
    setSelectedPackType(value);
  }

  const onSortTypeChange = (value: any) => {
    setSelectedSortType(value);
  }

  const onPriceRangeChange = (value: any) => {
    setSelectedPriceRange(value);
    setIsSortTypeMenuOpen(false);
  }

  return (
    <>
      {contextHolder}
      {isPackItemsModalOpen && (<PackItemsModal packData={selectedPackData} itemsData={itemsData} setIsPackItemsModalOpen={setIsPackItemsModalOpen} isLoading={isLoading} />)}
      <div className="container mt-[75px]">
        <div className="flex justify-between gap-6">
          <div className="w-full md:calc-100-minus-250">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="relative">
                <input
                  placeholder="Search"
                  className="rounded-md bg-[#34383c] w-full py-2 pl-[40px] placeholder-bold"
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
              {/* <div>
                <Select
                  className="w-full"
                  variant="filled"
                  value={selectedPackType}
                  onChange={onPackTypeChange}
                  optionLabelProp="value"
                  options={packTypeList.map((item) => ({ label: <span className="flex items-center text-md font-bold">{item.value == selectedPackType ? (<Check size={20} className="w-[30px]"/>) : <div className="w-[30px]"></div>}{item.label}</span>, value: item.value }))}
                />
              </div> */}
              <div className="col-start-1 md:col-start-3">
                <Select
                  className="w-full"
                  variant="filled"
                  value={selectedSortType}
                  onChange={onSortTypeChange}
                  optionLabelProp="value"
                  open={isSortTypeMenuOpen}
                  onDropdownVisibleChange={setIsSortTypeMenuOpen}
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider style={{ margin: '8px 0', borderColor: "gray" }} />
                      <div className="px-[10px]">
                        {priceRangeList.map((item, index) => <div key={index} className="flex items-center text-md font-semibold mb-2 cursor-pointer" onClick={() => onPriceRangeChange(item.value)}>{item.value == selectedPriceRange ? (<Check size={20} className="w-[30px]"/>) : <div className="w-[30px]"></div>}{item.label}</div>)}
                      </div>
                    </>
                  )}
                  options={sortTypeList.map((item) => ({ label: <span className="flex items-center text-md font-semibold">{item.value == selectedSortType ? (<Check size={20} className="w-[30px]"/>) : <div className="w-[30px]"></div>}{item.label}</span>, value: item.value }))}
                />
              </div>
              {/* <div className="flex items-center col-span-2 md:col-span-1 justify-center rounded-md p-2 bg-[#4299e1] gap-2 hover:bg-[#3182ce] cursor-pointer">
                <img
                  src={"./duelpack-logo.svg"}
                  alt="Wecazoo Logo"
                  className="h-6 w-auto"
                />
                <span>Creat Pack</span>
              </div> */}
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              {packs.map((data: any, index) => (
                <EachPack key={index} data={data} onClickViewItem={onClickViewItem} />
              ))}
            </div>
          </div>
          <div className="hidden md:block w-[250px]">Slide Show</div>
        </div>
      </div>
    </>
  );
};

export default PacksScreen;
