import { cn } from "@/utils/cn";
import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {
    className?: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}

export default function Searchbar(prop: Props) {
    return (
        <form onSubmit={prop.onSubmit}
            className={cn(
                "flex relative items-center justify-center h-10",
                prop.className
            )}>
            <input type="text"
                value={prop.value}
                onChange={prop.onChange}
                placeholder="Search for a Location..."
                className="px-4 py-2 w-[230px] border border-[gray-300] rounded-l-md focus:outline-none focus:border-blue-500 h-full"
            />
            <button className="px-4 py-[9px] bg-[#1F7A8C] text-white rounded-r-md focus:outline-none hover:bg-[#1F7A8C] h-full">
                <FiSearch />
            </button>
        </form>
    )

}