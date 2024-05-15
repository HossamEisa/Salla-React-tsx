import { useDispatch, useSelector } from "react-redux";
import { displayCartLoad, loadCartInstance, selectAllCart, selecttotalCost } from "../../store/features/cartSlice";
import CartItem from "../../component/CartItem";
import { Product } from "../../types/interfaces_product";
import { useEffect } from "react";

function CartView() {
  const dispatch = useDispatch();
  const allCart = useSelector(selectAllCart); 
  const totalCost = useSelector(selecttotalCost); 

  useEffect(() => {
    dispatch(loadCartInstance()) // to dispatch load items from storage
    dispatch(displayCartLoad()) // to dispatch load items from storage
  }, [])
  return (
    <div className="container">
      <div className="p-4 bg-white rounded-lg shadow-4xl">
        <div className="flex flex-col mb-6">
          <h2 className="flex items-center justify-start gap-2 font-bold text-2xl">سلة المشتريات</h2>
        </div>
        <div className="flex flex-col">
          {allCart?.products?.length >= 1 ?
            allCart.products.map((item: Product) => (
              <div key={item.id}>
                <CartItem cart={item}></CartItem>
              </div>
            ))
            :
            <div className="text-primary p-5 text-center">
              <span className="text-8xl">
                <i className="sicon-cart22"></i>
              </span>
              <p className="text-2xl mt-4">لا يوجد منتجات</p>
            </div>
          }
        </div>
        <div className="flex items-center justify-between px-4 py-8 border-gray-100 border-t border-b-1">
          <h3 className="font-bold text-xl">اجمالي السلة</h3>

          <span
            className="text-xl font-bold"
          >$ {totalCost.toLocaleString(undefined, {maximumFractionDigits:2})} </span>

        </div>
        <button
          type="button"
          className="w-full bg-primary text-white p-3 text-md rounded-md hover:bg-sky-800 transition-colors"
        >اتمام عملية الدفع</button>
      </div>
    </div>
  )
}

export default CartView