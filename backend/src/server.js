import express from 'express'

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

app.listen(3000, () => {
    console.log('Server is Running on port 3000');
})