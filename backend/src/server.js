import express from 'express'
import cors from 'cors'
import { pool } from '../config/database.js'
import categoriesRoutes from './routes/categoriesRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import pVariantsRoutes from './routes/pVariantsRoutes.js'
import pImagesRoutes from './routes/pImagesRoutes.js'
import addressesRoutes from './routes/addressesRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import cartsRoutes from './routes/cartsRoutes.js'
const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.use('/api/categories', categoriesRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/product-variants', pVariantsRoutes)
app.use('/api/product-images', pImagesRoutes)
app.use('/api/addresses', addressesRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/carts', cartsRoutes)
app.get('/api/order-items', async (req, res) => {
    const result = await pool.query(
        `${getQuery} order_items`
    )
    res.json(result.rows)
})
app.get('/api/orders', async (req, res) => {
    const result = await pool.query(
        `${getQuery} orders`
    )
    res.json(result.rows)
})
app.get('/api/payments', async (req, res) => {
    const result = await pool.query(
        `${getQuery} payments`
    )
    res.json(result.rows)
})
app.listen(4000, () => {
    console.log('Server is Running on port 4000');
})