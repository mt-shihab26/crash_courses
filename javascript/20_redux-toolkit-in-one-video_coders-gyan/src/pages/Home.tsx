import { FC } from "react";
import Products from "../components/Products";

const Home: FC = () => {
    return (
        <div>
            <h2 className="heading">Welcome to the shopping cart store</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
