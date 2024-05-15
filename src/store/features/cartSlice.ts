import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/interfaces_product";
import { Cart } from "../../types/interfaces_cart";


const initialState = {
  cartList: {},
  displayCart: {},
  totalItems: 0,
  totalCost: 0
}
type addCartAction = {
  type: string,
  payload: Product
}

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartInstance(state) {
      const cs = localStorage.getItem('cart');
      if (!cs)
        state.cartList = {
          products: []
        }
      else {
        state.cartList = JSON.parse(cs);
        (state.totalItems as number) = (state.cartList as Cart).products.length;
        if (cs) {
          const cartLocalStorage = JSON.parse(cs);
          state.totalCost = 0;
          cartLocalStorage.products.forEach((item: Product) => {
            state.totalCost += item.price * Number(item.qty);
          });
        }
      }
    },
    // addToCart(state, action: PayloadAction<Product>) {
    addToCart(state, action: addCartAction) {
      const cs = localStorage.getItem('cart');
      let isAdded = false;
      if (!cs) {
        state.cartList = {
          products: [
            action.payload
          ]
        }
      }
      else {
        const cartLocalStorage = JSON.parse(cs);

        cartLocalStorage.products = cartLocalStorage.products.map((ci: any) => {
          if (ci.id == action.payload.id) {
            isAdded = true;
            // if (localStorage.getItem("cartAdded")) {
            //   let newObj = {
            //     id: action.payload.categoryId,
            //     productId: action.payload.id,
            //     quantity: action.payload?.qty + 1
            //   }
            //   axios.post(`/cart/update/${action.payload.categoryId}?token=${localStorage.getItem("token")}`, newObj);
            // }
            return {
              id: ci.id, name: ci.name, imageURL: ci.imageURL, price: ci.price, description: ci.description,
              categoryId: ci.categoryId, qty: ci.qty + 1
            }
          }
          return {
            id: ci.id,
            name: ci.name,
            imageURL: ci.imageURL,
            price: ci.price,
            description: ci.description,
            categoryId: ci.categoryId,
            qty: ci.qty
          }
        })

        if (!isAdded) {
          cartLocalStorage.products.push(
            {
              id: action.payload.id,
              name: action.payload.name,
              imageURL: action.payload.imageURL,
              price: action.payload.price,
              description: action.payload.description,
              categoryId: action.payload.categoryId,
              qty: action.payload.qty
            }
          )
          // if (localStorage.getItem("cartAdded")) {
          //   let newObj = {
          //     id: action.payload.id,
          //     productId: action.payload.id,
          //     quantity: action.payload.qty
          //   }
          //   axios.post(`/cart/add?token=${localStorage.getItem("token")}`, newObj);
          // }

        }


        state.cartList = cartLocalStorage;
        state.totalItems = cartLocalStorage.products.length;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    onDecrementItemToCard(state, action) {
      const cs = localStorage.getItem('cart');
      let isAdded = false;

      if (cs) {
        const cartLocalStorage = JSON.parse(cs);

        cartLocalStorage.products = cartLocalStorage.products.map((ci: Product) => {
          if (ci.id == action.payload.id) {
            isAdded = true
            return {
              id: ci.id, name: ci.name, imageURL: ci.imageURL, price: ci.price, description: ci.description,
              categoryId: ci.categoryId, qty: ci.qty - 1
            }
          }
          return {
            id: ci.id,
            name: ci.name,
            imageURL: ci.imageURL,
            price: ci.price,
            description: ci.description,
            categoryId: ci.categoryId,
            qty: ci.qty
          }
        })
        state.cartList = cartLocalStorage;

      }
      localStorage.setItem('cart', JSON.stringify(state.cartList));

    },
    removeFromCart(state, action) {
      (state.cartList as Cart).products = (state.cartList as Cart).products.filter(ci => ci.id != action.payload.id)
      CartSlice.actions.displayCartLoad();
      localStorage.setItem('cart', JSON.stringify(state.cartList));

      // const token = localStorage.getItem('token');
      // if (token) {
      //     axios.delete(`/cart/delete/${action.payload.categoryId}?token=${localStorage.getItem("token")}`).then((response) => {
      //         this.getAuthCartItems();
      //     })
      // }

    },
    displayCartLoad(state) {
      state.displayCart = (state.cartList as Cart).products.map(ci => {
        // const requiredProduct = this.useProductStore?.productList.filter(p => p.id == ci.id);
        return {
          id: ci.id,
          name: ci.name,
          imageURL: ci.imageURL,
          price: ci.price,
          description: ci.description,
          categoryId: ci.categoryId,
          qty: ci.qty
        }
      })

    },
  },
});

export default CartSlice.reducer;

export const { addToCart, loadCartInstance, onDecrementItemToCard, removeFromCart, displayCartLoad } = CartSlice.actions;

export const selectAllCart = (state: any) => state.cart.cartList;
export const selecttotalCost = (state: any) => state.cart.totalCost;
