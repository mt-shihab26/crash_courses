import { createContext, useContext, useState } from "react";

const HistoryContext = createContext([[{ text: "", amount: 0 }], () => {}]);

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([
        { text: "First", amount: 1000 },
        { text: "Second", amount: 500 },
        { text: "Food", amount: -500 },
    ]);
    return (
        <HistoryContext.Provider value={[history, setHistory]}>
            {children}
        </HistoryContext.Provider>
    );
};
