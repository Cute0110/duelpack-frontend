import axiosInstance from '@/lib/action';
import { dot, eot } from '@/lib/cryptoUtils';
import React, { useEffect, useRef, useState } from 'react';

const blockSpace = 16;
const blockHeight = 218 + blockSpace;

const SideSliderScreen = ({ }: any) => {
    const containerRef: any = useRef(null);
    const [sliderItems, setSliderItems]: any = useState([]);
    const [offset, setOffset] = useState(0);
    const [tempItem, setTempItem]: any = useState(null);

    useEffect(() => {
        const interval = setInterval(async () => {
            const randomBool = Math.random() < 0.5;

            if (randomBool) {
                const response = await axiosInstance.post('/api/side_slider_pack_items', eot({ count: 1 }));
                const result = dot(response.data);

                if (result.status == 1) {
                    setTempItem(result.data[0]);
                    //Scroll down by one item height after render
                    setTimeout(async () => {
                        setOffset((prev: any) => {
                            return prev + blockHeight;
                        });
                    }, 1000);
                    setTimeout(async () => {
                        setSliderItems((prev: any) => {
                            const newItem = result.data[0];
                            const temp = [newItem, ...prev];
                            temp.pop();
                            return temp; // add to top
                        });
                        setOffset((prev: any) => {
                            return 0;
                        });
                    }, 1500);
                }
            }
        }, 3000); // every 5 seconds

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.post('/api/side_slider_pack_items', eot({ count: 20 }));

                const result = dot(response.data);
                if (result.status == 1) {
                    const tempData = result.data;
                    setSliderItems([...tempData]);
                }
            } catch (err) {
            } finally {
            }
        }

        fetchData();
    }, [])

    return (
        <div ref={containerRef} className='w-full h-full overflow-y-hidden p-4 relative'>
            {tempItem &&
                <div className="absolute z-[1] left-1/2-translate-x-1/2 rounded-xl w-[218px] aspect-square cursor-pointer group bg-[#22272b] py-4 mt-4">
                    <div className="flex items-center justify-end w-full px-4">
                        <img src="/images/users/default.png" className="rounded-full w-6" />
                    </div>
                    <img src={`/images/items/${tempItem?.item.imageUrl}`} className="rounded-xl h-24 mx-auto" />
                    <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-8">{tempItem?.item.name}</p>
                    <p className="w-full text-center font-semibold text-lg">${tempItem?.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            }
            <div
                className={`relative z-[2] ${offset != 0 ? "transition-transform duration-500" : ""}`}
                style={{ transform: `translateY(${offset}px)` }}
            >
                {sliderItems.map((data: any, index: any) =>
                    <div className="group rounded-xl w-full aspect-square cursor-pointer group bg-[#22272b] relative py-4 mt-4 overflow-hidden" key={index}>
                        <div className='transition-all ease-in-out duration-300 group-hover:translate-y-1/2 group-hover:opacity-0'>
                            <div className="flex items-center justify-end w-full px-4">
                                <img src="/images/users/default.png" className="rounded-full w-6" />
                            </div>
                            <img src={`/images/items/${data.item.imageUrl}`} className="rounded-xl h-24 mx-auto" />
                            <p className="w-full text-center font-semibold text-md text-gray-500 truncate px-8">{data.item.name}</p>
                            <p className="w-full text-center font-semibold text-lg">${data.item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>

                        <img src={`/images/packs/${data.pack.imageUrl}`} className="rounded-xl h-full absolute -bottom-full left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-3/4" />
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideSliderScreen;