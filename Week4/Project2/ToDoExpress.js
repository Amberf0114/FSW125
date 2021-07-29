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
    _id : uuidv4(),
    _id:'fc174325-6a20-4387-bc0e-36b37214bce6'
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



    // .delete()

    //empty body when trying to get one
toDoRouter.route('/:todoId')
    .get((req,res) => {
        const toDoId = req.params.todoId
        const foundItem = toDoItems.find(toDoItems => toDoItems._id === toDoId)
        console.log(foundItem) 
        res.send(foundItem)
    })

    .put( (req,res) => {
        const itemId = req.params.todoId
        console.log(itemId)
        const itemIndex = toDoItems.findIndex(item => item._id === itemId)
        console.log(itemIndex)
        console.log(toDoItems[itemIndex])
        const updatedToDoItems = Object.assign(toDoItems[itemIndex], req.body)

        res.send(updatedToDoItems)
    })

    .delete((req,res) => {
        const itemId = req.params.itemId
        const itemIndex = toDoItems.findIndex(item => item._id === itemId)

        toDoItems.splice(itemIndex,1)  
        res.status(500).send(`Successfully deleted from the database `)
    })
    //Error 

module.exports = toDoRouter

