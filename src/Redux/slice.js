import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({ 
    name : "Cart",
    initialState : {count : 0},
    reducers : {
        increment : (state) => {
            state.count += 1;
        },
        decrement : (state) => {
             state.count>0? state.count -= 1 :null;
        },
        clear : (state) => {
            state.count= 0;
        },
    }
});

    export const {increment , decrement, clear} = Cart.actions;
    export default Cart.reducer;
    