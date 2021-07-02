//Easily readable
//Easily indexed

//DO NOT use dashes between route path words

// Folder of different routes with seperate files for each route

//dont need new instance of express in server file
//instead declare a new instance of our router class
const animalRouter = express.Router()

const express = require('express')
const app = express()
const {v4: uuidv4 } = require('uuid')

const PORT = 3000

//middleware
app.use(express.json())

//routes
app.use('/animals', animalRouter)

//server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})