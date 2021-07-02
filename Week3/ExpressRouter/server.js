const express = require('express')
const app = express()


const bountyRouter = express.Router()

const PORT = 3000

app.use(express.json())

app.use('/bounties', bountyRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})