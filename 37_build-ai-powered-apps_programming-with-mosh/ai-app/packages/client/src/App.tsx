import { useEffect, useState } from "react";

const App = () => {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        fetch("/api/hello")
            .then(r => r.json())
            .then(d => setMessage(d.message));
    }, []);

    return <div>{message}</div>;
};

export default App;
