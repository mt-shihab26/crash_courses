import { createContext, useContext, useState } from "react";

const AccountContext = createContext({
    balance: [0, () => {}],
    income: [0, () => {}],
    expanse: [0, () => {}],
});

export const useAccount = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
    const [balance, setBalance] = useState(1000);
    const [income, setIncome] = useState(1500);
    const [expanse, setExpanse] = useState(500);
    return (
        <AccountContext.Provider
            value={{
                balance: [balance, setBalance],
                income: [income, setIncome],
                expanse: [expanse, setExpanse],
            }}
        >
            {children}
        </AccountContext.Provider>
    );
};
