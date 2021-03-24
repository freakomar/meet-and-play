require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const { routes } = require('./src/routes')


// Подключение к бд
mongoose.connect(
    process.env.MONGO_URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

// Инициализация приложения
const app = express()
app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.forEach(item => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))    
})

// объявление роутов
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`);