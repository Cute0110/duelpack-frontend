import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import ViewSVG from "@/public/images/view.svg";

const EachPack = ({ data, onClickViewItem }: any) => {
    return (
        <div className="rounded-xl cursor-pointer group relative">
            <div className="absolute top-4 right-4 bg-[#1d2125] p-2 rounded-xl opacity-0 group-hover:opacity-100" onClick={() => onClickViewItem(data)}>
                <ViewSVG className="h-4 w-auto text-gray-300 z-10" />
            </div>
            <img src={`./images/packs/${data.imageUrl}`} className="rounded-xl" />
            <p className="text-center mt-4 font-semibold text-lg">${data.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
    );
};

export default EachPack;
