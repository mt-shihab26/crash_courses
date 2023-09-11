import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";
import { TfiYoutube } from "react-icons/tfi";

type TMenuItem = {
    icon: IconType;
    text: string;
};

const menuItems: TMenuItem[] = [
    {
        text: "Home",
        icon: HiHome,
    },
    {
        text: "Shorts",
        icon: TfiYoutube,
    },
];

const SideNavigation = () => {
    return (
        <div className="border-2 border-orange-300">
            {menuItems.map(item => (
                <div>
                    <item.icon />
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    );
};

export default SideNavigation;
