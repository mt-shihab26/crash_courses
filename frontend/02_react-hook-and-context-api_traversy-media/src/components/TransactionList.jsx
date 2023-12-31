import { useExpanse } from "../contexts/expanseStore.jsx";
import Heading2 from "./Heading2.jsx";
import TransactionItem from "./TransactionItem.jsx";

const TransactionList = () => {
    const { transactions } = useExpanse();
    return (
        <div>
            <Heading2>History</Heading2>
            <div className="mt-4">
                <div className="flex flex-col space-y-3">
                    {transactions.map(transaction => {
                        return (
                            <TransactionItem
                                key={transaction.id}
                                transaction={transaction}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TransactionList;
