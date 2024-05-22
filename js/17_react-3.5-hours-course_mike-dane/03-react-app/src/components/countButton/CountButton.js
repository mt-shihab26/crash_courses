import React, { useEffect, useState } from "react";
import "./CountButton.css";

const CountButton = ({ increment = 1, buttonColor = "#508DF5" }) => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + increment)
    };

    const buttonStyle = {
        backgroundColor: buttonColor,
        padding: "20px",
        border: "0px",
        borderRadius: "3px",
        margin: "auto",
        width: "13%",
    }

    useEffect(() => {
        console.log("Only use effect fun called");
    }, []);

    useEffect(() => {
        // if (currentCount >= 15) setCurrentCount(0);
        console.log("Use effect fun called");
    }, [currentCount]);

    return (
        <div className="container">
            <div className="count-display" >{currentCount}</div>
            <div style={buttonStyle} onClick={handleClick} className="increment-button" >+{increment}</div>
        </div >
    )
};

export default CountButton;