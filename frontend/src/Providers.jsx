'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import CartInitializer from './components/cart/CartInitializer'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <CartInitializer />
            {children}
        </Provider>
    )
}

export default Providers