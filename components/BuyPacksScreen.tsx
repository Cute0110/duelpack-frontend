import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Check, Zap, RotateCw } from "lucide-react";
import { Divider, notification, Select } from 'antd';
import type { NotificationArgsProps } from 'antd';

import PacksSVG from "@/public/images/packs.svg";
import ItemDetailsModal from "./Modals/ItemDetailsModal";
import PacksModal from "./Modals/PacksModal";
import PackItemsModal from "./Modals/PackItemsModal";
import { useAuth } from "@/lib/authContext";
import AuthModal from "./Modals/AuthModal";
import Link from "next/link";
import ItemSpin from "./ui/ItemSpin";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const BuyPacksScreen = ({ packsInfo, packItemConnectInfo, packId, onBuyItemAction, onUserBalanceChange, isMobile }: any) => {
  const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500'];
  const failedAudioRef = useRef<HTMLAudioElement | null>(null);
  const successAudioRef = useRef<HTMLAudioElement | null>(null);

  const { isAuthenticated, authData } = useAuth();
  const [api, contextHolder] = notification.useNotification();

  const [addedPackIds, setAddedPackIds] = useState([]);
  const [addedPacks, setAddedPacks]: any = useState([]);
  const [addedPacksTotalPrice, setAddedPacksTotalPrice] = useState(0);
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);
  const [isPacksModalOpen, setIsPacksModalOpen] = useState(false);
  const [isPackItemsModalOpen, setIsPackItemsModalOpen] = useState(false);
  const [isSpinFaster, setIsSpinFaster] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  const [spinType, setSpinType] = useState(false);
  const [itemsSpinStatus, setItemsSpinStatus] = useState([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [selectedPackData, setSelectedPackData] = useState(null);
  const [selectedPackItemsData, setSelectedPackItemsData] = useState([]);
  const [carouselItemsData, setCarouselItemsData] = useState([]);
  const [itemSpinSpeed, setItemSpinSpeed]: any = useState([0, 0, 0, 0, 0]);
  const [targetPackIds, setTargetPackIds] = useState([-1, -1, -1, -1, -1]);
  const [carouselApi, setCarouselApi] = useState([useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  const onAddPacks = (addedPackIdsArray: any) => {
    let temp: any = [];
    let carouselTemp: any = [];
    let totalPrice = 0;

    for (let i = 0; i < addedPackIdsArray.length; i++) {
      const tempItems = packItemConnectInfo.data.filter((data: any) => data.packId == addedPackIdsArray[i]);
      const tempPack: any = packsInfo.data.find((data: any) => data.id == addedPackIdsArray[i]);
      temp.push({ packInfo: tempPack, itemsInfo: tempItems });

      totalPrice += tempPack?.price;

      const minItems = 10;
      carouselTemp.push(shuffleArray(tempItems.length >= minItems
        ? tempItems
        : Array.from({ length: minItems }, (_, i) => tempItems[i % tempItems.length])));
    }
    setAddedPacksTotalPrice(totalPrice);
    setCarouselItemsData(carouselTemp);
    setAddedPacks(temp);
    setAddedPackIds(addedPackIdsArray);
  }

  function shuffleArray(array: any) {
    const shuffledArray = [...array]; // Make a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Randomly pick an index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const temp: any = [];
    temp.push(Number(packId));
    onAddPacks(temp);
  }, [packsInfo, packItemConnectInfo]);

  const onItemClick = (data: any) => {
    setIsItemDetailsModalOpen(true);
    setSelectedItemData(data);
  }

  const onClickViewItem = (packData: any) => {
    setSelectedPackData(packData);
    setSelectedPackItemsData(packItemConnectInfo.data.filter((data: any) => data.packId == packData.id))
    setIsPackItemsModalOpen(true);
  }

  const onRemoveId = (id: any) => {
    if (addedPackIds.length > 1) {
      const temp: any = [...addedPackIds];
      const index = temp.indexOf(id);

      if (index !== -1) {
        temp.splice(index, 1); // Remove the element at that index
      }
      setAddedPackIds(temp);
      onAddPacks(temp);
    }
  }

  const onAddId = (id: any) => {
    const checkTemp: any = packItemConnectInfo.data.filter((data: any) => data.packId == id);
    if (addedPackIds.length < 5 && checkTemp.length > 0) {
      const temp: any = [...addedPackIds];
      temp.push(id);

      setAddedPackIds(temp);
      onAddPacks(temp);
    }
  }

  function getRandomWeightedValue(arr: any) {
    // Calculate the total sum of the array values (total percentage weight)
    const totalWeight = arr.reduce((sum: any, current: any) => sum + current, 0);

    // Generate a random number between 0 and totalWeight
    const random = Math.random() * totalWeight;

    // Loop through the array and find the value based on the random number

    let cumulativeWeight = 0;
    for (let i = 0; i < arr.length; i++) {
      cumulativeWeight += arr[i];
      if (random < cumulativeWeight) {
        return i;
      }
    }
  }

  const onGeneratePackId = () => {
    let tempArray: any = [];
    for (let i = 0; i < addedPacks.length; i++) {
      let tempPack: any = addedPacks[i];
      let temp: any = [];
      for (let j = 0; j < tempPack.itemsInfo.length; j++) {
        temp.push(tempPack.itemsInfo[j].percent);
      }
      tempArray.push(getRandomWeightedValue(temp));
    }

    
    return tempArray;
  }

  const onStartSpin = () => {
    console.log("Start");
    let spinStatusTemp: any = [];
    for (let i = 0; i < addedPackIds.length; i++) {
      spinStatusTemp.push(true);
    }
    setItemsSpinStatus(spinStatusTemp);
    setIsSpin(true);
    setTargetPackIds([-1, -1, -1, -1, -1]);
    setItemSpinSpeed([50, 50, 50, 50, 50]);
    if (isSpinFaster) {
      const timeoutId = setTimeout(() => {
        setTargetPackIds(onGeneratePackId());
      }, 700);
    } else {
      const timeoutId = setTimeout(() => {
        setTargetPackIds(onGeneratePackId());
      }, 2000);
    }
  }

  const onClickDemoSpin = () => {
    setSpinType(false);
    onStartSpin();
  }

  const onClickBuyItem = () => {

    if (isAuthenticated) {
      if (authData.balance < addedPacksTotalPrice) {
        openNotification("warning", "Warning", "Deposit first!", "topRight");
      } else {
        onUserBalanceChange(authData.id, (-1 * addedPacksTotalPrice));
        setSpinType(true);
        onStartSpin();
      }
    } else {
      setIsAuthModalOpen(true);
    }
  }

  
  const playAudio = async (flag: any) => {
    if (successAudioRef.current && failedAudioRef.current) {
      try {
        if (flag) await successAudioRef.current.play(); // Try playing the audio
        else await failedAudioRef.current.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  useEffect(() => {
    if (isSpin == false) {
      let flag = false;
      for (let i = 0; i < targetPackIds.length; i ++) {
        if (targetPackIds[i] != -1 && addedPacks[i].itemsInfo[targetPackIds[i]].rarity < 3) {
          flag = true;
          break;
        }
      }

      if (targetPackIds[0] != -1) {
        playAudio(flag);
      }

      if (spinType == true) {
        let addedItems = [];
        for (let i = 0; i < targetPackIds.length; i++) {
          addedItems.push(addedPacks[i].itemsInfo[targetPackIds[i]].item.id);
        }
        onBuyItemAction(addedItems, authData.id, addedPacksTotalPrice);
      }
      setTargetPackIds([-1, -1, -1, -1, -1]);
      setItemSpinSpeed([0, 0, 0, 0, 0]);
    }
  }, [isSpin]);

  const onSpinFinish = (packIndex: any) => {
    setItemsSpinStatus((prevStatus) => {
      let newStatus: any = [...prevStatus]; // Copy the latest state
      newStatus[packIndex] = false; // Modify it
      if (!newStatus.includes(true)) {
        setIsSpin(false);
      }
      return newStatus; // Return the updated state
    });
  };

  return (
    <>
      {contextHolder}
      <AuthModal
        isModalOpen={isAuthModalOpen}
        onModalClose={() => setIsAuthModalOpen(false)}
        modalType={true}
      />
      {isItemDetailsModalOpen && (<ItemDetailsModal itemData={selectedItemData} setIsItemDetailsModalOpen={setIsItemDetailsModalOpen} />)}
      {isPacksModalOpen && (<PacksModal packs={packsInfo.data} setIsPacksModalOpen={setIsPacksModalOpen} addedPackIds={addedPackIds} onAddId={onAddId} onRemoveId={onRemoveId} onClickViewItem={onClickViewItem} />)}
      {isPackItemsModalOpen && (<PackItemsModal packData={selectedPackData} itemsData={selectedPackItemsData} setIsPackItemsModalOpen={setIsPackItemsModalOpen} />)}

      <audio ref={failedAudioRef} src="/sounds/spin/failed.mp3" />
      <audio ref={successAudioRef} src="/sounds/spin/success.mp3" />
      <div className="mt-[75px] pt-4 relative">
        <Link href="/" className="flex items-center absolute top-2 left-[50%] -translate-x-1/2 z-10">
          <img src="./duelpack-logo.svg" alt="Wecazoo Logo" className="h-9 lg:h-11 w-auto" />
          <h1 className="text-xl text-white font-bold ml-2">DuelPack</h1>
        </Link>
        {
          carouselItemsData.map((data: any, packIndex: any) =>
            <ItemSpin
              packItems={addedPacks[packIndex]}
              carouselItems={data}
              key={packIndex}
              packIndex={packIndex}
              stopItemId={targetPackIds[packIndex]}
              startSpeed={itemSpinSpeed[packIndex]}
              onSpinFinish={onSpinFinish}
              isMobile={isMobile}
            />
          )
        }
      </div>
      <div className="container pb-8">
        <div className="w-full">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                className="w-40 md:w-44 bg-[#00bf62] hover:bg-green-500 text-white rounded-md py-2 h-[40px] font-bold"
                onClick={onClickBuyItem}
                disabled={isSpin}
              >
                Buy for ${addedPacksTotalPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </button>
              <button type="button" className="flex h-[40px] items-center gap-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md p-2 font-bold" onClick={onClickDemoSpin} disabled={isSpin}>
                <RotateCw size={20} /><span className="hidden md:block">Demo Spin</span>
              </button>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <button type="button" className="bg-gray-700 hover:bg-gray-600 text-white rounded-md p-2" onClick={() => setIsSpinFaster(!isSpinFaster)} disabled={isSpin}>
                <Zap className={`h-6 w-auto ${isSpinFaster ? "text-yellow-300" : "text-white"}`} />
              </button>
              <button type="button" className="bg-gray-700 hover:bg-gray-600 text-white rounded-md p-2" onClick={() => setIsPacksModalOpen(true)} disabled={isSpin}>
                <PacksSVG className="h-6 w-auto text-white" />
              </button>
            </div>
          </div>
          <div className="w-full">
            {
              addedPacks.map((data: any, index: any) =>
                <div key={index} className="mt-6">
                  <div className="flex items-center gap-2">
                    <PacksSVG className="h-8 w-auto text-white" />
                    <span className="text-lg font-bold">{data.packInfo.name} - ${data.packInfo.price}</span>
                  </div>
                  <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 mt-4">
                    {data.itemsInfo.map((itemData: any, index: any) => (
                      <div className="rounded-xl cursor-pointer group bg-[#22272b] relative p-4 group" key={index} onClick={() => onItemClick(itemData)}>
                        <p className="w-full text-center font-semibold text-lg text-gray-500">{itemData.percent.toFixed(4)}%</p>
                        <div className="relative w-full aspect-square p-4 mt-2">
                          <div className={`absolute inset-0 m-auto ${itemBackColorArray[itemData.rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-3/4 aspect-square rounded-full blur-xl`}></div>
                          <img src={`./images/items/${itemData.item.imageUrl}`} className="w-full aspect-square relative" />
                        </div>
                        <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-8 mt-2">{itemData.item.name}</p>
                        <p className="w-full text-center font-semibold text-lg">${itemData.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPacksScreen;
