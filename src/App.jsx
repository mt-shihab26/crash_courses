import TransactionAdd from "./components/TransactionAdd.jsx";
import Balance from "./components/Balance.jsx";
import Header from "./components/Header.jsx";
import TransactionList from "./components/TransactionList.jsx";
import { AccountProvider } from "./contexts/accountContext.jsx";
import { HistoryProvider } from "./contexts/historyContext.jsx";

const App = () => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#F7F7F7]">
            <AccountProvider>
                <HistoryProvider>
                    <div className="mt-5 flex w-[355px] flex-col space-y-10 pb-20">
                        <Header />
                        <Balance />
                        <TransactionList />
                        <TransactionAdd />
                    </div>
                </HistoryProvider>
            </AccountProvider>
        </div>
    );
};

export default App;
