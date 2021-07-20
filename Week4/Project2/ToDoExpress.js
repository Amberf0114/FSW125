const express = require('express')
const app = express()
const { v4 : uuidv4 } = require('uuid')

app.use(express.json())

const toDoRouter = express.Router()

let toDoItems = [{
    name: "Living Area", 
    description : "sweep, mop, dust",
    imageUrl : "",
    completed : false,
    _id : uuidv4()
}]

toDoRouter.route('/')
    .get((req,res) => {
        res.send(toDoItems)
    })

    .post((req,res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        toDoItems.push(newItem)

        res.send(`Succsessfully added ${newItem} to your To-Do list!`)
    })

    //empty body when trying to get one
toDoRouter.route('/:todoId')
    .get((req,res) => {
        const toDoId = req.params.uuidv4()
        const foundItem = toDoItems.find(toDoItems => toDoItems._id === toDoId)
        console.log(foundItem) 
        res.send(foundItem)
    })

module.exports = toDoRouter

//talking with Giselle, showing an empty object in Postman