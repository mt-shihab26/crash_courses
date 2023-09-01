import { useState } from "react";
import { useExpanse } from "../contexts/expanseStore.jsx";
import Heading2 from "./Heading2.jsx";
import Input from "./Input.jsx";

const range = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const TransactionAdd = () => {
    const [amount, setAmount] = useState("");
    const [text, setText] = useState("");
    const { addTransaction } = useExpanse();

    const handleSubmit = e => {
        e.preventDefault();
        const amountNum = Number(amount);
        if (amountNum === 0) {
            return;
        }
        if (text === "") {
            return;
        }
        addTransaction(range(1, 1000), text, amountNum);
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
