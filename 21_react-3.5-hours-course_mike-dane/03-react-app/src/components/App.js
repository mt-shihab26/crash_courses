import React, { useEffect, useState } from 'react';
import Button from './button/Button';
import CountButton from './countButton/CountButton';
import SearchBar from './searchBar/SearchBar';

// const products = [
//     "tooth paste",
//     "tooth brush",
//     "mouth wash",
//     "dental floss",
//     "mouth guard"
// ];

// const countries = [
//     "bangladesh",
//     "india",
//     "usa",
//     "uk",
//     "uae",
// ];

const App = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();
            setProductsState(products.map(products => products.title))
        })();
    }, []);

    const hasProducts = productsState.length > 0;

    return (
        <div>
            {/* <Button>This is button</Button>
            <CountButton increment={100} />
            <CountButton increment={100} /> */}
            {hasProducts ? <SearchBar searchItems={productsState} /> : "Loading..."}
            {/* <SearchBar searchItems={countries} /> */}
            {/* <CountButton increment={1} /> */}
            {/* <CountButton increment={5} /> */}
        </div>
    )
};

export default App;
