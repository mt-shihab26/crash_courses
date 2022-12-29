import { useHistory } from "../contexts/historyContext.jsx";

const TransactionItem = ({ text, amount }) => {
    const [history, setHistory] = useHistory();

    const handleDelete = () => {
        setHistory(history.filter(h => h.text !== text));
    };
    return (
        <div
            className={
                "relative flex transform justify-between border-r-[5px] bg-white p-2 text-gray-600 shadow-lg " +
                (amount > 0 ? "border-r-green-500" : "border-r-red-600")
            }
        >
            <button
                onClick={handleDelete}
                className="absolute -translate-x-6 cursor-pointer bg-[#e74c3c] px-1 py-[3px] text-sm text-white opacity-0 hover:opacity-100 "
            >
                X
            </button>
            <span>{text}</span>
            <span>
                {amount > 0 ? "+" : amount < 0 ? "-" : ""}
                {amount < 0 ? -amount : amount}
            </span>
        </div>
    );
};

export default TransactionItem;
