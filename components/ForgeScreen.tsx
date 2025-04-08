import React, { useEffect, useRef, useState } from "react";

import { Divider, Input, notification, Select, Slider } from 'antd';
import type { NotificationArgsProps } from 'antd';

import SearchSVG from "@/public/images/search.svg";
import ViewSVG from "@/public/images/view.svg";
import ItemDetailsModal from "./Modals/ItemDetailsModal";
import CircularProgress from "./ui/circularProgrerss";
import { useAuth } from "@/lib/authContext";
import AuthModal from "./Modals/AuthModal";
import confetti from 'canvas-confetti';

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';
const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500'];

interface ItemData {
  imageUrl: string;
  name: string;
  price: number;
  // other fields if needed
}

const ForgeScreen = ({ itemsData, onGetItemsDataAction, onUserBalanceChange, isLoading }: any) => {
  const defaultMax = 350000;
  const defaultMin = 20;
  const perPageCount = 48;

  const { isAuthenticated, authData } = useAuth();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [api, contextHolder] = notification.useNotification();
  const [items, setItems] = useState([]);
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [selectedViewItemData, setSelectedViewItemData] = useState({ item: null });
  const [selectedItemData, setSelectedItemData] = useState<ItemData | null>(null);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [maxPriceVal, setMaxPriceVal] = useState("");
  const [betPriceVal, setBetPriceVal] = useState(0);
  const [showBetPriceVal, setShowBetPriceVal] = useState("");
  const [betMaxPrice, setbetMaxPrice] = useState(0);
  const [betMinPrice, setbetMinPrice] = useState(0);
  const [percentVal, setPercentVal] = useState(80);
  const [stopDegree, setStopDegree] = useState(-1);
  const [isSpin, setIsSpin] = useState(false);
  const [spinType, setSpinType] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    const value = '$' + defaultMax.toLocaleString('en-US'); // Allow only numbers and dot
    setMaxPriceVal(value);
  }, []);

  useEffect(() => {
    setItems(itemsData.data);
  }, [itemsData]);

  const onBetPriceInputValChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dot
    setShowBetPriceVal(value);
  }

  const onBetPriceSliderValChange = (value: any) => {
    setBetPriceVal(value);
    setShowBetPriceVal(value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    setPercentVal(value / betMinPrice);
  }

  const onBetPriceInputBlur = () => {
    const value = Number(showBetPriceVal.replace(/[^0-9.]/g, "")); // Allow only numbers and dot
    if (isNaN(value)) {
      setBetPriceVal(betMinPrice);
      setShowBetPriceVal(betMinPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      setPercentVal(1);
    } else {
      if (value > betMaxPrice) {
        setBetPriceVal(betMaxPrice);
        setShowBetPriceVal(betMaxPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        setPercentVal(80);
      } else if (value < betMinPrice) {
        setBetPriceVal(betMinPrice);
        setShowBetPriceVal(betMinPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        setPercentVal(1);
      } else {
        setBetPriceVal(value);
        setShowBetPriceVal(value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        setPercentVal(value / betMinPrice);
      }
    }
  };

  const onSearchValueChange = (e: any) => {
    setSearchVal(e.target.value);
    if (e.target.value == "") {
      onGetItemsDataAction("", 1, perPageCount, Number(maxPriceVal.replace(/[^0-9]/g, "")));
    }
  }

  const onMaxPriceValueChange = (e: any) => {
    const value = '$' + Number(e.target.value.replace(/[^0-9]/g, "")).toLocaleString('en-US'); // Allow only numbers and dot
    setMaxPriceVal(value);
  }

  const onMaxPriceInputBlur = () => {
    const value = Math.min(Math.max(Number(maxPriceVal.replace(/[^0-9]/g, "")), defaultMin), defaultMax);
    onGetItemsDataAction(searchVal, 1, perPageCount, value);
    setMaxPriceVal('$' + value.toLocaleString());
  }

  const onClickMaxPrice = () => {
    const value = defaultMax;
    onGetItemsDataAction(searchVal, 1, perPageCount, value);
    setMaxPriceVal('$' + value.toLocaleString());
  }


  const onSearchEnter = () => {
    onGetItemsDataAction(searchVal, 1, perPageCount, Number(maxPriceVal.replace(/[^0-9]/g, "")));
  }

  const onPrevClick = () => {
    onGetItemsDataAction(searchVal, itemsData.pageNum - 1, perPageCount, Number(maxPriceVal.replace(/[^0-9]/g, "")));
  }

  const onNextClick = () => {
    onGetItemsDataAction(searchVal, itemsData.pageNum + 1, perPageCount, Number(maxPriceVal.replace(/[^0-9]/g, "")));
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
      const minVal = (Number(data.price) / 100) * 1.08;
      setIsItemSelected(true);
      setSelectedItemData(data);
      setSelectedItemId(data.id);
      setBetPriceVal(minVal * 80);
      setShowBetPriceVal((minVal * 80).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      setbetMaxPrice(Number((minVal * 80).toFixed(2)));
      setbetMinPrice(Number(minVal.toFixed(2)));
      setPercentVal(80);
    }
  }

  const onClickBetPrice = (percent: any) => {
    setPercentVal(percent);
    setBetPriceVal(betMinPrice * percent);
    setShowBetPriceVal((betMinPrice * percent).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  }

  const onClickSpin = () => {
    if (isAuthenticated) {
      if (authData.balance < betPriceVal) {
        openNotification("warning", "Warning", "Deposit first!", "topRight");
      } else {
        onUserBalanceChange(authData.id, (-1 * betPriceVal));
        setSpinType(true);
        setIsSpin(true);
        const timeoutId = setTimeout(() => {
          setStopDegree(Math.floor(Math.random() * 359));
        }, 1000);
      }
    } else {
      setIsAuthModalOpen(true);
    }
  }

  const onClickDemoSpin = () => {
    setIsSpin(true);
    setSpinType(false);
    const timeoutId = setTimeout(() => {
      setStopDegree(Math.floor(Math.random() * 359));
    }, 1000);
  }

  const fireConfetti = () => {
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, { resize: true, useWorker: true });
      myConfetti({
        particleCount: 100,
        spread: 360,
        origin: { x: 0.5, y: 0.5 }
      });
    }
  };

  const onSpinFinish = () => {
    const result = stopDegree < 360 * percentVal / 100 ? true : false;
    if (result) {
      fireConfetti();
      if (spinType == true) {
        onUserBalanceChange(authData.id, betPriceVal * 92.59 / percentVal);
      }
    }
    setStopDegree(-1);
    setIsSpin(false);
  }

  return (
    <>
      {contextHolder}
      <AuthModal
        isModalOpen={isAuthModalOpen}
        onModalClose={() => setIsAuthModalOpen(false)}
        modalType={true}
      />
      {isItemDetailsModalOpen && (<ItemDetailsModal itemData={selectedViewItemData} setIsItemDetailsModalOpen={setIsItemDetailsModalOpen} viewType={false} />)}
      <div className="container mt-[75px] relative">
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
          }}
        />
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center gap-4 md:gap-16 pt-4 md:pt-16">
          <div className="w-full md:aspect-square relative border-0 md:border md:border-4 border-[#5a5e6233] rounded-lg overflow-hidden p-0 md:p-8">
            <div className={`absolute hidden md:block -top-16 left-1/2 -translate-x-1/2 mx-auto ${itemBackColorArray[3]} opacity-[0.3] w-3/5 aspect-square rounded-full blur-2xl`}></div>
            <span className="font-semibold text-lg">Price</span>
            <div className="flex items-center justify-start relative w-full">
              <div className="h-12 w-12 bg-[#5a5e62] rounded-tl-lg rounded-bl-lg flex items-center justify-center font-semibold text-2xl">$</div>
              <div className="w-full">
                <input
                  className="rounded-tr-lg rounded-br-lg bg-[#1d2125] w-full p-2 placeholder-bold border-2 border-[#5a5e62] h-12 disabled:cursor-not-allowed"
                  value={showBetPriceVal}
                  onChange={onBetPriceInputValChange}
                  onBlur={onBetPriceInputBlur}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      onBetPriceInputBlur();
                    }
                  }}
                  disabled={!isItemSelected || isSpin}
                />
              </div>
            </div>
            <Slider
              value={betPriceVal}
              min={betMinPrice}
              max={betMaxPrice}
              onChange={onBetPriceSliderValChange}
              step={0.01} // Allows float values like 45.3, 9999.9, etc.
              disabled={!isItemSelected || isSpin}
              className="mt-8 md:mt-12 mx-2 md:mx-0"
            />
            <div className="w-full gap-2 grid grid-cols-5 mt-8 md:mt-12">
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected || isSpin} onClick={() => onClickBetPrice(1)}>Min</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected || isSpin} onClick={() => onClickBetPrice(10)}>10%</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected || isSpin} onClick={() => onClickBetPrice(25)}>25%</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected || isSpin} onClick={() => onClickBetPrice(50)}>50%</button>
              <button className="bg-[#34383c] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500" disabled={!isItemSelected || isSpin} onClick={() => onClickBetPrice(80)}>Max</button>
            </div>
          </div>
          <div className="w-full md:aspect-square relative p-8">
            <CircularProgress percentage={percentVal} isSpin={isSpin} stopDegree={stopDegree} onSpinFinish={onSpinFinish} data={selectedItemData}/>
            <div className="fixed md:hidden bottom-0 left-0 w-full h-[150px] bg-black z-[90] opacity-50"></div>
            <div className="fixed md:absolute bottom-0 md:bottom-0 left-0 w-full flex flex-col md:flex-row md:items-center md:justify-center gap-2 z-[99] md:z-[1] px-4 py-8 md:px-0 md:py-0">
              <button
                className="bg-[#4ade80] w-full md:w-[40%] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500"
                onClick={onClickSpin}
                disabled={!isItemSelected || isSpin}
              >
                Spin for ${betPriceVal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </button>
              <button
                className="bg-[#34383c] w-full md:w-[40%] rounded-md text-white font-semibold p-2 disabled:cursor-not-allowed disabled:text-gray-500"
                onClick={onClickDemoSpin}
                disabled={!isItemSelected || isSpin}
              >
                Demo Spin
              </button>
            </div>
          </div>
          <div className="w-full hidden md:block relative border border-4 border-[#5a5e6233] overflow-hidden rounded-lg p-8">
            <div className={`absolute -top-32 left-1/2 -translate-x-1/2 mx-auto ${itemBackColorArray[0]} opacity-[0.1] w-5/6 aspect-square rounded-full blur-2xl`}></div>
            {isItemSelected ?
              <div>
                <div className="absolute top-4 right-4 bg-[#34383c] p-2 rounded-xl cursor-pointer" onClick={() => onClickViewItem(selectedItemData)}>
                  <ViewSVG className="h-4 w-auto text-gray-300 z-10" />
                </div>
                <img src={`./images/items/${selectedItemData?.imageUrl}`} className="w-3/5 mx-auto aspect-square relative mt-16" />
                <p className="font-semibold text-md text-white truncate mt-8">{selectedItemData?.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold text-[#5a5e62] text-lg">${selectedItemData?.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <span className="font-bold text-yellow-600 text-xl">x{(92.59 / percentVal).toFixed(2)}</span>
                </div>
              </div>
              :
              <div>
                <img src="./duelpack-logo.svg" alt="Wecazoo Logo" className="w-3/5 mx-auto aspect-square relative mt-16" />
                <p className="font-semibold text-md text-white truncate mt-8">Select a product below to get started</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold text-[#5a5e62] text-lg">$0.00</span>
                  <span className="font-bold text-yellow-600 text-xl">x0.00</span>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-16 md:mt-8 gap-2">
          <div className="relative">
            <input
              placeholder="Search"
              className="rounded-md md:rounded-full bg-[#34383c] w-full md:w-[400px] py-2 pl-[40px] placeholder-bold"
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
              className="rounded-md md:rounded-full bg-[#34383c] w-full md:w-[300px] py-2 pl-[100px] pr-[10px] placeholder-bold text-right"
              value={maxPriceVal}
              onChange={onMaxPriceValueChange}
              onBlur={onMaxPriceInputBlur}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onMaxPriceInputBlur();
                }
              }}
            />
            <button className="absolute h-[30px] left-[5px] top-[5px] bg-[#5a5e62] rounded-full text-white font-semibold px-2" onClick={onClickMaxPrice}>Max Price</button>
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
        <div className="flex items-center justify-between mt-4 pb-4">
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
