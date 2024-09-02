const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const connectDB = require('./config/db');
require('dotenv').config()
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 5000;


// middleware 
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use('/api', router)


// connection
connectDB().then(() => {
    app.get("/", async (req, res) => {
        res.send("Welcome to the GLOBAL Academy")
    })


    app.listen(port, () => {
        console.log(`global is running on ${port}`)
    })


})
