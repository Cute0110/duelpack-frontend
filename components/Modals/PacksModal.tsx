import React, { useEffect, useState } from "react";
import { Divide, X, Eye, Minus, Plus, Search, Check } from "lucide-react";
import { Divider, Select } from "antd";
import EachPack from "../EachPack";

const PacksModal = ({ packs, setIsPacksModalOpen, addedPackIds, onClickViewItem, onRemoveId, onAddId }: any) => {
    const sortTypeList = [
        { label: "Newest", value: "Newest" },
        { label: "Most Popular", value: "Most Popular" },
        { label: "Price Low to High", value: "Price Low to High" },
        { label: "Price High to Low", value: "Price High to Low" }
    ]

    const priceRangeList = [
        { label: "All", value: 0, min: 0, max: 999999 },
        { label: "Greater than $500", value: 1, min: 500, max: 999999 },
        { label: "$250.00 - $500.00", value: 2, min: 250, max: 500 },
        { label: "$100.00 - $250.00", value: 3, min: 100, max: 250 },
        { label: "$50.00 - $100.00", value: 4, min: 50, max: 100 },
        { label: "$25.00 - $50.00", value: 5, min: 25, max: 50 },
        { label: "$5.00 - $25.00", value: 6, min: 5, max: 25 },
        { label: "Less than $5.00", value: 7, min: 0, max: 5 },
    ]

    const [searchVal, setSearchVal] = useState("");
    const [selectedSortType, setSelectedSortType] = useState("Newest");
    const [selectedPriceRange, setSelectedPriceRange] = useState(0);
    const [isSortTypeMenuOpen, setIsSortTypeMenuOpen] = useState(false);
    const [filteredPacksData, setFilteredPacksData] = useState([]);

    const onClose = () => {
        setIsPacksModalOpen(false);
    }


    useEffect(() => {
        setFilteredPacksData(packs);
    }, [packs]);

    const onFilterAndSortPack = (searchArg: any, sortArg: any, rangeArg: any) => {
        const tempData = packs.filter((data: any) => data.name.toLowerCase().includes(searchArg.toLowerCase()));

        if (sortArg == "Newest") {
            tempData.sort((a: any, b: any) => a.createdAt - b.updatedAt);
        } else if (sortArg == "Most Popular") {
            tempData.sort((a: any, b: any) => a.createdAt - b.updatedAt);
        } else if (sortArg == "Price Low to High") {
            tempData.sort((a: any, b: any) => a.price - b.price);
        } else if (sortArg == "Price High to Low") {
            tempData.sort((a: any, b: any) => b.price - a.price);
        }

        if (rangeArg == 0) {
            setFilteredPacksData(tempData);
        } else {
            setFilteredPacksData(tempData.filter((data: any) => data.price >= priceRangeList[rangeArg].min && data.price <= priceRangeList[rangeArg].max));
        }
    }

    const onSearchValueChange = (e: any) => {
        setSearchVal(e.target.value);
        if (e.target.value == "") {
            onFilterAndSortPack("", selectedSortType, selectedPriceRange)
        }
    }

    const onSearchEnter = () => {
        onFilterAndSortPack(searchVal, selectedSortType, selectedPriceRange);
    }

    // const onPackTypeChange = (value: any) => {
    //   setSelectedPackType(value);
    // }

    const onSortTypeChange = (value: any) => {
        setSelectedSortType(value);
        onFilterAndSortPack(searchVal, value, selectedPriceRange);
    }

    const onPriceRangeChange = (value: any) => {
        setSelectedPriceRange(value);
        setIsSortTypeMenuOpen(false);
        onFilterAndSortPack(searchVal, selectedSortType, value);
    }


    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[70] tracking-[1px]">
            <div className="w-screen h-screen bg-black opacity-[0.5]" onClick={onClose}></div>
            <div className="absolute top-[75px] max-w-6xl w-[calc(100vw-80px)] h-[calc(100vh-80px)] left-1/2 transform -translate-x-1/2 z-[80] bg-[#1d2125] rounded-xl p-8 overflow-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">Select Pack(s)</div>
                    <X onClick={onClose} className="cursor-pointer" />
                </div>

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
                        <Search className="absolute  h-5 text-white top-[50%] left-[10px] -translate-y-[50%]" />
                    </div>
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
                                        {priceRangeList.map((item, index) => <div key={index} className="flex items-center text-md font-semibold mb-2 cursor-pointer" onClick={() => onPriceRangeChange(item.value)}>{item.value == selectedPriceRange ? (<Check size={20} className="w-[30px]" />) : <div className="w-[30px]"></div>}{item.label}</div>)}
                                    </div>
                                </>
                            )}
                            options={sortTypeList.map((item) => ({ label: <span className="flex items-center text-md font-semibold">{item.value == selectedSortType ? (<Check size={20} className="w-[30px]" />) : <div className="w-[30px]"></div>}{item.label}</span>, value: item.value }))}
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 mt-4">
                    {filteredPacksData.map((data: any, index: any) => (
                        <div className="rounded-xl cursor-pointer group relative" key={index}>
                            <div className="absolute top-4 right-4 bg-[#34383c] p-2 rounded-xl" onClick={() => onClickViewItem(data)}>
                                <Eye className="h-5 w-auto text-gray-300 z-10" />
                            </div>
                            <img src={`./images/packs/${data.imageUrl}`} className="rounded-xl" onClick={() => onAddId(data.id)} />
                            {
                                addedPackIds.filter((id: any) => id == data.id).length == 0 ?
                                    <>
                                        <p className="text-center bg-[#34383c] hover:bg-gray-600 rounded-md p-2 mt-4 font-semibold text-lg" onClick={() => onAddId(data.id)}>${data.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </>
                                    :
                                    <div className="flex items-center justify-between mt-4">
                                        <button type="button" className="p-2 bg-[#34383c] hover:bg-gray-600 rounded-md" onClick={() => onRemoveId(data.id)}><Minus size={20} /></button>
                                        <div>
                                            <p className="text-center font-bold">{addedPackIds.filter((id: any) => id == data.id).length}</p>
                                            <p className="text-[12px] text-gray-600 text-center font-bold">${data.price}</p>
                                        </div>
                                        <button type="button" className="p-2 bg-[#34383c] hover:bg-gray-600 rounded-md" onClick={() => onAddId(data.id)}><Plus size={20} /></button>
                                    </div>

                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PacksModal;
