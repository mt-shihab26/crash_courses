import TransactionAdd from "./components/TransactionAdd.jsx";
import Balance from "./components/Balance.jsx";
import Header from "./components/Header.jsx";
import TransactionList from "./components/TransactionList.jsx";
import { ExpanseProvider } from "./contexts/expanseStore.jsx";

const App = () => {
    return (
        <ExpanseProvider>
            <div className="flex min-h-screen flex-col items-center bg-[#F7F7F7]">
                <div className="mt-5 flex w-[355px] flex-col space-y-10 pb-20">
                    <Header />
                    <Balance />
                    <TransactionList />
                    <TransactionAdd />
                </div>
            </div>
        </ExpanseProvider>
    );
};

export default App;
