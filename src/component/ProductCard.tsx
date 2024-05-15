import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Increment from "./Increment";
import { type Product } from "../types/interfaces_product";
import { addToCart, loadCartInstance, onDecrementItemToCard, removeFromCart } from "../store/features/cartSlice";
import { useDispatch } from "react-redux";

type productCard = {
    product: Product,
}
function ProductCard({ product }: productCard) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAdd, setIsAdded] = useState(false);
    const [count, setCount] = useState(0);
    // () => to add product to Cart Store
    const addProductToCart = (product: Product): void => {
        const productItem = {
            id: product.id,
            name: product.name,
            imageURL: product.imageURL,
            price: product.price,
            description: product.description,
            categoryId: product.categoryId,
            qty: 1,
        };
        dispatch(addToCart(productItem));
        setIsAdded(true);
        setCount(prev => prev + 1);
    }
    const onIncrementCount = () => {
        addProductToCart(product)
        dispatch(loadCartInstance());
    };
    const onDecrementCount = () => {
        if (count > 1) {
            setCount(prev => prev > 1 ? prev - 1 : 1);
            dispatch(onDecrementItemToCard(product));
            dispatch(loadCartInstance());
        } else {
            onDeleteProduct();
        }
    };
    const onDeleteProduct = () => {
        setIsAdded(false);
        setCount(0);
        dispatch(removeFromCart(product));
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

    useEffect(() => {
        // to check while component is loading is this item added or not to show increment
        const cs = localStorage.getItem("cart");
        dispatch(loadCartInstance());
        if (product.qty) {
            if (product.qty > 1) setIsAdded(true)
        }
        if (cs) {
            const cartLocalStorage = JSON.parse(cs);
            cartLocalStorage.products.map((ci: Product) => {
                if (ci.id === product.id) {
                    setIsAdded(true)
                    setCount(Number(ci.qty))
                }
            });
        }
    }, [])



    // Return JSX     
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative"
        >
            {/*  */}
            <Link  onClick={() => onClickProductDetails(product)}  to={`/productDetails/${product.id}`}
                className="block w-full relative mb-4 overflow-hidden rounded-lg"
            >
                <img
                    src={product.imageURL}
                    className="w-full h-[190px] sm:h-auto aspect-4/3 object-cover rounded-lg cursor-pointer hover:scale-110 transition-transform"
                    alt="product"
                    loading="lazy"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                    }}
                />
            </Link>
            <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
                <div className="flex items-center justify-center flex-col gap-1 w-full">
                    <h2 className="text-sm">
                        <a
                            className="block text-primary text-center cursor-pointer"
                        >{product.name}</a>
                    </h2>
                    <p className="text-center line-clamp-2">
                        <small className="text-xs">{product.description}</small>
                    </p>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
                    <a className="text-xs text-gray-500 underline" href="#">تصنيف اول</a>
                    <a className="text-xs text-gray-500 underline" href="#">تصنيف ثاني</a>
                </div>
            </div >
            <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md"> {product.price} </span>
                <span
                    className="font-medium text-sm line-through text-gray-300"
                >{product.price * 1.5} </span>
                SAR
            </div>

            {!isAdd ?
                <button
                    onClick={() => addProductToCart(product)}
                    type="button"
                    className="w-full bg-primary text-white p-2 text-md rounded-md hover:bg-sky-800 transition-colors"
                > إضافة للسلة</button >
                :
                <Increment
                    isFull={true}
                    itemCounter={count}
                    handleIncrement={onIncrementCount}
                    handleDecrement={onDecrementCount}
                    handleDeleteProduct={onDeleteProduct}
                />}
        </div>
    )
}

export default ProductCard