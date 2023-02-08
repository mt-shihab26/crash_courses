import { useExpanse } from "../contexts/expanseStore.jsx";

const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useExpanse();

    return (
        <div
            className={
                "relative flex transform justify-between border-r-[5px] bg-white p-2 text-gray-600 shadow-lg " +
                (transaction.amount > 0
                    ? "border-r-green-500"
                    : "border-r-red-600")
            }
        >
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className="absolute -translate-x-6 cursor-pointer bg-[#e74c3c] px-1 py-[3px] text-sm text-white opacity-0 hover:opacity-100 "
            >
                X
            </button>
            <span>{transaction.text}</span>
            <span>
                {transaction.amount < 0 ? "-" : "+"}
                {Math.abs(transaction.amount)}
            </span>
        </div>
    );
};

export default TransactionItem;
