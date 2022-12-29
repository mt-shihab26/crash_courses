import Heading2 from "./Heading2.jsx";
import Input from "./Input.jsx";

const AddTransaction = () => {
    return (
        <div>
            <Heading2>AddTransaction</Heading2>
            <form className="flex flex-col space-y-4 py-4">
                <Input
                    id="text"
                    type="text"
                    text={"Text"}
                    placeholder="Enter text..."
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
                />
                <button className="rounded-sm bg-[#9C88FF] py-2 text-white">
                    Add transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
