const express = require('express')
const app = express()


const PORT = 5000

app.use(express.json())

app.use('/foods', require('./foodRouter'))

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})