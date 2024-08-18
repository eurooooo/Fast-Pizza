import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload: newItem
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );

      console.log(item);

      if (item) {
        item.quantity++;
        item.totalPrice = item.totalPrice + item.unitPrice;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      // payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.totalPrice + item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.totalPrice - item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getCart(state) {
  return state.cart.cart;
}

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}
export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

export function getItemQuantityById(id) {
  return (state) => {
    const item = state.cart.cart.find((item) => item.pizzaId === id);

    if (!item) return 0;

    return item.quantity;
  };
}
