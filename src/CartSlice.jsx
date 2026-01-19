import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // array of { name, image, cost, quantity, ... }
  },
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const item = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        (i) => i.name === item.name
      );

      if (existingItem) {
        // If exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If new, add with quantity 1
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // ✅ Remove item from cart by name
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== name
      );
    },

    // ✅ Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
