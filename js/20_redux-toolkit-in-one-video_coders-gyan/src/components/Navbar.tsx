import { FC } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../slice/cartSlice";
import { State, useAppSelector } from "../store";

const Navbar: FC = () => {
    const cart = useAppSelector((state: State) => state.cart);
    const totalProducts = cart.reduce((sum: number, cartItem: CartItem) => sum + cartItem.count, 0);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Link to="/" className="logo">
                SHOPPING CART
            </Link>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart Items: {totalProducts}</span>
            </div>
        </div>
    );
};

export default Navbar;
