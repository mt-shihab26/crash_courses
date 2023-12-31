export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";

const addTransactionToLocalStorage = transactions => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
};

export const getTransactionToLocalStorage = () => {
    const transactions = localStorage.getItem("transactions");
    return !transactions ? [] : JSON.parse(transactions);
};

export default (state, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            const filteredTransactions = state.transactions.filter(
                t => t.id !== action.payload
            );
            addTransactionToLocalStorage(filteredTransactions);
            return {
                ...state,
                transactions: filteredTransactions,
            };
        case ADD_TRANSACTION:
            const addedTransactions = [...state.transactions, action.payload];
            addTransactionToLocalStorage(addedTransactions);
            return {
                ...state,
                transactions: addedTransactions,
            };
        default:
            return state;
    }
};
