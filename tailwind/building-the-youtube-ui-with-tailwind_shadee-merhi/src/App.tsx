import SideNavigation from "@components/SideNavigation";
import TopNavigation from "@components/TopNavigation";

const App = () => {
    return (
        <div className="flex h-screen w-screen flex-col">
            <TopNavigation />
            <div className="flex flex-1 border-2 border-blue-500">
                <SideNavigation />
                <div className="border-2 border-lime-300">PAGE</div>
            </div>
        </div>
    );
};

export default App;
