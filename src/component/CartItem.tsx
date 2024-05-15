import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Product } from "../types/interfaces_product"
import Increment from "./Increment"
import { addToCart, loadCartInstance, onDecrementItemToCard, removeFromCart } from "../store/features/cartSlice";
import { useDispatch } from "react-redux";


interface Cart {
    cart: Product
}

function CartItem({ cart }: Cart) {
    const dispatch = useDispatch();
    const [count, setCount] = useState<number | undefined>(0);
    useEffect(() => {
        setCount(cart.qty)
    }, []);

    const addProductToCart = (product: Product): void => {
        let productItem = {
            id: product.id,
            name: product.name,
            imageURL: product.imageURL,
            price: product.price,
            description: product.description,
            categoryId: product.categoryId,
            qty: 1,
        };
        dispatch(addToCart(productItem));
        setCount(prev => prev + 1);
    }
    const onIncrementCount = () => {
        addProductToCart(cart)
        dispatch(loadCartInstance());
    };
    const onDecrementCount = () => {
        if (count > 1) {
            setCount(prev => prev > 1 ? prev - 1 : 1);
            dispatch(onDecrementItemToCard(cart));
            dispatch(loadCartInstance());
        } else {
            onDeleteProduct();
        }
    };
    const onDeleteProduct = () => {
        setCount(0);
        dispatch(removeFromCart(cart));
        dispatch(loadCartInstance());
    }
    const onClickProductDetails = (product: Product): void => {
        // navigate(`/productDetails/${product.id}`);
        localStorage.setItem(
          "product",
          JSON.stringify({
            id: product.id,
            name: product.name,
            imageURL: product.imageURL,
            price: product.price,
            description: product.description,
            categoryId: product.categoryId,
            qty: product.qty,
          })
        )
    }; 

    return (
        <div>
            <div
                className="flex items-start md:items-center flex-col md:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100"
            >
                <Link  onClick={() => onClickProductDetails(cart)}  to={`/productDetails/${cart.id}`}
                    className="flex items-start justify-center gap-2 flex- cursor-pointer"
                >
                    <img
                        className="rounded-md w-[35px] h-[35px] object-cover shrink-0 overflow-hidden"
                        src={cart.imageURL}
                        alt="Product Thumb"
                        loading="lazy"
                    />
                    <div className="flex flex-col flex-1 gap-1">
                        <h4>{cart.name}</h4>
                        <div className="flex items-center justify-start gap-2">
                            <b className="ltr">{cart.price}</b>
                            <span
                                className="text-xs text-gray-500"
                            >العدد: {cart.qty}</span>
                        </div>
                    </div>
                </Link>
                <Increment
                    itemCounter={count}
                    handleIncrement={onIncrementCount}
                    handleDecrement={onDecrementCount}
                    handleDeleteProduct={onDeleteProduct}
                />
            </div>
        </div>
    )
}

export default CartItem