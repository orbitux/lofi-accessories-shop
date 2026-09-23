import express from 'express'
import { pool } from '../config/database.js'
import categoriesRoutes from './routes/categoriesRoutes.js'
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.json({
        message: "API is running!"
    })
})

app.post('/api/products', (req, res) => {
    console.log(req.body);

    res.status(201).json({
        message: "Data received successfuly",
        data: req.body
    })

})

app.use('/api/categories',categoriesRoutes)
const getQuery = "SELECT * FROM"
app.get('/api/addresses', async (req, res) => {
    const result = await pool.query(
        `${getQuery} addresses`
    )
    res.json(result.rows)
})
app.get('/api/cart-items', async (req, res) => {
    const result = await pool.query(
        `${getQuery} cart_items`
    )
    res.json(result.rows)
})
app.get('/api/carts', async (req, res) => {
    const result = await pool.query(
        `${getQuery} carts`
    )
    res.json(result.rows)
})

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
app.get('/api/payments',async (req,res)=>{
    const result = await pool.query(
        `${getQuery} payments`
    )
    res.json(result.rows)
})
app.get('/api/product-images',async(req,res)=>{
    const result = await pool.query(
        `${getQuery} product_images`
    )
    res.json(result.rows)
})
app.get('/api/product-variants',async(req,res)=>{
    const result = await pool.query(
        `${getQuery} product_variants`
    )
    res.json(result.rows)
})
app.get('/api/products',async(req,res)=>{
    const result = await pool.query(
        `${getQuery} products`
    )
    res.json(result.rows)
})
app.get('/api/users',async(req,res)=>{
    const result = await pool.query(
        `${getQuery} users`
    )
    res.json(result.rows)
})
app.listen(3000, () => {
    console.log('Server is Running on port 3000');
})