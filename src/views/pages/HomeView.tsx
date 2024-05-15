import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../component/ProductCard"
import { fetchProducts, getProductsStatus, selectproductsList } from "../../store/features/productSlice";
import { Product } from "../../types/interfaces_product";
import Filter from "../../component/Filter";
function HomeView() {
  const dispatch = useDispatch();
  const productsList = useSelector(selectproductsList);
  const productListStatus = useSelector(getProductsStatus);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (productListStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    setProducts(productsList as []);
  }, [productsList])

  useEffect(() => {
    setFilterProducts(products);
  }, [products])

  useEffect(() => {
    const filterProducts = products.filter(
      (product: Product) => product.name?.toLowerCase().trim().includes(inputValue?.toLowerCase().trim())
    )
    setFilterProducts(filterProducts)



  }, [inputValue])


  return (
    <>
      <Filter
        handleSelect={(e) => console.log(e.target.value)}
        handleChange={(event) => setInputValue(event.target.value)} />

      <div
        className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 scrolling-component"
      >
        {productListStatus === 'loading' && <p>Loading...</p>}
        {productListStatus === 'failed' && <p>Error loading products</p>}
        {productListStatus === 'succeeded' && (
          filterProducts.length > 0 ?
            filterProducts.map((item: Product) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))
            :
            <h2>لا يوجد بيانات</h2>
        )}
      </div>
    </>

  )

}

export default HomeView