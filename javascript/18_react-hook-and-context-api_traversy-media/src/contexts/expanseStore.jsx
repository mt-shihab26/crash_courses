import { createContext, useContext, useReducer } from "react";
import expanseReducer, {
    ADD_TRANSACTION,
    DELETE_TRANSACTION,
    getTransactionToLocalStorage,
} from "../reducers/expanseReducer.js";

const initialExpanseState = {
    transactions: getTransactionToLocalStorage(),
};

const ExpanseContext = createContext({
    transactions: initialExpanseState.transactions,
});

export const useExpanse = () => useContext(ExpanseContext);

export const ExpanseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expanseReducer, initialExpanseState);

    const deleteTransaction = transactionId => {
        dispatch({ type: DELETE_TRANSACTION, payload: transactionId });
    };

    const addTransaction = (id, text, amount) => {
        dispatch({
            type: ADD_TRANSACTION,
            payload: {
                id,
                text,
                amount,
            },
        });
    };

    return (
        <ExpanseContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </ExpanseContext.Provider>
    );
};
