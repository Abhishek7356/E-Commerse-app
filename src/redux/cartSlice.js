import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log(action);
            let finding = state.cartItems.find((item) => {
                return item.id == action.payload.id;
            })
            if (!finding) {
                state.cartItems.push({ ...action.payload, itemCount: 1 })
            } else {
                alert('Item already exist , please check your cart')
            }
        },
        itemCount: (state, action) => {
            // console.log(action);
            state.cartItems[action.payload.key].itemCount = Number(action.payload.count);
        },
        deleteItem: (state, action) => {
            // console.log(action);
            if (window.confirm('Are you sure ?')) {
                state.cartItems.splice(action.payload.key, 1);
            }
        },
    }
});

export const { addToCart, itemCount, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
