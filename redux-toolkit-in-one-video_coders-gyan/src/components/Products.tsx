import { FC, useEffect } from "react";
import { cartActions } from "../slice/cartSlice";
import { fetchProducts, Product, PRODUCT_STATUS } from "../slice/productsSlice";
import { State, useAppDispatch, useAppSelector } from "../store";

const Products: FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: State) => state.products);

    const handleAddCart = (product: Product) => {
        dispatch(cartActions.add(product));
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="productsWrapper">
            {products.status === PRODUCT_STATUS.LOADING ? (
                <h1>Loading...</h1>
            ) : products.status === PRODUCT_STATUS.ERROR ? (
                <h1>Error: something went wrong</h1>
            ) : (
                products.data.map((product: any) => (
                    <div className="cart" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAddCart(product)} className="btn">
                            Add to cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Products;
