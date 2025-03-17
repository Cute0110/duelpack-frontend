"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

import Packs from "@/public/images/packs.svg";
import Battles from "@/public/images/battles.svg";
import Forge from "@/public/images/forge.svg";
import Events from "@/public/images/events.svg";
import Rewards from "@/public/images/rewards.svg";
import FAQSVG from "@/public/images/faq.svg";
import UpArrow from "@/public/images/upArrow.svg";
import DownArrow from "@/public/images/downArrow.svg";
import EachPack from "./EachPack";
import PackItemsModal from "./Modals/PackItemsModal";

import axiosInstance from "@/lib/action";
import { dot, eot } from "@/lib/cryptoUtils";

import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const RandingPage = ({ packsData, forgeData }: any) => {
  const imageURL = ["battle.png", "pack.png", "forge.png"];

  const [packs, setPacks] = useState([]);
  const [forge, setForge] = useState([]);
  const [activeComment, setActiveComment] = useState(0);

  
  const [api, contextHolder] = notification.useNotification();
  const [itemsData, setItemsData] = useState([]);
  const [isPackItemsModalOpen, setIsPackItemsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackData, setSelectedPackData] = useState(null);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  const commentsLeftData = [
    { title: 'What is DuelPack?', content: 'DuelPack revolutionizes online shopping with its "Gamified-Shopping" approach, offering digital "Packs" filled with a diverse selection of products from top brands you know and love. All packs display their price, product range, and odds before you open them, ensuring a secure, transparent, and exhilarating shopping experience.', key: 1 },
    { title: 'Is DuelPack safe and fair to use?', content: 'bsolutely! DuelPack was launched in 2022 to set a new standard of integrity, utilizing EOS Blockchain technology to guarentee security. We are dedicated to delivering a fair and enjoyable experience for all users, with a focus on transparency and integrity. For more details on our commitment to fairness and how our algorithm operates, visit our dedicated page at https://duelpack.com/fairness.', key: 2 },
    { title: 'Is DuelPack trustworthy?', content: 'Certainly. Trust and security are fundamental to DuelPack. Our vibrant community and responsive customer service demonstrate our commitment to providing a safe and dependable platform. You can rely on DuelPack for a trustworthy and secure experience every time.', key: 3 },
    { title: 'How do I open a pack?', content: 'Explore our range of packs under the "Packs" tab at the top of the page. Each pack features a unique design and theme, displaying the products and their winning probabilities. Once you have found your desired pack and have sufficient balance, click "Open" to watch the animation and discover the product you have won. Landing on a gold DuelPack icon means you have hit the jackpot!', key: 4 },
  ]
  const commentsRightData = [
    { title: 'How do I deposit?', content: 'To deposit funds, simply click on the "Deposit" button located at the top right corner of the page. You will then see a range of deposit options to choose from. You can add more funds at any time by clicking the same button. Please be aware that card deposits may be unavailable for certain users due to factors such as location, or account type. If you experience any issues with card deposits, feel free to try again later.', key: 5 },
    { title: 'Missing Crypto deposit?', content: 'If your crypto deposit has not been credited yet, do not worry. Here is what to do: Check your wallet history from the external wallet you used to send the funds. Locate the transaction to DuelPack and find the transaction hash (txid). Transaction hashes are unique strings of numbers and letters, resembling random sequences like: 6146ccf6a66d994f7c363db875e31ca35581450a4bf6d3be6cc9ac79233a69d0. If you are unsure how to find your transaction hash (txid), you might also find a link to platforms like etherscan.io, providing transaction details. Once you have your DuelPack Account ID and transaction hash (txid), reach out to our support team at support@duelpack.com for assistance. We are here to help resolve any issues and ensure your funds are credited promptly.', key: 6 },
    { title: 'What are Battles?', content: 'Battles offer a thrilling alternative to opening packs individually and are highly favored by our users. Compete against other players by opening the same packs against each other, where the individual who accumulates the most value in total takes it all. Visit the "Battles" tab to join or create your own. Select the number of opponents, packs, and game mode to start the battle for an exhilarating experience. Quickly kickstart the action by summoning a bot to join the battle instead of waiting for players to join.', key: 7 },
    { title: 'How do I get Support?', content: 'If you need further assistance, do not hesitate to reach out to our support team. You can contact us anytime at support@duelpack.com. We are here to help resolve any queries or concerns you may have.', key: 8 },
  ]

  useEffect(() => {
    setPacks(packsData.data);
  }, [packsData]);

  useEffect(() => {
    setForge(forgeData.data);
  }, [forgeData]);

  const onClickComments = (key: any) => {

    console.log(activeComment, key);
    if (activeComment == key) { setActiveComment(0) }
    else { setActiveComment(key) }
  }

  const onClickViewItem = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/api/items_list', eot({ start: 0, length: 0, search: 0, order: "order", dir: "asc", packID: data.id }));
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

    setSelectedPackData(data);
    setIsPackItemsModalOpen(true);
  }

  return (
    <>
      {contextHolder}
      {isPackItemsModalOpen && (<PackItemsModal packData={selectedPackData} itemsData={itemsData} setIsPackItemsModalOpen={setIsPackItemsModalOpen} />)}
      <div className="container mt-[75px]">
        <div className="flex justify-between gap-6">
          <div className="w-full md:calc-100-minus-250">
            <div className="w-full">
              <div className="flex flex-col md:flex-row gap-4 w-full pt-8">
                <div className="relative flex-1 bg-[#161a1d] rounded-lg">
                  <img src={`./images/${imageURL[0]}`} className="w-full h-auto rounded-lg" />
                  <div className="absolute top-4 left-4 z-10 flex items-center justify-between gap-2 bg-[#22272b] px-2 py-[4px] rounded-md">
                    <Battles className="h-5 w-auto text-[#90cdf4]" />
                    <span className="text-[#90cdf4] font-semibold text-sm">Battle</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-semibold text-lg">
                    <div>Create Your</div>
                    <div>First Battle!</div>
                  </div>
                </div>
                <div className="relative flex-1 bg-[#161a1d] rounded-lg">
                  <img src={`./images/${imageURL[1]}`} className="w-full h-auto rounded-lg" />
                  <div className="absolute top-4 left-4 z-10 flex items-center justify-between gap-2 bg-[#22272b] px-2 py-[4px] rounded-md">
                    <Packs className="h-5 w-auto text-[#7c4be2]" />
                    <span className="text-[#7c4be2] font-semibold text-sm">Packs</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-semibold text-lg">
                    <div>Open Your</div>
                    <div>First Pack!</div>
                  </div>
                </div>
                <div className="relative flex-1 bg-[#161a1d] rounded-lg">
                  <img src={`./images/${imageURL[2]}`} className="w-full h-auto rounded-lg" />
                  <div className="absolute top-4 left-4 z-10 flex items-center justify-between gap-2 bg-[#22272b] px-2 py-[4px] rounded-md">
                    <Forge className="h-5 w-auto text-[#53e296]" />
                    <span className="text-[#53e296] font-semibold text-sm">Forge</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-semibold text-lg">
                    <div>Try Out The Forge!</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Packs className="h-8 w-auto text-gray-600" />
                  <span className="text-lg font-bold">New Packs</span>
                </div>
                <div>
                  <button className="bg-[#34383c] px-4 py-2 rounded-lg font-bold text-sm">View All Packs</button>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 mt-4">
                {packs.map((data: any, index) => (
                  <EachPack key={index} data={data} onClickViewItem={onClickViewItem}/>
                ))}
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Battles className="h-8 w-auto text-gray-600" />
                  <span className="text-lg font-bold">Battle Highlights</span>
                </div>
                <div>
                  <button className="bg-[#34383c] px-4 py-2 rounded-lg font-bold text-sm">View All Battles</button>
                </div>
              </div>
              <div className="w-full mt-4 bg-[#22272b] h-[100px] rounded-xl text-center p-[35px]">
                No Battles
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Forge className="h-8 w-auto text-gray-600" />
                  <span className="text-lg font-bold">Forge Highlights</span>
                </div>
                <div>
                  <button className="bg-[#34383c] px-4 py-2 rounded-lg font-bold text-sm">View All Products</button>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 mt-4">
                {forge.map((data: any, index) => (
                  <div className="rounded-xl cursor-pointer group bg-[#22272b] relative py-4" key={index}>
                    <div className="flex items-center justify-between w-full px-4">
                      <div className="text-[#f6e05e] font-semibold">{data.multi.toFixed(2)}X</div>
                      <img src={data.user.avatarURL} className="rounded-full w-6" />
                    </div>
                    <img src={`./images/forge/${data.imageUrl}`} className="rounded-xl" />
                    <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-8">{data.name}</p>
                    <p className="w-full text-center font-semibold text-lg">${data.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FAQSVG className="h-6 w-auto text-gray-600" />
                  <span className="text-lg font-bold">How DuelPack Works</span>
                </div>
                <div>
                  <button className="bg-[#34383c] px-4 py-2 rounded-lg font-bold text-sm">View All Products</button>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="rounded-lg border border-gray-600 h-[350px] md:h-auto md:aspect-square relative" style={{ backgroundImage: "radial-gradient(60.6% 55.06% at 50% 20.25%,rgba(66,153,225,.12) 0,rgba(66,153,225,0) 100%)" }}>
                  <div className="flex items-center justify-center absolute h-8 w-8 top-4 left-4 rounded-full border-2 border-[#90cdf4] text-[#90cdf4]">1</div>
                  <img src={"./images/openPacks.webp"} className="h-[50%] mt-12 mx-auto" />
                  <p className="text-center font-bold text-xl mt-2">Open Packs</p>
                  <p className="text-center text-md mt-2 text-gray-400">Find your perfect packs & experience</p>
                  <p className="text-center text-md mt-2 text-gray-400">the online excitement!</p>
                </div>
                <div className="rounded-lg border border-gray-600 h-[350px] md:h-auto md:aspect-square relative" style={{ backgroundImage: "radial-gradient(60.6% 55.06% at 50% 20.25%,rgba(66,153,225,.12) 0,rgba(66,153,225,0) 100%)" }}>
                  <div className="flex items-center justify-center absolute h-8 w-8 top-4 left-4 rounded-full border-2 border-[#90cdf4] text-[#90cdf4]">2</div>
                  <img src={"./images/winItems.webp"} className="h-[50%] mt-12 mx-auto" />
                  <p className="text-center font-bold text-xl mt-2">Open Packs</p>
                  <p className="text-center text-md mt-2 text-gray-400">Find your perfect packs & experience</p>
                  <p className="text-center text-md mt-2 text-gray-400">the online excitement!</p>
                </div>
                <div className="rounded-lg border border-gray-600 h-[350px] md:h-auto md:aspect-square relative" style={{ backgroundImage: "radial-gradient(60.6% 55.06% at 50% 20.25%,rgba(66,153,225,.12) 0,rgba(66,153,225,0) 100%)" }}>
                  <div className="flex items-center justify-center absolute h-8 w-8 top-4 left-4 rounded-full border-2 border-[#90cdf4] text-[#90cdf4]">3</div>
                  <img src={"./images/cashOrClaim.webp"} className="h-[50%] mt-12 mx-auto" />
                  <p className="text-center font-bold text-xl mt-2">Open Packs</p>
                  <p className="text-center text-md mt-2 text-gray-400">Find your perfect packs & experience</p>
                  <p className="text-center text-md mt-2 text-gray-400">the online excitement!</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="flex w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  {commentsLeftData.map((data: any, index) => [
                    <div className="bg-[#22272b] rounded-xl py-6 px-4" key={data.key} onClick={() => onClickComments(data.key)}>
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => onClickComments(data.key)}>
                        <span className="font-bold">{data.title}</span>
                        {activeComment != data.key ? <DownArrow className="h-6 w-auto text-gray-600" /> : <DownArrow className="h-6 w-auto text-gray-600 rotate-180" />}
                      </div>
                      {activeComment == data.key ? <div className="mt-4">{data.content}</div> : <></>}
                    </div>
                  ])}
                </div>
                <div className="space-y-4">
                  {commentsRightData.map((data: any, index) => [
                    <div className="bg-[#22272b] rounded-xl py-6 px-4" key={data.key}>
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => onClickComments(data.key)}>
                        <span>{data.title}</span>
                        {activeComment != data.key ? <DownArrow className="h-6 w-auto text-gray-600" /> : <DownArrow className="h-6 w-auto text-gray-600 rotate-180" />}
                      </div>
                      {activeComment == data.key ? <div className="mt-4">{data.content}</div> : <></>}
                    </div>
                  ])}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[250px]">Slide Show</div>
        </div>
      </div>
    </>
  );
};

export default RandingPage;
