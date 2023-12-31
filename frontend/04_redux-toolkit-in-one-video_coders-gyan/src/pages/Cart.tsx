import { FC } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../slice/cartSlice";
import { State, useAppSelector } from "../store";

const Cart: FC = () => {
    const cart = useAppSelector((state: State) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId: string) => {
        dispatch(cartActions.remove(productId));
    };
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {cart.map(product => (
                    <div className="cartCard" key={product.data.id}>
                        <img src={product.data.image} alt="" />
                        <h4>{product.data.title}</h4>
                        <h5>{product.data.price}</h5>
                        <h5>{product.count}</h5>
                        <button onClick={() => handleRemove(product.data.id)} className="btn">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
