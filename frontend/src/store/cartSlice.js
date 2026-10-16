import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: [],
    totalQuantity: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload
            state.totalQuantity = action.payload.reduce(
                (total, item) => total + item.quantity, 0
            )
        }
    }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer