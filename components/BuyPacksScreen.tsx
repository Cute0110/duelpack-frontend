import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Check, Zap, RotateCw } from "lucide-react";
import { Divider, notification, Select } from 'antd';
import type { NotificationArgsProps } from 'antd';

import PacksSVG from "@/public/images/packs.svg";
import ItemDetailsModal from "./Modals/ItemDetailsModal";
import PacksModal from "./Modals/PacksModal";
import PackItemsModal from "./Modals/PackItemsModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useAuth } from "@/lib/authContext";
import AuthModal from "./Modals/AuthModal";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const BuyPacksScreen = ({ packsData, itemsData, packId, onBuyItemAction }: any) => {
  const itemBackColorArray = ['bg-yellow-500', 'bg-red-500', 'bg-blue-500', 'bg-gray-500'];
  const carouselSpeed = 100;

  const { isAuthenticated, authData } = useAuth();
  const [api, contextHolder] = notification.useNotification();
  const [packs, setPacks] = useState([]);
  const [addedPackIds, setAddedPackIds] = useState([]);
  const [addedPacks, setAddedPacks]: any = useState([]);
  const [addedPacksTotalPrice, setAddedPacksTotalPrice] = useState(0);
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);
  const [isPacksModalOpen, setIsPacksModalOpen] = useState(false);
  const [isPackItemsModalOpen, setIsPackItemsModalOpen] = useState(false);
  const [isSpinFaster, setIsSpinFaster] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [selectedPackData, setSelectedPackData] = useState(null);
  const [selectedPackItemsData, setSelectedPackItemsData] = useState([]);
  const [carouselItemsData, setCarouselItemsData] = useState([]);
  const [targetPackIds, setTargetPackIds] = useState([]);
  const [carouselApi, setCarouselApi] = useState([useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]);
  const [currentIndexes, setCurrentIndexes] = useState([-1, -1, -1, -1, -1]);
  const [autoplayPlugin, setAutoplayPlugin] = useState([
    React.useRef(Autoplay({ delay: carouselSpeed, stopOnInteraction: false })),
    React.useRef(Autoplay({ delay: carouselSpeed, stopOnInteraction: false })),
    React.useRef(Autoplay({ delay: carouselSpeed, stopOnInteraction: false })),
    React.useRef(Autoplay({ delay: carouselSpeed, stopOnInteraction: false })),
    React.useRef(Autoplay({ delay: carouselSpeed, stopOnInteraction: false })),
  ]);
  const [carouselOptions, setCarouselOptions] = useState([
    { align: "start" as const, loop: true, skipSnaps: true, },
    { align: "start" as const, loop: true, skipSnaps: true, },
    { align: "start" as const, loop: true, skipSnaps: true, },
    { align: "start" as const, loop: true, skipSnaps: true, },
    { align: "start" as const, loop: true, skipSnaps: true, },
  ]);


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
      const tempItems = itemsData.data.filter((data: any) => data.packId == addedPackIdsArray[i]);
      const tempPack: any = packsData.data.find((data: any) => data.id == addedPackIdsArray[i]);
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
    setAddedPackIds(temp);
  }, [packId]);

  useEffect(() => {
    const temp: any = [];
    temp.push(Number(packId));
    if (packsData.count > 0) onAddPacks(temp);
  }, [itemsData]);

  useEffect(() => {
    const temp: any = [];
    temp.push(Number(packId));
    if (itemsData.count > 0) onAddPacks(temp);
    setPacks(packsData.data);
  }, [packsData]);

  const onItemClick = (data: any) => {
    setIsItemDetailsModalOpen(true);
    setSelectedItemData(data);
  }

  const onClickViewItem = (packData: any) => {
    setSelectedPackData(packData);
    setSelectedPackItemsData(itemsData.data.filter((data: any) => data.packId == packData.id))
    setIsPackItemsModalOpen(true);
  }

  const onRemoveId = (id: any) => {
    if (addedPackIds.length > 1) {
      const temp: any = [...addedPackIds];
      const index = temp.indexOf(id);

      if (index !== -1) {
        temp.splice(index, 1); // Remove the element at that index
      }
      setCurrentIndexes([-1, -1, -1, -1, -1]);
      setAddedPackIds(temp);
      onAddPacks(temp);
    }
  }

  const onAddId = (id: any) => {
    if (addedPackIds.length < 5) {
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

  const onClickDemoSpin = () => {
    let spinTemp: any = [];
    for (let i = 0; i < addedPackIds.length; i++) {
      spinTemp.push(true);
    }
    setIsSpin(true);
    setCurrentIndexes([-1, -1, -1, -1, -1]);
    setTargetPackIds([]);
    if (isSpinFaster) {
      const timeoutId = setTimeout(() => {
        setIsSpin((prev) => !prev);
        setTargetPackIds(onGeneratePackId());
      }, 700);
    } else {
      const timeoutId = setTimeout(() => {
        setIsSpin((prev) => !prev);
        setTargetPackIds(onGeneratePackId());
      }, 2000);
    }
  }

  const onClickBuyItem = () => {
    if (isAuthenticated) {
      const generatedIds = onGeneratePackId();
      let temp: any = [];
      for (let i = 0; i < addedPackIds.length; i++) {
        if (window.innerWidth < 768)
          temp.push((carouselApi[i].current.selectedScrollSnap() + 1) % carouselApi[i].current.slideNodes().length)
        else 
          temp.push((carouselApi[i].current.selectedScrollSnap() + 4) % carouselApi[i].current.slideNodes().length)
      }
      setCurrentIndexes(temp);
      setTargetPackIds(generatedIds);
      let addedItems = [];
      for (let i = 0 ; i < generatedIds.length ; i ++) {
        addedItems.push(addedPacks[i].itemsInfo[generatedIds[i]].item.id);
      }
      onBuyItemAction(addedItems, authData.id, addedPacksTotalPrice);
    } else {
      setIsAuthModalOpen(true);
    }
  }

  useEffect(() => {
    if (isSpin == false) {
      let temp: any = [];
      for (let i = 0; i < addedPackIds.length; i++) {
        if (window.innerWidth < 768)
          temp.push((carouselApi[i].current.selectedScrollSnap() + 1) % carouselApi[i].current.slideNodes().length)
        else 
          temp.push((carouselApi[i].current.selectedScrollSnap() + 4) % carouselApi[i].current.slideNodes().length)
      }
      setCurrentIndexes(temp);
    }
  }, [isSpin]);

  // const handleSelect = (api: any, index: number) => {
  //   console.log(isSpin, targetPackIds);
  //   if (isSpin && targetPackIds.length > 0) {
  //     const tempSpinArray: any = [...isSpinArray];
  //     const tempIndexes = [...currentIndexes];
  //     const tempPack: any = addedPacks[index];
  //     const tempItem: any = carouselItemsData[index][(api.selectedScrollSnap() + 4) % api.slideNodes().length];
  //     //newIndexes[index] = api.selectedScrollSnap(); // Update the index of the respective carousel

  //     //console.log(api.selectedScrollSnap());
  //     if (tempItem.itemId == tempPack.itemsInfo[targetPackIds[index]].itemId) {
  //       tempSpinArray[index] = false;
  //       tempIndexes[index] = (api.selectedScrollSnap() + 4) % api.slideNodes().length;
  //       setIsSpinArray(tempSpinArray);
  //       setCurrentIndexes(tempIndexes);

  //       if (!tempSpinArray.includes(true)) {
  //         setIsSpin((prev) => !prev);
  //         setTargetPackIds([]);
  //       }
  //     }
  //   }
  // };

  return (
    <>
      {contextHolder}
      <AuthModal
        isModalOpen={isAuthModalOpen}
        onModalClose={() => setIsAuthModalOpen(false)}
        modalType={true}
      />
      {isItemDetailsModalOpen && (<ItemDetailsModal itemData={selectedItemData} setIsItemDetailsModalOpen={setIsItemDetailsModalOpen} />)}
      {isPacksModalOpen && (<PacksModal packs={packs} setIsPacksModalOpen={setIsPacksModalOpen} addedPackIds={addedPackIds} onAddId={onAddId} onRemoveId={onRemoveId} onClickViewItem={onClickViewItem} />)}
      {isPackItemsModalOpen && (<PackItemsModal packData={selectedPackData} itemsData={selectedPackItemsData} setIsPackItemsModalOpen={setIsPackItemsModalOpen} />)}
      <div className="mt-[75px]">
        {
          carouselItemsData.map((data: any, packIndex: any) => (
            <div key={packIndex}>
              <Carousel
                opts={carouselOptions[packIndex]}
                plugins={isSpin ? [autoplayPlugin[packIndex].current] : []}
                setApi={(api: any) => {
                  carouselApi[packIndex].current = api; // Store the API in the ref
                  // api.on('select', () => handleSelect(api, packIndex)); // Call handleSelect when carousel slide changes
                }}
                className="w-full"
                onPointerDown={(e) => e.preventDefault()}  // Prevent mouse dragging
                onTouchStart={(e) => e.preventDefault()}  // Prevent touch dragging
              >
                <CarouselContent className="">
                  {data.map((itemData: any, itemIndex: any) => (
                    <CarouselItem
                      key={itemIndex}
                      className="pl-4 basis-[33.33%] md:basis-[11.11%]"
                    >
                      {
                        currentIndexes[packIndex] == itemIndex ?
                          <>
                            <div className="relative aspect-square group flex items-center justify-center">
                              <div className={`absolute inset-0 m-auto ${itemBackColorArray[addedPacks[packIndex]?.itemsInfo[targetPackIds[packIndex]].rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-3/5 aspect-square rounded-full blur-xl`}></div>
                              <img src={`./images/items/${addedPacks[packIndex]?.itemsInfo[targetPackIds[packIndex]].item.imageUrl}`} className="w-5/5 aspect-square relative" />
                            </div>
                            <div className="">
                              <p className="w-full text-center font-semibold text-md text-white truncate mt-2">{addedPacks[packIndex]?.itemsInfo[targetPackIds[packIndex]].item.name}</p>
                              <p className="w-full text-center font-semibold text-md text-white truncate">${addedPacks[packIndex]?.itemsInfo[targetPackIds[packIndex]].item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                          </>
                          :
                          <>
                            <div className="relative aspect-square group flex items-center justify-center">
                              <div className={`absolute inset-0 m-auto ${itemBackColorArray[itemData.rarity - 1]} opacity-[0.4] group-hover:opacity-[0.8] transition-opacity duration-500 w-3/5 aspect-square rounded-full blur-xl`}></div>
                              <img src={`./images/items/${itemData.item.imageUrl}`} className="w-3/5 aspect-square relative" />
                            </div>
                            <div className="opacity-0">
                              <p className="w-full text-center font-semibold text-md text-white truncate mt-2">{itemData.item.name}</p>
                              <p className="w-full text-center font-semibold text-md text-white truncate">${itemData.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                          </>
                      }
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <Divider style={{ margin: '10px 0', borderColor: "gray" }} />
            </div>
          ))}
      </div>
      <div className="container pb-8">
        <div className="w-full">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                className="w-40 md:w-44 bg-green-400 hover:bg-green-500 text-white rounded-md py-2 font-bold"
                onClick={onClickBuyItem}
                disabled={isSpin}
              >
                Buy for ${addedPacksTotalPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </button>
              <button type="button" className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md p-2 font-bold" onClick={onClickDemoSpin} disabled={isSpin}>
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
