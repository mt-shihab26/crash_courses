import { useState } from "react";
import { useAccount } from "../contexts/accountContext.jsx";
import { useHistory } from "../contexts/historyContext.jsx";
import Heading2 from "./Heading2.jsx";
import Input from "./Input.jsx";

const TransactionAdd = () => {
    const [amount, setAmount] = useState("");
    const [text, setText] = useState("");

    const {
        balance: [balance, setBalance],
        income: [income, setIncome],
        expanse: [expanse, setExpanse],
    } = useAccount();

    const [history, setHistory] = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const amountNum = Number(amount);
        if (amountNum === 0) {
            return;
        }
        if (text === "") {
            return;
        }
        if (amountNum > 0) {
            setBalance(balance + amountNum);
            setIncome(income + amountNum);
        } else {
            const amountNumPositive = -amountNum;
            if (balance < amountNumPositive) {
                return;
            }
            setBalance(balance - amountNumPositive);
            setExpanse(expanse + amountNumPositive);
        }
        setHistory([...history, { text, amount }]);
        setText("");
        setAmount("");
    };
    return (
        <div>
            <Heading2>AddTransaction</Heading2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 py-4"
            >
                <Input
                    id="text"
                    type="text"
                    text={"Text"}
                    placeholder="Enter text..."
                    value={text}
                    setFunc={setText}
                />
                <Input
                    id="amount"
                    type="number"
                    text={
                        <>
                            Amount <br />
                            (negative - expense, positive - income)
                        </>
                    }
                    placeholder="Enter amount..."
                    value={amount}
                    setFunc={setAmount}
                />
                <button className="rounded-sm bg-[#9C88FF] py-2 text-white">
                    Add transaction
                </button>
            </form>
        </div>
    );
};

export default TransactionAdd;
