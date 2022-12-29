import { useAccount } from "../contexts/accountContext.jsx";

const Balance = () => {
    const {
        balance: [balance],
        income: [income],
        expanse: [expanse],
    } = useAccount();
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <h2 className="font-bold uppercase">Your Balance</h2>
                <p className="text-4xl font-bold">${balance}</p>
            </div>
            <div className="flex divide-x bg-white px-3 py-5 text-center text-lg font-bold uppercase shadow-md">
                <div className="flex w-1/2 flex-col">
                    <span>Income</span>
                    <span className="text-xl font-normal text-[#29B665]">
                        ${income}
                    </span>
                </div>
                <div className="flex w-1/2 flex-col">
                    <span>Expanse</span>
                    <span className="text-xl font-normal text-[#C34235]">
                        ${expanse}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Balance;
