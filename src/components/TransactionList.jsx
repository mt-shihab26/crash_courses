import { useHistory } from "../contexts/historyContext.jsx";
import Heading2 from "./Heading2.jsx";
import TransactionItem from "./TransactionItem.jsx";

const TransactionList = () => {
    const [history] = useHistory();
    return (
        <div>
            <Heading2>History</Heading2>
            <div className="mt-4">
                <div className="flex flex-col space-y-3">
                    {history.map((node, index) => {
                        return (
                            <TransactionItem
                                key={index}
                                text={node.text}
                                amount={node.amount}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TransactionList;
