import AddTransaction from "./components/AddTransaction.jsx";
import Balance from "./components/Balance.jsx";
import History from "./components/History.jsx";

const App = () => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#F7F7F7]">
            <div className="mt-5 flex w-[355px] flex-col space-y-10 pb-20">
                <h1 className="text-center text-2xl font-bold">
                    Expense Tracker
                </h1>
                <Balance />
                <History />
                <AddTransaction />
            </div>
        </div>
    );
};

export default App;
