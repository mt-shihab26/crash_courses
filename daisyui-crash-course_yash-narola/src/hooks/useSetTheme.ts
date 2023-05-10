import { useState, useEffect } from "react";

const useSetTheme = (elementId: string, defaultTheme: string = "dark") => {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        document.getElementById(elementId)?.setAttribute("data-theme", theme);
    }, [theme]);

    return {
        setTheme,
        theme,
    };
};

export default useSetTheme;
