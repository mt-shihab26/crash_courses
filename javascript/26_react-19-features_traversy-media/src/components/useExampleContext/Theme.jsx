import React, { createContext, useState, use } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => {
                    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
                },
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

const ThemedCard = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <div
            className={`max-w-md mx-auto shadow-md rounded-lg p-6 ${theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
        >
            <h1 className={`text-2xl mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Themed Card
            </h1>
            <p className={theme === "light" ? "text-gray-800" : "text-white"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque libero.
                Nullam mattis metus a sapien tempor, sit amet mollis est facilisis. Phasellus nec
                turpis nec dui venenatis vestibulum. Sed dapibus dapibus justo, at rhoncus risus
                malesuada vel. Proin eget leo id mi ullamcorper rhoncus.
            </p>
            <button
                onClick={toggleTheme}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </button>
        </div>
    );
};

const Theme = () => {
    return (
        <ThemeProvider>
            <ThemedCard />
        </ThemeProvider>
    );
};

export { Theme as UseExampleContext };
