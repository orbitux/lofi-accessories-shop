'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import CartInitializer from './components/cart/CartInitializer'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'sonner'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <CartInitializer />
                <Toaster position='top-center' />
                {children}
            </AuthProvider>
        </Provider>
    )
}

export default Providers