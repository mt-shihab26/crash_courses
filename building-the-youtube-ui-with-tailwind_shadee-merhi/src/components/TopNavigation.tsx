import {
    BsYoutube,
    BsFillMicFill,
    BsCameraVideo,
    BsBell,
} from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const TopNavigation = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-6">
                <HiOutlineMenu size={26} />
                <div className="flex items-center gap-1">
                    <BsYoutube size={30} className="text-red-500" />
                    <span className="text-xl font-semibold">YouTube</span>
                </div>
            </div>
            <div className="flex min-w-[300px] items-center lg:w-[750px]">
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search"
                    className="z-50 hidden w-full  rounded-l-3xl border border-zinc-700 bg-zinc-900 p-3 py-2 placeholder:text-zinc-400 focus:outline-double focus:outline-blue-700 md:block"
                />
                <div className="cursor-pointer p-5 py-2 md:rounded-r-3xl md:bg-[#222222]">
                    <AiOutlineSearch size={26} />
                </div>
                <div className="ml-2 cursor-pointer bg-[#222222] p-3 hover:bg-zinc-700 md:rounded-full">
                    <BsFillMicFill size={18} />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex cursor-pointer items-center p-3 hover:bg-zinc-700 md:rounded-full">
                    <BsCameraVideo size={22} />
                </div>
                <div className="flex cursor-pointer items-center p-3 hover:bg-zinc-700 md:rounded-full">
                    <BsBell size={22} />
                </div>
                <div className="flex cursor-pointer items-center">
                    <img
                        src="https://pbs.twimg.com/profile_images/1535005978831519744/l_w8skl2_400x400.jpg"
                        height={40}
                        width={40}
                        alt=""
                        className=" rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;
