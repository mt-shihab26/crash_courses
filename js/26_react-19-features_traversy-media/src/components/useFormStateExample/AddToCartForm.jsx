import { useFormState } from "react-dom";

const addToCard = (prevState, queryData) => {
    const itemId = queryData.get("itemID");
    if (itemId === "1") {
        return "Add to card";
    } else {
        return "Could not add to card, item is out of stock";
    }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
    const [message, action] = useFormState(addToCard, "initial message");
    return (
        <form action={action} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add to Cart
            </button>
            <div className="mt-4 text-sm text-gray-700">{message}</div>
        </form>
    );
};

export default AddToCartForm;
