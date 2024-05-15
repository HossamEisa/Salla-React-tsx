import { useState, useEffect } from "react";
import { Product } from "../../types/interfaces_product";
import { useParams } from "react-router-dom";

function ProductDetails(){


  
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);


  useEffect(() => {
    const fetchProduct = () => {
      const storedProduct = localStorage.getItem("product");
      if (storedProduct) {
        const parsedProduct = JSON.parse(storedProduct);
        setProduct(parsedProduct);
      } else {
        console.error("Product not found in localStorage");
      }
    };

    fetchProduct();
  }, [id]);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(`https://limitless-lake-55070.herokuapp.com/product/`); // Replace 'your-api-url' with your actual API endpoint
  //       if (response.ok) {
  //         const data = await response.json();
  //         const product = await data.find((product: { id: string | undefined; }) => product.id == id);
  //         setProduct(product);
  //       } else {
  //         throw new Error("Failed to fetch product");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProduct();

  //   // Cleanup function
  //   return () => {
  //     // Perform any cleanup if needed
  //   };
  // }, [id]); // Only re-run effect if the ID changes

  return (
    <div className="container">
    <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
      <article className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
        <div>
          <img
            src={product?.imageURL}
            className="w-full h-[250px] sm:h-auto aspect-4/3 object-contain rounded-lg mb-8 sm:mb-0"
            alt="product img"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
            <div className="text-sm text-darker-300 leading-[1.8]">
              <div className="flx flex-col mb-6 gap-2">
                <h2 className="text-xl md:text-3xl">{product?.name}</h2>
              </div>
              <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md">
                SAR {product?.price}

                </span>
                <span className="font-medium text-sm line-through text-gray-300">
                SAR 23.00

                </span>
              </div>
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex shrink-0 items-center justify-center border border-1 border-gray-200 rounded-lg">
              <button
                className="shrink-0 text-md text-gray-500 py-2 px-3 transition-all hover:bg-green-700 rounded-s-lg hover:text-white"
              >
                +
              </button>
              <input
                readOnly
                type="number"
                className="w-[50px] flex-1 text-center appearance-none bg-transparent p-2 focus-visible:outline-none focus-within:border-primary transition-colors"
              />
              <button
                className="shrink-0 py-2 px-3 text-md text-gray-500 transition-all rounded-e-lg hover:bg-red-600 hover:text-white"
              >
                -
              </button>
            </div>
            <button
              className="w-full h-[42px] bg-primary text-white flex-1 p-2 text-md rounded-md "
              type="button"
              onClick={() => addProductToCart(product)}
            >
              إضافة للسلة
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
  );
}

export default ProductDetails;
function setCount(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

function dispatch(arg0: { payload: undefined; type: "cart/loadCartInstance"; }) {
  throw new Error("Function not implemented.");
}

function setIsAdded(arg0: boolean) {
  throw new Error("Function not implemented.");
}

