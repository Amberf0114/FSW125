const express = require('express')
const app = express()
const { v4 : uuidv4 } = require('uuid')


app.use(express.json())

const foodRouter = express.Router()

let food = [
    {food: 'Apple', price: 5, _id: uuidv4()},
    {food: 'Pear', price: 4, _id: uuidv4()},
    {food: 'Plum', price: 3, _id: uuidv4()},
    {food: 'Melon', price: 2, _id: uuidv4()},
    {food: 'Peach', price: 1, _id: uuidv4()}
]

foodRouter.route('/')

    .get((req, res) => {
        res.send(food)
    })

    .post((req, res) => {
        const newfood = req.body
        newfood._id = uuidv4()
        food.push(newfood)

        console.log(food)
        res.send(newfood)
    })

foodRouter.route('/search')

    .get((req,res) => {
        const foodId = req.query.price
        console.log(foodId, typeof foodId)
        const filteredFood = food.filter(food => food.price == foodId)

        res.send(filteredFood)
    })

foodRouter.route('/:foodId')
    .get((req, res) => {
        const foodId = req.params.foodId
        const foundfood = food.find(food => food._id === foodId)
        res.send(foundfood)
    })


    .put((req,res) => {
        const foodId = req.params.foodId
        const foodIndex = food.findIndex(food => food._id === foodId)
        const updatedfood = Object.assign(food[foodIndex], req.body)

        res.send(updatedfood)
    })
    .delete((req,res) => {
        const foodId = req.params.foodId
        const foodIndex = food.findIndex(food => food._id === foodId)

        food.splice(foodIndex,1)
        res.send(`Successfully deleted from the database `)
    })

    module.exports = foodRouter
